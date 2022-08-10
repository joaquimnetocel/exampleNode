# _EXPRESS.JS_

## DESCRIPTION

EXAMPLES OF [_NODE.JS_](https://nodejs.org) USING:

* [NODEMON](https://nodemon.io): A MONITOR THAT WATCHES FOR FILE CHANGES AND AUTOMATICALLY RESTARTS THE _NODE.JS_ APLICATTION.
* [EXPRESS.JS](https://expressjs.com): A WEB APPLICATION FRAMEWORK FOR _NODE.JS_.

## REQUIRED PACKAGES
  
* FOR NODEMON:

```bash
npm install -D nodemon
```

* FOR EXPRESS:

```bash
npm install express
npm install -D @types/express # ONLY IF WORKING WITH TYPESCRIPT
```

## EXAMPLE (BASIC EXAMPLE)

```bash
npx nodemon ./folderSource/folderExamples/folderExpress/exampleExpress.js
```

![REQUEST AND RESPONSE IMAGE](./fileRequestAndResponseImage.png)

## EXAMPLE (URL PARAMETERS)

```bash
node ./folderSource/folderExamples/folderExpress/exampleUrlParameters.js
```

## EXAMPLE (POST, PUT, DELETE AND JSON BODY PARSER)

* INSTALL THE [_REST CLIENT_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) TO SIMULATE POST, PUT AND DELETE REQUESTS.
* RUNNING THE EXAMPLE:
  
```bash
npx nodemon ./folderSource/folderExamples/folderExpress/folderJsonBodyParser/exampleJsonBodyParser.js
```

## EXAMPLE (FORM URLENCODED BODY PARSER)

```bash
npx nodemon ./folderSource/folderExamples/folderExpress/exampleFormBodyParser.js
```

## EXAMPLE (MIDDLEWARES)

```bash
npx nodemon ./folderSource/folderExamples/folderExpress/exampleMiddlewares.js
```

## EXAMPLE (ROUTERS)

```bash
npx nodemon ./folderSource/folderExamples/folderExpress/folderRouter/exampleRouter.js
```
