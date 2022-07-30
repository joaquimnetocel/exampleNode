# _DOTENV_

## DESCRIPTION

[DOTENV](https://www.npmjs.com/package/dotenv) IS A PACKAGE TO DEFINE ENVIRONMENT VARIABLES.

## INSTALLATION

* INSTALL THE [_DOTENV_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv).
* INSTALL THE PACKAGE:

  ```bash
  npm install dotenv
  ```

## CONFIGURATION

* CREATE [_.env_](../../.env) FILE. THIS FILE WILL CONTAIN ENVIRONMENTAL VARIABLES AVAILABLE THROUGH `process.env.variablename`.
* ADD _.env_ AS A NEW LINE IN [_.gitignore_](../../.gitignore) (GOOD PRACTICE).

## EXAMPLE

* CREATE FILE [_exampleDotenv.js_](../../folderSource/folderExamples/exampleDotenv.js) IN _folderExamples_.
* RUN THE EXAMPLE:

    ```bash
    npx nodemon ./folderSource/folderExamples/exampleDotenv.js
    ```

[BACK](./fileProjectCreation.md)
