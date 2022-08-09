# PROJECT CREATION

## PREREQUISITE

* TO CREATE THIS PROJECT FROM ZERO, WE HAVE TO CONFIGURE THE EXECUTION POLICY... OPEN _VSCODE_ AS ADMINISTRATOR AND RUN THE FOLLOWING COMMAND IN TERMINAL:

  ```bash
  Set-ExecutionPolicy RemoteSigned
  ```  

## INSTRUCTIONS

* CREATE FOLDERS:
  * CREATE FOLDER _folderSource_.
  * CREATE FOLDER _folderExamples_ IN _folderSource_.
  * CREATE FOLDER _folderModules_ IN _folderSource_.
  * CREATE FOLDER _folderViews_ IN _folderSource_.

* EXAMPLE (HELLO WORLD WITH _NODE_):
  * CREATE [_exampleHelloWorld.js_](../../folderSource/folderExamples/exampleHelloWorld.js) IN _folderExamples_.
  * RUN THE EXAMPLE:

    ```bash
    node ./folderSource/folderExamples/exampleHelloWorld.js
    ```

* PRETTIER (INSTRUCTIONS [HERE](./filePrettier.md)).

* CREATE A FIRST NPM SCRIPT.
  * CREATE `npm run hello` COMMAND BY ADDING THE FOLLOWING LINE TO THE _script_ ENTRY IN [_package.json_](../package.json):

    ```json
    "hello": "node ./folderSource/folderExamples/exampleHelloWorld.js",
    ```

* CREATE [README.md](../../README.md).

* INITIALIZE THE _NODE PACKAGE MANAGER_ (_NPM_):

  ```bash
  npm init -y # THIS IS GOING TO CREATE THE FILE package.json.
  ```

* ENABLE ES6 IMPORTS/EXPORTS BY ADDING THE FOLLOWING LINE TO [_package.json_](../../package.json):

  ```json
  "type": "module",
  ```

* _ESLINT_ PACKAGE (INSTRUCTIONS [HERE](./fileEslint.md)).

* _NODEMON_ PACKAGE (INSTRUCTIONS [HERE](./fileNodemon.md)).

* _GIT_ (INSTRUCTIONS [HERE](./fileGit.md)).

* EXAMPLE (_TEMPLATE STRINGS_ WITH _NODEMON_):
  * CREATE [_exampleTemplateStrings.js_](../../folderSource/folderExamples/exampleTemplateStrings.js) IN _folderExamples_.
  * RUN THE EXAMPLE:

    ```bash
    npx nodemon ./folderSource/folderExamples/exampleTemplateStrings.js
    ```

* _DOTENV_ PACKAGE (INSTRUCTIONS [HERE](./fileDotenv.md)).

* _EXPRESS_ PACKAGE (INSTRUCTIONS [HERE](./fileExpress.md))

* TYPESCRIPT (INSTRUCTIONS [HERE](./fileTypescript.md))

* PATH ALIAS CONFIGURATION (INSTRUCTIONS [HERE](./filePathAlias.md)).

* _ESBUILD_ (INSTRUCTIONS [HERE](./fileEsbuild.md)).

* _PRISMA_ (INSTRUCTIONS [HERE](./filePrisma.md)).

* GRAPHQL (INSTRUCTIONS [HERE](./fileGraphql.md)).

* GRAPHQL WITH SUBSCRIPTIONS (INSTRUCTIONS [HERE](./fileGraphqlSubscriptions.md)).

* GRAPHQL CODEGENERATOR (INSTRUCTIONS [HERE](./fileGraphqlCodegen.md)).

## PROJECT MAIN CODE

* CREATE [_index.ts_](../../folderSource/index.ts) IN _folderSource_.
* INSTALL CROSSENV PACKAGE (RUN SCRIPTS THAT SET AND USE ENVIRONMENT VARIABLES ACROSS PLATFORMS):

  ```bash
  npm install cross-env
  ```

* CREATE `npm run tsc-dev` COMMAND BY ADDING THE FOLLOWING LINE TO THE _script_ ENTRY IN [_package.json_](../package.json):

  ```json
  "dev": "cross-env dotenvDevelopmentMode=true npm run tsc-nodemon --jsfile=./folderDist/index.js\"",
  ```

* CREATE `npm run esbuild-dev` COMMAND BY ADDING THE FOLLOWING LINE TO THE _script_ ENTRY IN [_package.json_](../package.json):

  ```json
  "esbuild-dev": "cross-env dotenvDevelopmentMode=true npm run esbuild-nodemon --jsfile=./folderDist/index.js\"",
  ```

[BACK](../../README.md)
