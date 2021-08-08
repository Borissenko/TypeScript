declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}



// These are useful when using Node modules that do not contain any TypeScript interfaces, types, or declaration files.
// In a sense, the only purpose for these files are to tell TypeScript how to handle external code.
//
// So in this case, we are essentially telling the TypeScript compiler (and the IDE)
// how to handle .vue files; a framework-specific file with HTML, CSS, and TS.
//


//   Они полезны при использовании модулей Node, которые не содержат интерфейсов TypeScript, типов или файлов объявлений.
//   В каком-то смысле единственная цель этих файлов - рассказать TypeScript, как обрабатывать внешний код.
//
//   Так что в этом случае мы, по сути, говорим компилятору TypeScript (и IDE)
// как обрабатывать файлы .vue; специфичный для фреймворка файл с HTML, CSS и TS.