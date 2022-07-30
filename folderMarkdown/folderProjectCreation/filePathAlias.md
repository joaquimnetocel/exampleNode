# PATH ALIAS CONFIGURATION

## THE PROBLEM

UNDER CONSTRUCTION

## CONFIGURATION

* ADD THE FOLLOWING PROPERTY TO [_package.json_](../package.json):

  ```json
  "imports":{
      "#pathJavascriptExamples/*": "./folderSource/folderExamples/*",
      "#pathTypescriptExamples/*": "./folderDist/folderExamples/*",
      "#pathModules/*": "./folderDist/folderModules/*"
  },
  ```

* ADD THE FOLLOWING PROPERTY IN _compilerOptions_ OF [_tsconfig.json_](../tsconfig.json) (ONLY IF WORKING WITH TYPESCRIPT):

  ```json
  "paths": {
      "#pathJavascriptExamples/*": ["./folderSource/folderExamples/*"],
      "#pathTypescriptExamples/*": ["./folderDist/folderExamples/*", "./folderSource/folderExamples/*"],
      "#pathModules/*": ["./folderDist/folderModules/*", "./folderSource/folderModules/*"]
  },
  ```

## EXAMPLE (PATH ALIAS WITH _JAVASCRIPT_)

* CREATE [_functionSum.js_](../../folderSource/folderExamples/functionSum.js) IN _folderExamples_.
* CREATE [_examplePathAlias.js_](../../folderSource/folderExamples/examplePathAlias.js) IN _folderExamples_.
* RUN THE EXAMPLE:
  
  ```bash
  npx nodemon ./folderSource/folderExamples/examplePathAlias.js
  ```

## EXAMPLE (PATH ALIAS WITH _TYPESCRIPT_)

* CREATE [_functionSubtraction.ts_](../../folderSource/folderExamples/functionSubtraction.ts) IN _folderExamples_.
* CREATE [_examplePathAlias.ts_](../../folderSource/folderExamples/examplePathAlias.ts) IN _folderExamples_.
* RUN THE EXAMPLE
  
  ```bash
  npm run tsc-nodemon --jsfile=./folderDist/folderExamples/examplePathAlias.js
  ```

[BACK](./fileProjectCreation.md)
