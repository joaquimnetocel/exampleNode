# PROJECT CREATION

## PREREQUISITES

* CONFIGURE EXECUTION POLICY:
  * OPEN _VSCODE_ AS ADMINISTRATOR AND RUN THE FOLLOWING COMMAND IN TERMINAL:

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
  * CREATE [_exampleHelloWorld.js_](../folderSource/folderExamples/exampleHelloWorld.js) IN _folderExamples_.
  * RUN THE EXAMPLE:

    ```bash
    # RUN THE EXAMPLE:
    node ./folderSource/folderExamples/exampleHelloWorld.js
    ```

* _PRETTIER_ (CODE FORMATTER):
  * INSTALL _PRETTIER_ EXTENSION IN _VSCODE_.
  * CREATE [_.prettierrc_](../.prettierrc) FILE. THIS FILE WILL CONTAIN _PRETTIER_ CONFIGURATIONS.
  * CREATE [_.prettierignore_](../.prettierignore) FILE. THIS FILE WILL CONTAIN A LIST OF FILE TYPES IGNORED BY _PRETTIER_.

* CREATE README.md

* INITIALIZE THE NODE PACKAGE MANAGER (NPM):

  ```bash
  npm init -y # THIS IS GOING TO CREATE THE FILE package.json.
  ```

* ENABLE ES6 IMPORTS/EXPORTS BY ADDING THE FOLLOWING LINE TO [_package.json_](../package.json):

  ```json
  "type": "module",
  ```

* _ESLINT_ PACKAGE (CODE ANALYSIS TOOL):
  * INSTALL _ESLINT_ EXTENSION IN VSCODE.
  * INSTALL THE PACKAGE:

    ```bash
    npm install -D eslint
    ```

  * CONFIGURE ESLINT:

    ```bash
    npm init @eslint/config # THIS IS GOING TO CREATE .eslintrc.json
    #npx eslint --init (alternative)
    ```

    * ANSWER THE FOLLOWING QUESTIONS:
      * How would you like to use ESLint?
            - To check syntax, find problems, and enforce code style
      * What type of modules does your project use?
            - JavaScript modules (import/export)
      * Which framework does your project use?
            - None of these
      * Does your project use TypeScript?
            - Yes
      * Where does your code run?
            - Node
      * How would you like to define a style for your project?
            - Answer questions about your style
      * What format do you want your config file to be in?
            - JSON
      * What style of indentation do you use?
            - Tabs
      * What quotes do you use for strings?
            - Double
      * What line endings do you use?
            - Windows
      * Do you require semicolons?
            - Yes
      * @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest Would you like to install them now with npm?
            - Yes
  * ADD THE FOLLOWING LINE TO THE RULES PROPERTY IN [_.eslintrc.json_](../.eslintrc.json) TO REQUIRE _comma-dangle_:

    ```json
    "comma-dangle": [1, "always-multiline"],
    ```

  * REPLACE THE _quotes_ PROPERTY IN [_.eslintrc.json_](../.eslintrc.json) TO ENABLE TEMPLATE LITERALS:

    ```json
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    ```

