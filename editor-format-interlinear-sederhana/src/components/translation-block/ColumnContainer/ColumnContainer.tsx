import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { TextField } from '@fluentui/react';

import { getArrayOfWordComponents } from '@/utilities/getArrayOfWordComponents';
import { getTargetWords } from '@/utilities/getTargetWords';
import { getOriginalWords } from '@/utilities/getOriginalWords';
import { getStrongs } from '@/utilities/getStrongs';
import { getMorphologies } from '@/utilities/getMorphologies';

type Props = {
  loadedBibleObject: ILoadedBible,
  updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void
}

const updateTranslation = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, bibleObjectAndDetails: Array<ILoadedBible | Array<string>>, updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void) => {
  let newTargetWord = e.currentTarget.value;
  let oldBible = bibleObjectAndDetails[0] as ILoadedBible;
  let wordLocationInOldBible = bibleObjectAndDetails[1];

  let bibleBookName = wordLocationInOldBible[0],
      chapterIndex = wordLocationInOldBible[1],
      verseIndex = wordLocationInOldBible[2],
      wordIndex = wordLocationInOldBible[3];

  // @ Insert the new word.
  // This assumes that the first array of the word component array is correctly arranged by populateWithEmptyTargetLanguage function.
  oldBible.bibleObject[bibleBookName][chapterIndex][verseIndex][wordIndex][0] = newTargetWord;

  const newBible: ILoadedBible = {
    ['bibleObject']: oldBible.bibleObject,
    ['chosenBibleSourceName']: oldBible.chosenBibleSourceName,
    ['chosenBibleBookNames']: oldBible.chosenBibleBookNames,
    ['chosenBibleBookDetails']: oldBible.chosenBibleBookDetails
  }

  updateUploadedBible(newBible)
}

function rowContentsGenerator(sourceData: Array<Array<string>>, index: number, bibleObject: ILoadedBible, updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void) {
  // Prepare markup.
  let markup = '';
  // Prepare translation index identification.
  let targetLanguageID = 'target-language-' + index as unknown as string;
  // Add word index in the verse array.
  if (sourceData[4].length < 4) {
    sourceData[4].push(index as unknown as string);
  } else {
    sourceData[4][3] = index as unknown as string;
  }
  console.log(sourceData[4]);

  markup = '<div class="row-strongs row-container">' + sourceData[2][index] + '</div>';

  markup += '<div class="row-original-language row-container">' + sourceData[1][index] + '</div>'

  markup += '<div class="row-target-language row-container">' +
    ReactDOMServer.renderToStaticMarkup(
      <TextField id={targetLanguageID} value={sourceData[0][index]} onChange={
        (e) => {updateTranslation(e, [bibleObject, sourceData[4]], updateUploadedBible)}
      } />
    ) + '</div>';

  markup += '<div class="row-morphology row-container">' + sourceData[3][index] + '</div>'

  return markup;
}

function columnContainerGenerator(sourceData: Array<Array<string>>,
count: number, bibleObject: ILoadedBible, updateUploadedBible: (newlyLoadedBibleObject: ILoadedBible) => void) {
  let markup = '';
  for (let i:number = 0; i < count; i++) {
    let columnId = "column-" + i as string;
    markup += `<div id=${columnId}>${rowContentsGenerator(sourceData, i, bibleObject, updateUploadedBible)}</div>`
  }
  return markup;
}

function dataAssembler(bibleObjectCopy: ILoadedBible, updateUploadedBible: (newlyLoadedBibleObject:ILoadedBible) => void) {
  // Prepare empty variables.
  let bibleObject = {} as Object,
      chosenBibleBookDetails = [] as Array<string>,

      chosenBibleBookName = '' as string,
      chosenBibleBookContents = [] as Array<Array<Array<string>>>,
      chosenChapterIndex = '' as string,
      chosenChapterContents = [] as Array<Array<string>>,
      chosenVerseIndex = '' as string,
      arrayOfChosenVerseContents = [] as Array<string>,
      stringOfChosenVerseContents = '' as string,

      arrayOfSourceData = [] as Array<Array<string>>,
      arrayOfWordComponents = [] as Array<Array<string>>,
      arrayOfTargetWords = [] as Array<string>,
      arrayOfOriginalWords = [] as Array<string>,
      arrayOfStrongs = [] as Array<string>,
      arrayOfMorphologies = [] as Array<string>;

  // Prepare the Bible object.
  bibleObject = bibleObjectCopy.bibleObject,
  chosenBibleBookDetails = bibleObjectCopy.chosenBibleBookDetails,
  chosenBibleBookName = chosenBibleBookDetails[0],
  chosenChapterIndex = chosenBibleBookDetails[1],
  chosenVerseIndex = chosenBibleBookDetails[2];

  // Prepare the displayed Bible. Currently only verse by verse.
  // First index is the Bible book name, the second is chapter index and third
  // verse index.
  if (bibleObject[chosenBibleBookName] !== undefined) {
    chosenBibleBookContents = bibleObject[chosenBibleBookName];
    chosenChapterContents = chosenBibleBookContents[chosenChapterIndex];
    arrayOfChosenVerseContents = chosenChapterContents[chosenVerseIndex];

    stringOfChosenVerseContents = arrayOfChosenVerseContents.toString();
    arrayOfChosenVerseContents = stringOfChosenVerseContents.split(',')
    console.log(arrayOfChosenVerseContents)


    // Get parts of the loaded Bible object.
    getArrayOfWordComponents(arrayOfWordComponents, arrayOfChosenVerseContents);
    getTargetWords(arrayOfWordComponents, arrayOfTargetWords);
    getOriginalWords(arrayOfWordComponents, arrayOfOriginalWords);
    getStrongs(arrayOfWordComponents, arrayOfStrongs);
    getMorphologies(arrayOfWordComponents, arrayOfMorphologies);

    // Save the source data into an array.
    arrayOfSourceData = [
      arrayOfTargetWords,
      arrayOfOriginalWords,
      arrayOfStrongs,
      arrayOfMorphologies,
      chosenBibleBookDetails
    ]
    console.log(arrayOfWordComponents)
    console.log(arrayOfSourceData);
  }
  
  return columnContainerGenerator(arrayOfSourceData, arrayOfStrongs.length, bibleObjectCopy, updateUploadedBible)
}

const TranslationBlockColumnContainer: React.FC<Props> = ({loadedBibleObject, updateUploadedBible}) => {
  return (
    <>
      <div id="column-container" dangerouslySetInnerHTML={{__html:dataAssembler(loadedBibleObject, updateUploadedBible)}} />
    </>
  );
}

export default TranslationBlockColumnContainer;
