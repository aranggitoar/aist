import * as React from 'react';
import styled from 'styled-components';
import {
  TranslationBlockTargetLanguage,
  TranslationBlockOriginalLanguage,
  TranslationBlockStrongs,
  TranslationBlockMorphology,
} from './components/translation-block';
import {
  MenuBlockLoad,
  MenuBlockSave,
  MenuBlockDisplaySettings,
} from './components/menu-block';

// Three main styled element,
// a main element containing the whole app interface,
// a div element containing the menu items,
// a div element containing the translation items.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100%;
  padding: 2rem;
`;

const MenuBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`;

const TranslationBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: center;
  padding: 1rem;
`;

export function App(): React.ReactElement<Record<string, unknown>> {
  return (
    <Container id="app">
      <MenuBlock>
        <MenuBlockLoad />
        <MenuBlockSave />
        <MenuBlockDisplaySettings />
      </MenuBlock>
      <TranslationBlock>
        <TranslationBlockTargetLanguage />
        <TranslationBlockOriginalLanguage />
        <TranslationBlockStrongs />
        <TranslationBlockMorphology />
      </TranslationBlock>
    </Container>
  );
}
