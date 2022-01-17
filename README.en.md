# **Open Source Interlinear Bible (Greek/Hebrew-Indonesian)**
*Read in [Indonesian](https://github.com/benihyangbaik/asti#readme), [English](https://github.com/benihyangbaik/asti/blob/main/README.en.md), [Brazillian Portuguese](https://github.com/benihyangbaik/asti/blob/main/README.ptbr.md).*

*Open Source Interlinear Bible* (*Alkitab Interlinear Sumber Terbuka*,
**AIST**) is a project organized by Benih Yang Baik to facilitate access to the
Indonesian-language Interlinear Bible for all
Indonesian-speaking congregations.

AIST can be cited, used freely, with attribution to [Benih Yang
Baik](https://benihyangbaik.com).


## **Interlinear Bible in Digital Format**
At the same time, because there exist no known standard for a digital format of
interlinear Bible, ASTI also provides and spread the use of a interlinear Bible
digital format in two forms: (1) *cheap to compute*, (2) *clear and easy to
understand*.


### **Cheap to Compute**
Form (1) is the format of [Open Scriptures' Hebrew Bible,
OSHB](https://github.com/openscriptures/morphhb) with a little modification.
One more data point in from of the original language data point. Example:

**Original OSHB Format**
```json
{
  "Genesis": [
    [
      [
        ["ב/ראשית","Hb/H7225","HR/Ncfsa"],
        ["ברא","H1254","HVqp3ms"],
        ["אלהים","H430","HNcmpa"],
        ["את","H853","HTo"],
        ["ה/שמים","Hd/H8064","HTd/Ncmpa"],
        ["ו/את","Hc/H853","HC/To"],
        ["ה/ארץ","Hd/H776","HTd/Ncbsa"]
      ]
    ]
  ]
}
```

**Modified OSHB Format**
```json
{
  "Genesis": [
    [
      [
        ["Pada mulanya","ב/ראשית","Hb/H7225","HR/Ncfsa"],
        ["menciptakan","ברא","H1254","HVqp3ms"],
        ["Allah","אלהים","H430","HNcmpa"],
        ["-","את","H853","HTo"],
        ["surga","ה/שמים","Hd/H8064","HTd/Ncmpa"],
        ["dan","ו/את","Hc/H853","HC/To"],
        ["bumi","ה/ארץ","Hd/H776","HTd/Ncbsa"]
      ]
    ]
  ]
}
```


## **Source**
1. Greek Text: [Byzantine Majority Greek New
   Testament](https://github/byztxt/byzantine-majority-text) by Robinson and
   Pierpoint.
2. Hebrew Text: OSHB by Open Scriptures, Leningrad Westminster Codex.


## **Purpose**
1. Provides an open source interlinear Bible, mainly in digital format, in the
   Indonesian language.
2. Provides easy access for Indonesians to an interlinear Bible, mainly in
   digital format.
3. Spread the use of a human-readable interlinear Bible digital format based on
   UTF-8 that's easily convertible into other formats.

Every person has a right to access the Bible in its original language easily
and Lord Jesus desires for everyone to know Him as He is.


## **Steps**
To reach easy accessibility in various formats, the following are necessary:
- [ ] An interlinear format in two forms: (1) small in file size and (2) clear
  and easy to understand.
- [x] A tool to translate the original text to the target language as a desktop
  application and web application. Now ready to use: [source code
  repository](https://github.com/benihyangbaik/interlinear-bible-simple-editor),
  [web application](https://ibse.benihyangbaik.com).
- [ ] A tool to display this format in a web application.
- [ ] A tool to convert interlinear format (1) to (2) and vice versa, and later
  other formats if necessary.


## **Development**
- The translation tool is ready to use, but there is still a couple of feature
  that's missing.
- The cheap to compute interlinear format is ready to use, [see
  above](https://github.com/benihyangbaik/asti/blob/main/README.en.md#cheap-to-compute)
  and the book of Genesis is being translated.
- The Byzantine text is in the process of being converted, from the *parsed*
  and *CSV-Unicode* versions in the already mentioned repository
  [above](https://github.com/benihyangbaik/asti/blob/main/README.en.md#source).
  It is on hold until the middle of February 2022, except someone contributes.
