# PROJECT CREATION

## PREREQUISITE

* TO CREATE THIS PROJECT FROM ZERO, WE HAVE TO CONFIGURE THE EXECUTION POLICY... OPEN _VSCODE_ AS ADMINISTRATOR AND RUN THE FOLLOWING COMMAND IN TERMINAL:

  ```bash
  Set-ExecutionPolicy RemoteSigned
  ```  

## GUIDELINES

* ["HELLO WORLD"](/folderSource/folderExamples/folderHelloWorld/README.md)

* INITIALIZE THE _NODE PACKAGE MANAGER_ (_NPM_):

  ```bash
  npm init -y # THIS IS GOING TO CREATE THE FILE package.json.
  ```

* [_NODEMON_](/folderSource/folderExamples/folderNodemon/README.md)

* [NPM SCRIPTS](/folderSource/folderExamples/folderNpmScripts/README.md)

* [_PRETTIER_](/folderMarkdown/folderProjectCreation/filePrettier.md))

* CREATE [README.md](/README.md).

* [_ESLINT_](./fileEslint.md)

* [_GIT_](./fileGit.md)

* [TEMPLATE STRINGS](/folderSource/folderExamples/folderTemplateStrings/README.md)

* [ECMAScript MODULES (ESM)](/folderSource/folderExamples/folderEsm/README.md)

* [_DOTENV_](/folderSource/folderExamples/folderDotenv/README.md))

* [_EXPRESS.JS_](/folderSource/folderExamples/folderExpress/README.md)

* [_CORS_](/folderSource/folderExamples/folderCors/README.md)

* [_EJS_](/folderSource/folderExamples/folderEjs/README.md)

* [_TYPESCRIPT_](/folderSource/folderExamples/folderTypescript/README.md)

* [PATH ALIAS](./filePathAlias.md)

* [_ESBUILD_](./fileEsbuild.md)

* [_PRISMA_](./filePrisma.md)

* [_GRAPHQL_](/folderSource/folderExamples/folderGraphql/README.md)

* [GRAPHQL MODULES](./fileGraphqlModules.md)

* [GRAPHQL WITH SUBSCRIPTIONS](./fileGraphqlSubscriptions.md)

* [GRAPHQL CODEGEN](./fileGraphqlCodegen.md)

## PROJECT MAIN CODE

* CREATE [_index.ts_](/folderSource/index.ts) IN _folderSource_.
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