* _NODEMON_ PACKAGE (MONITOR THAT WATCHES FOR FILE CHANGES AND AUTOMATICALLY RESTARTS THE NODE APLICATTION):
  * INSTALL THE PACKAGE:

    ```bash
    npm install -D nodemon`
    ```

* EXAMPLE (HELLO WORLD WITH _NODEMON_):
  * RUN THE EXAMPLE:

    ```bash
    npx nodemon ./folderSource/folderExamples/exampleHelloWorld.js
    ```

* _GIT_:
  * INITIALIZE GIT REPOSITORY

    ```bash
    git init
    ```

  * CREATE [_.gitignore_](../.gitignore) FILE. THIS FILE WILL CONTAIN A LIST OF ALL FILES AND FOLDERS IGNORED BY _GIT/GITHUB_.
  * ADD `node_modules` AS A NEW LINE IN [_.gitignore_](../.gitignore).

* EXAMPLE (_TEMPLATE STRINGS_ WITH _NODEMON_):
  * CREATE [_exampleTemplateStrings.js_](../folderSource/folderExamples/exampleTemplateStrings.js) IN _folderExamples_.
  * RUN THE EXAMPLE:

    ```bash
    npx nodemon ./folderSource/folderExamples/exampleTemplateStrings.js
    ```

* _DOTENV_ PACKAGE (ENVIRONMENT VARIABLES):
  * INSTALL _DOTENV_ EXTENSION IN VSCODE.
  * INSTALL THE PACKAGE:

    ```bash
    npm install dotenv
    ```

  * CREATE [_.env_](../.env) FILE. THIS FILE WILL CONTAIN ENVIRONMENTAL VARIABLES AVAILABLE THROUGH `process.env.variablename`.
  * ADD _.env_ AS A NEW LINE IN [_.gitignore_](../.gitignore) (GOOD PRACTICE).

* EXAMPLE (_DOTENV_):
  * CREATE FILE [_exampleDotenv.js_](../folderSource/folderExamples/exampleDotenv.js) IN _folderExamples_.
  * RUN THE EXAMPLE:

    ```bash
    npx nodemon ./folderSource/folderExamples/exampleDotenv.js
    ```

* _EXPRESS_ PACKAGE (WEB APPLICATION FRAMEWORK FOR _NODE_):
  * INSTALL THE PACKAGE:
  
    ```bash
    npm install express
    ```

  * INSTALL TYPE DEFINITIONS:
  
    ```bash
    npm install -D @types/express # ONLY IF WORKING WITH TYPESCRIPT
    ```

* EXAMPLE (_EXPRESS_):
  * CREATE [_exampleExpress.js_](../folderSource/folderExamples/exampleExpress.js) IN _folderExample_.
  * RUN THE EXAMPLE:
  
    ```bash
    npx nodemon ./folderSource/folderExamples/exampleExpress.js
    ```

    ![REQUEST AND RESPONSE IMAGE](./fileRequestAndResponseImage.png)

* EXAMPLE (URL PARAMETERS):
  * CREATE [_exampleUrlParameters.js_](../folderSource/folderExamples/exampleUrlParameters.js) IN _folderExample_.
  * RUN THE EXAMPLE:
  
    ```bash
    npx nodemon ./folderSource/folderExamples/exampleUrlParameters.js
    ```

* EXAMPLE (POST, PUT, DELETE AND JSON BODY PARSER):
  * INSTALL THE VSCODE EXTENSION "REST Client" TO SIMULATE POST, PUT AND DELETE REQUESTS.
  * CREATE FOLDER _folderJsonBodyParser_ IN _folderExamples_.
  * CREATE ALL FILES IN [_folderJsonBodyParser_](../folderSource/folderExamples/folderJsonBodyParser/).
  * RUN THE EXAMPLE:
  
    ```bash
    npx nodemon ./folderSource/folderExamples/folderJsonBodyParser/exampleJsonBodyParser.js
    ```

* _EJS_ PACKAGE (TEMPLATING LANGUAGE):
  * INSTALL PACKAGE: `npm install ejs`

* EXAMPLE (_EJS_):
  * CREATE FILE _exampleEjs.js_ IN _folderExamples_.
  * CREATE FILE _template.ejs_ IN _folderViews_.
  * `npx nodemon ./folderSource/folderExamples/exampleEjs.js`

* EXAMPLE (MIDDLEWARES):
  * CREATE _exampleMiddlewares.js_ IN _folderExamples_.
  * `npx nodemon ./folderSource/folderExamples/exampleMiddlewares.js`

* _CORS_ PACKAGE (Cross-origin Resource Sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.):
  * INSTALL PACKAGE: `npm install cors`
  * INSTALL TYPE DEFINITIONS: `npm install -D @types/cors` (ONLY IF WORKING WITH _TYPESCRIPT_)

* EXAMPLE (_CORS_ MIDDLEWARE):
  * CREATE FILE _exampleCors.js_ IN _folderExamples_.
  * `npx nodemon ./folderSource/folderExamples/exampleCors.js`

* _TYPESCRIPT_:
  * INSTALL PACKAGE: `npm install -D typescript`
  * INSTALL TYPE DEFINITIONS: `npm install -D @types/node`
  * CREATE tsconfig.json:
    * `npx tsc --init --allowSyntheticDefaultImports true --lib ES2021 --module ES2020 --moduleResolution node --target ES2021 --rootDir ./folderSource --outDir ./folderDist --removeComments true --resolveJsonModule true --types node`
  * RESTART VSCODE.
  * ADD `folderDist` AS A NEW LINE IN `.gitignore`.

* EXAMPLE (HELLO WORLD WITH _TYPESCRIPT_ AND _NODE_):
  * CREATE _exampleHelloWorld.ts_ IN _folderExamples_.
  * `npx tsc` (TRANSPILE ALL _.ts_ FILES IN _folderSource_ TO _.js_ FILES IN _folderDist_)
  * `node ./folderDist/folderExamples/exampleHelloWorld.js`

* CREATE A COMMAND TO RUN _TYPESCRIPT_ WITH _NODEMON_:
  * CREATE COMMAND `npm run tsc-nodemon` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN _package.json_:
    * `"tsc-nodemon": "nodemon --ext ts --exec \"npx tsc --skipLibCheck && node %npm_config_jsfile%\"",`

* EXAMPLE (HELLO WORLD WITH _TYPESCRIPT_ AND _NODEMON_):
  * `npm run tsc-nodemon --jsfile=./folderDist/folderExamples/exampleHelloWorld.js`

* PATH ALIAS CONFIGURATION:
  * ADD THE FOLLOWING PROPERTY TO package.json AND tsconfig.json (ONLY IF WORKING WITH TYPESCRIPT):

// IN package.json:

```json
"imports":{
  "#pathJavascriptExamples/*": "./folderSource/folderExamples/*",
  "#pathTypescriptExamples/*": "./folderDist/folderExamples/*",
  "#pathModules/*": "./folderDist/folderModules/*"
},
```

// IN compilerOptions OF _tsconfig.json_:

```json
"paths": {
  "#pathJavascriptExamples/*": ["./folderSource/folderExamples/*"],
  "#pathTypescriptExamples/*": ["./folderDist/folderExamples/*", "./folderSource/folderExamples/*"],
  "#pathModules/*": ["./folderDist/folderModules/*", "./folderSource/folderModules/*"]
},
```

* EXAMPLE (PATH ALIAS WITH _JAVASCRIPT_):
  * CREATE _functionSum.js_ IN _folderExamples_.
  * CREATE _examplePathAlias.js_ IN _folderExamples_.
  * `npx nodemon ./folderSource/folderExamples/examplePathAlias.js`

* PATH ALIAS EXAMPLE WITH _TYPESCRIPT_:
  * CREATE _functionSubtraction.ts_ IN _folderExamples_.
  * CREATE _examplePathAlias.ts_ IN _folderExamples_.
  * `npm run tsc-nodemon --jsfile=./folderDist/folderExamples/examplePathAlias.js`

* _PRISMA_ (ORM):
  * INSTALL _PRISMA_ EXTENSION IN VSCODE.
  * INSTALL PACKAGE: `npm install -D prisma`
  * INSTALL _PRISMA_ CLIENT_: `npm install @prisma/client`
  * INITIALIZE _PRISMA_:
    * `npx prisma init --url mysql://root:@localhost:3306/databaseProject` (IF YOUR MYSQL PASSWORD IS EMPTY)
    * `npx prisma init --url mysql://root:password@localhost:3306/databaseProject` (IF YOUR MYSQL PASSWORD IS "password")
  * THE PREVIOUS STEP CREATES THE FILE _schema.prisma_ IN _prisma_ FOLDER AND MODIFY THE _.env_ FILE.
  * FILL THE DATABASE SCHEMA FILE `schema.prisma` IN _prisma_ FOLDER. YOU CAN DO IT MANUALLY OR WITH THE COMMAND:
    * `npx prisma db pull --schema=./prisma/schema.prisma`
  * CREATE THE COMMAND `npm run prepare` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN _package.json_:
    * `"prepare": "prisma db push --schema=./prisma/schema.prisma && prisma generate --schema=./prisma/schema.prisma",` (THIS COMMAND WILL ALSO RUN EVERY TIME YOU RUN `npm install`)
  * CREATE COMMAND `npm run studio` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN _package.json_:
    * `"studio": "prisma studio --schema=./prisma/schema.prisma",`
  * PREPARE THE DATABASE: `npm run prepare`
  * RUN PRISMA STUDIO: `npm run studio`
  * CREATE FILE _modulePrisma.ts_ IN FOLDER _folderModules_.

