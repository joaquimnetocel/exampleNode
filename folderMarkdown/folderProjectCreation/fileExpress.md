# _EXPRESS_

## DESCRIPTION

[EXPRESS.JS](https://expressjs.com) IS A WEB APPLICATION FRAMEWORK FOR _NODE_.

## INSTALLATION
  
* INSTALL THE PACKAGE:

  ```bash
  npm install express
  ```

* INSTALL TYPE DEFINITIONS (ONLY IF WORKING WITH TYPESCRIPT):
  
  ```bash
  npm install -D @types/express
  ```

## EXAMPLE (BASIC EXAMPLE)

* CREATE [_exampleExpress.js_](../../folderSource/folderExamples/exampleExpress.js) IN _folderExample_.
* RUN THE EXAMPLE:

  ```bash
  npx nodemon ./folderSource/folderExamples/exampleExpress.js
  ```

  ![REQUEST AND RESPONSE IMAGE](./fileRequestAndResponseImage.png)

## EXAMPLE (URL PARAMETERS)

* CREATE [_exampleUrlParameters.js_](../../folderSource/folderExamples/exampleUrlParameters.js) IN _folderExample_.
* RUN THE EXAMPLE:
  
  ```bash
  npx nodemon ./folderSource/folderExamples/exampleUrlParameters.js
  ```

## EXAMPLE (POST, PUT, DELETE AND JSON BODY PARSER)

* INSTALL THE [_REST CLIENT_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) TO SIMULATE POST, PUT AND DELETE REQUESTS.
* CREATE FOLDER _folderJsonBodyParser_ IN _folderExamples_.
* CREATE ALL FILES IN _folderJsonBodyParser_.
* RUN THE EXAMPLE:
  
  ```bash
  npx nodemon ./folderSource/folderExamples/folderJsonBodyParser/exampleJsonBodyParser.js
  ```

## EXAMPLE (FORM URLENCODED BODY PARSER)

* CREATE FOLDER _folderFormBodyParser_ IN _folderExamples_.
* CREATE ALL FILES IN _folderFormBodyParser_.
* RUN THE EXAMPLE:
  
  ```bash
  npx nodemon ./folderSource/folderExamples/folderFormBodyParser/exampleFormBodyParser.js
  ```

## _EJS_ TEMPLATING LANGUAGE

* PACKAGE INSTALLATION:
  
  ```bash
  npm install ejs
  ```

* EXAMPLE:
  * CREATE FILE [_exampleEjs.js_](../../folderSource/folderExamples/exampleEjs.js) IN _folderExamples_.
  * CREATE FILE [_template.ejs_](../../folderSource/folderViews/template.ejs) IN _folderViews_.
  * RUN THE EXAMPLE:

    ```bash
    npx nodemon ./folderSource/folderExamples/exampleEjs.js
    ```

## EXAMPLE (MIDDLEWARES)

* CREATE [_exampleMiddlewares.js_](../../folderSource/folderExamples/exampleMiddlewares.js) IN _folderExamples_.
* RUN THE EXAMPLE:
  
  ```bash
  npx nodemon ./folderSource/folderExamples/exampleMiddlewares.js
  ```

## EXAMPLE (ROUTERS)

* CREATE FOLDER _folderRouter_ in _folderExamples_.
* CREATE ALL FILES IN _folderRouter_.
* RUN THE EXAMPLE:
  
  ```bash
  npx nodemon ./folderSource/folderExamples/folderRouter/exampleRouter.js
  ```

## _CORS_ CROSS-ORIGIN RESOURCE SHARING

* DESCRIPTION: IS A MECHANISM THAT ALLOWS RESTRICTED RESOURCES ON A WEB PAGE TO BE REQUESTED FROM ANOTHER DOMAIN OUTSIDE THE DOMAIN FROM WHICH THE FIRST RESOURCE WAS SERVED.
* INSTALL THE PACKAGE:
  
  ```bash
  npm install cors
  ```

* INSTALL TYPE DEFINITIONS (ONLY IF WORKING WITH TYPESCRIPT):
  
  ```bash
  npm install -D @types/cors
  ```

* EXAMPLE:
  * CREATE FILE [_exampleCors.js_](../../folderSource/folderExamples/exampleCors.js) IN _folderExamples_.
  * RUN THE EXAMPLE:
  
    ```bash
    npx nodemon ./folderSource/folderExamples/exampleCors.js
    ```

[BACK](./fileProjectCreation.md)
