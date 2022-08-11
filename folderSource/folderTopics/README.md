# TOPICS

* [_VSCODE_](/folderSource/folderTopics/folderVscode/README.md)

* [_GIT_](/folderSource/folderTopics/folderGit/README.md)

* [_NODE_ AND _NODE PACKAGE MANAGER_ (_NPM_)](/folderSource/folderTopics/folderNodeAndNpm/README.md)

* ["HELLO WORLD"](/folderSource/folderTopics/folderHelloWorld/README.md)

* INITIALIZE THE _NODE PACKAGE MANAGER_ (_NPM_):

  ```bash
  npm init -y # THIS IS GOING TO CREATE THE FILE package.json.
  ```

* [_NODEMON_](/folderSource/folderTopics/folderNodemon/README.md)

* [NPM SCRIPTS](/folderSource/folderTopics/folderNpmScripts/README.md)

* [_PRETTIER_](/folderSource/folderTopics/folderPrettier/README.md)

* CREATE [README.md](/README.md).

* [_ESLINT_](./fileEslint.md)

* [_GIT_](./fileGit.md)

* [TEMPLATE STRINGS](/folderSource/folderTopics/folderTemplateStrings/README.md)

* [ECMAScript MODULES (ESM)](/folderSource/folderTopics/folderEsm/README.md)

* [_DOTENV_](/folderSource/folderTopics/folderDotenv/README.md))

* [_EXPRESS.JS_](/folderSource/folderTopics/folderExpress/README.md)

* [_CORS_](/folderSource/folderTopics/folderCors/README.md)

* [_EJS_](/folderSource/folderTopics/folderEjs/README.md)

* [_TYPESCRIPT_](/folderSource/folderTopics/folderTypescript/README.md)

* [PATH ALIAS](./filePathAlias.md)

* [_ESBUILD_](/folderSource/folderTopics/folderEsbuild/README.md)

* [_PRISMA_](./filePrisma.md)

* [_GRAPHQL_](/folderSource/folderTopics/folderGraphql/README.md)

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
