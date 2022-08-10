# _DOTENV_

## DESCRIPTION

EXAMPLE OF [_NODE.JS_](https://nodejs.org) USING:

* [DOTENV](https://www.npmjs.com/package/dotenv): A PACKAGE TO DEFINE ENVIRONMENT VARIABLES.

## RECOMMENDED VSCODE EXTENSION

INSTALL THE [_DOTENV_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv).

## REQUIRED PACKAGE

```bash
npm install dotenv
```

## CONFIGURATION

* CREATE [_.env_](../../.env) FILE. THIS FILE WILL CONTAIN ENVIRONMENTAL VARIABLES AVAILABLE THROUGH `process.env.variablename`.
* ADD _.env_ AS A NEW LINE IN [_.gitignore_](../../.gitignore) (GOOD PRACTICE).

## RUNNING THE EXAMPLE

```bash
npx nodemon ./folderSource/folderExamples/folderDotenv/exampleDotenv.js
```
