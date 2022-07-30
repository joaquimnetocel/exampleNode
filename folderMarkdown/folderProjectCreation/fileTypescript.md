# _TYPESCRIPT_

## DESCRIPTION

[TYPESCRIPT](https://www.typescriptlang.org) IS A SYNTACTIC SUPERSET OF JAVASCRIPT WHICH ADDS OPTIONAL STATIC TYPING TO THE LANGUAGE.

## INSTALLATION
  
* INSTALL THE PACKAGE:

  ```bash
  npm install -D typescript
  ```

* INSTALL TYPE DEFINITIONS:
  
  ```bash
  npm install -D @types/node
  ```

## CONFIGURATION

* CREATE [_tsconfig.json_](../tsconfig.json):

  ```bash
  npx tsc --init --allowSyntheticDefaultImports true --lib ES2021 --module ES2020 --moduleResolution node --target ES2021 --rootDir ./folderSource --outDir ./folderDist --removeComments true --resolveJsonModule true --types node
  ```

* RESTART VSCODE.
* ADD _folderDist_ AS A NEW LINE IN [_.gitignore_](../.gitignore).

## EXAMPLE: HELLO WORLD WITH _TYPESCRIPT_ AND _NODE_

* CREATE [_exampleHelloWorld.ts_](../../folderSource/folderExamples/exampleHelloWorld.ts) IN _folderExamples_.
* RUN THE EXAMPLE:
  
  ```bash
  npx tsc # TRANSPILE ALL _.ts_ FILES IN _folderSource_ TO _.js_ FILES IN _folderDist_
  node ./folderDist/folderExamples/exampleHelloWorld.js
  ```

## CONFIGURATION FOR TYPESCRIPT WITH NODEMON

* CREATE A NPM SCRIPT TO RUN _TYPESCRIPT_ WITH _NODEMON_:
  * CREATE COMMAND `npm run tsc-nodemon` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN _package.json_:

    ```json
    "tsc-nodemon": "nodemon --exec \"tsc --skipLibCheck && node %npm_config_jsfile%\"",
    ```

## EXAMPLE: HELLO WORLD WITH _TYPESCRIPT_ AND _NODEMON_

* CREATE [_exampleHelloWorld.ts_](../../folderSource/folderExamples/exampleHelloWorld.ts) IN _folderExamples_.
* RUN THE EXAMPLE:

  ```bash
  npm run tsc-nodemon --jsfile=./folderDist/folderExamples/exampleHelloWorld.js
  ```
