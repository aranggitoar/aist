# **Bíblia de Código Aberto Interlinear (Grego/Hebraico-Indonésio)**
*Read in [Indonesian](https://github.com/benihyangbaik/asti#readme), [English](https://github.com/benihyangbaik/asti/blob/main/README.en.md), [Brazillian Portuguese](https://github.com/benihyangbaik/asti/blob/main/README.ptbr.md).*

*Bíblia de Código Aberto Interlinear* (*Alkitab Interlinear Sumber Terbuka
Interlinear*, **AIST**) é um projeto organizado por Benih Yang Baik para
facilitar o acesso e fornecer acesso gratuito a Bíblia Interlinear de língua
indonésia para todas as congregações de língua indonésia.

AIST pode ser citado, usado livremente, com atribuição a [Benih Yang
Baik](https://benihyangbaik.com).


## **Bíblia Interlinear em Formato Digital**
Ao mesmo tempo, porque não existe um padrão conhecido para um formato digital de
Bíblia interlinear, AIST também fornece e propague o uso de uma Bíblia interlinear
formato digital em duas formas: (1) *computacionalmente barato*, (2) *claro e fácil de
compreender*.

### **Computacionalmente Barato**
O formato (1) é o formato [Hebraico Bíblia do Open
Scriptures](https://github.com/openscriptures/morphhb) (Open Scriptures Hebrew
Bible, OSHB) com pequenas modificações. Ou seja, um ponto de dados adicional na
frente do ponto de dados do idioma nativo. Exemplo:

**Formato OSHB Original**
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

**Formato OSHB Modificado**
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


## **Fonte**
1. Texto Grego: [Maioria Bizantina Grego Novo
   Testamento](https://github.com/byztxt/byzantine-majority-text) (Byzantine
   Majority Greek New Testament) por Robinson e Pierpoint.
2. Texto Hebraico: OSHB por Open Scriptures, Códice de Leningrado Westminster
   (Westminster Leningrad Codex).


## **Propósito**
1. Fornece uma Bíblia interlinear de código aberto, principalmente em formato digital, na
   língua indonésia.
2. Fornece acesso fácil para os indonésios a uma Bíblia interlinear, principalmente em
   formato digital.
3. Propagar o uso de um formato digital interlinear da Bíblia legível por humanos baseado em
   UTF-8 que é facilmente convertível em outros formatos.

Toda pessoa tem o direito de acessar a Bíblia em seu idioma original facilmente
e o Senhor Jesus deseja que todos O conheçam como Ele é.


## **Degraus**
Para alcançar fácil acessibilidade em vários formatos, são necessários:
- [ ] Um formato interlinear em duas formas: (1) pequeno em tamanho de arquivo e (2) claro
  e fácil de entender.
- [x] Uma ferramenta para traduzir o texto original para o idioma de destino como um desktop
  aplicativo e aplicativo da web. Agora pronto para usar: [código-fonte
  repositório](https://github.com/benihyangbaik/interlinear-bible-simple-editor),
  [aplicativo da web](https://ibse.benihyangbaik.com).
- [ ] Uma ferramenta para exibir esse formato em um aplicativo da web.
- [ ] Uma ferramenta para converter o formato interlinear (1) para (2) e vice-versa, e mais tarde
  outros formatos, se necessário.


## **Desenvolvimento**
- A ferramenta de tradução está pronta para uso, mas ainda faltam alguns
  recursos.
- O formato interlinear computacionalmente barato está pronto para uso, [confira
  acima](https://github.com/benihyangbaik/asti/blob/main/README.ptbr.md#computacionalmente-barato) e o
  livro de Gênesis está sendo traduzido.
- O texto bizantino está em processo de conversão, das versões *analisada* e
  *CSV-Unicode* no repositório já mencionado
  [acima](https://github.com/benihyangbaik/asti/blob/main/README.ptbr.md#fonte). Isso foi adiado até
  meados de fevereiro de 2022, a menos que alguém contribuísse.
