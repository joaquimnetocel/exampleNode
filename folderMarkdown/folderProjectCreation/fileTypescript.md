# _TYPESCRIPT_

## DESCRIPTION

INSTRUCTIONS TO CONFIGURE:

* [TYPESCRIPT](https://www.typescriptlang.org): A SYNTACTIC SUPERSET OF JAVASCRIPT WHICH ADDS OPTIONAL STATIC TYPING TO THE LANGUAGE.

## REQUIRED PACKAGES
  
```bash
npm install -D typescript
npm install -D @types/node
```

## CONFIGURATION

* CREATE [_tsconfig.json_](../tsconfig.json):

  ```bash
  npx tsc --init --allowSyntheticDefaultImports true --lib ES2021 --module ES2020 --moduleResolution node --target ES2021 --rootDir ./folderSource --outDir ./folderDist --removeComments true --resolveJsonModule true --types node
  ```

* RESTART VSCODE.
* ADD _folderDist_ AS A NEW LINE IN [_.gitignore_](../.gitignore).

* CREATE A NPM SCRIPT TO RUN _TYPESCRIPT_ WITH _NODEMON_:
  * CREATE COMMAND `npm run tsc-nodemon` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN _package.json_:

    ```json
    "tsc-nodemon": "nodemon --exec \"tsc --skipLibCheck && node %npm_config_jsfile%\"",
    ```

## RUNNING THE EXAMPLE WITH _TYPESCRIPT_ AND _NODE_

```bash
npx tsc # TRANSPILE ALL _.ts_ FILES IN _folderSource_ TO _.js_ FILES IN _folderDist_
node ./folderDist/folderExamples/exampleHelloWorld.js
```

## RUNNING AN EXAMPLE WITH _TYPESCRIPT_ AND _NODEMON_

```bash
npm run tsc-nodemon --jsfile=./folderDist/folderExamples/exampleHelloWorld.js
```
