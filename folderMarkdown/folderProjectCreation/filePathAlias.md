# PATH ALIAS CONFIGURATION

## THE PROBLEM

UNDER CONSTRUCTION

## CONFIGURATION

* ADD THE FOLLOWING PROPERTY TO [_package.json_](../package.json):

  ```json
  "imports":{
      "#pathJavascriptExamples/*": "./folderSource/folderTopics/*",
      "#pathTypescriptExamples/*": "./folderDist/folderTopics/*",
      "#pathModules/*": "./folderDist/folderModules/*"
  },
  ```

* ADD THE FOLLOWING PROPERTY IN _compilerOptions_ OF [_tsconfig.json_](../tsconfig.json) (ONLY IF WORKING WITH TYPESCRIPT):

  ```json
  "paths": {
      "#pathJavascriptExamples/*": ["./folderSource/folderTopics/*"],
      "#pathTypescriptExamples/*": ["./folderDist/folderTopics/*", "./folderSource/folderTopics/*"],
      "#pathModules/*": ["./folderDist/folderModules/*", "./folderSource/folderModules/*"]
  },
  ```

## EXAMPLE (PATH ALIAS WITH _JAVASCRIPT_)

* CREATE [_functionSum.js_](../../folderSource/folderTopics/functionSum.js) IN _folderTopics_.
* CREATE [_examplePathAlias.js_](../../folderSource/folderTopics/examplePathAlias.js) IN _folderTopics_.
* RUN THE EXAMPLE:
  
  ```bash
  npx nodemon ./folderSource/folderTopics/examplePathAlias.js
  ```

## EXAMPLE (PATH ALIAS WITH _TYPESCRIPT_)

* CREATE [_functionSubtraction.ts_](../../folderSource/folderTopics/functionSubtraction.ts) IN _folderTopics_.
* CREATE [_examplePathAlias.ts_](../../folderSource/folderTopics/examplePathAlias.ts) IN _folderTopics_.
* RUN THE EXAMPLE
  
  ```bash
  npm run tsc-nodemon --jsfile=./folderDist/folderTopics/examplePathAlias.js
  ```

[BACK](./fileProjectCreation.md)