* EXAMPLE (_PRISMA_):
  * INSTALL THE VSCODE EXTENSION "REST Client" TO SIMULATE POST, PUT AND DELETE REQUESTS.
  * CREATE FOLDER _folderPrisma_ IN FOLDER _folderExamples_.
  * CREATE ALL FILES IN _folderPrisma_.
  * `npm run tsc-nodemon --jsfile=./folderDist/folderExamples/folderPrisma/examplePrisma.js`

* _GRAPHQL_ (QUERY LANGUAGE AND RUNTIME FOR APIs):
  * INSTALL PACKAGES:
    * `npm install express-graphql`
    * `npm install graphql-modules`

* _GRAPHQL PLAYGROUND_ (GRAPHICAL, INTERACTIVE, IN-BROWSER _GRAPHQL_ IDE):
  * INSTALL PACKAGE: `npm install graphql-playground-html`

* EXAMPLE (_GRAPHQL_ WITH _GRAPHQL PLAYGROUND_):
  * CREATE FOLDER _folderGraphql_ IN _folderExamples_.
  * CREATE ALL FILES IN _folderGraphql_.
  * `npm run tsc-nodemon --jsfile=./folderDist/folderExamples/folderGraphql/exampleGraphql.js`

## PROJECT MAIN CODE

* CREATE _index.ts_ IN _folderSource_.
* `npm install cross-env`
* CREATE `npm run dev` COMMAND BY ADDING THE FOLLOWING LINE TO THE _script_ ENTRY IN _package.json_:
  * `"dev": "cross-env dotenvDevelopmentMode=true npm run tsc-nodemon --jsfile=./folderDist/index.js\"",`

[BACK](../README.md)
