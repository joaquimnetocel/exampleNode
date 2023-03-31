# COOKIES

## DESCRIPTION

EXAMPLE OF [_NODE.JS_](https://nodejs.org) USING:

* [_COOKIES_](http://expressjs.com/en/resources/middleware/cookie-parser.html): AN HTTP COOKIE (WEB COOKIE, BROWSER COOKIE) IS A SMALL PIECE OF DATA THAT A SERVER SENDS TO A USER'S WEB BROWSER. THE BROWSER MAY STORE THE COOKIE AND SEND IT BACK TO THE SAME SERVER WITH LATER REQUESTS.
* [_CORS_](https://www.npmjs.com/package/cors): A MECHANISM THAT ALLOWS RESTRICTED RESOURCES ON A WEB PAGE TO BE REQUESTED FROM ANOTHER DOMAIN OUTSIDE THE DOMAIN FROM WHICH THE FIRST RESOURCE WAS SERVED.

## PREREQUISITES

* **_NODEMON_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderNodemon/README.md).
* **_EXPRESS.JS_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderExpress/README.md).

## REQUIRED PACKAGES

```bash
npm install cookie-parser
npm i -D @types/cookie-parser # ONLY IF WORKING WITH TYPESCRIPT
npm install cors
npm install -D @types/cors # ONLY IF WORKING WITH TYPESCRIPT
```

## EXAMPLE

```bash
npx nodemon ./folderSource/folderTopics/folderExpress/folderCookies/exampleCookies.js
npx nodemon ./folderSource/folderTopics/folderExpress/folderCookies/exampleCrossDomainCookies.js
```
