# CROSS-ORIGIN RESOURCE SHARING (_CORS_)

## DESCRIPTION

EXAMPLE OF [_NODE.JS_](https://nodejs.org) USING:

* [_CORS_](https://www.npmjs.com/package/cors): A MECHANISM THAT ALLOWS RESTRICTED RESOURCES ON A WEB PAGE TO BE REQUESTED FROM ANOTHER DOMAIN OUTSIDE THE DOMAIN FROM WHICH THE FIRST RESOURCE WAS SERVED.

## PREREQUISITES

* **_NODEMON_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderNodemon/README.md).
* **_EXPRESS.JS_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderExpress/README.md).
* **_TSX_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderTsx/README.md).
* **_TYPESCRIPT_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderTypescript/README.md).

## REQUIRED PACKAGES

```bash
npm install @trpc/server
```

## CONFIGURATIONS

* ADD THE FOLLOWING ENTRIES TO `compilerOptions` IN _tsconfig.json_. THEN RUN `npx tsc` TO GENERATE THE TYPE DECLARATION FILES.

```json
// ADDED BY ME: GENERATES TYPE DECLARATION FILES TO USE ON TRPC CLIENT.
"declaration": true,
"declarationDir": "./folderGeneratedDeclarationTypes",
/////
```

## EXAMPLE

```bash
npx tsc
npx tsx watch ./folderSource/folderTopics/folderExpress/folderTrpc/exampleTrpc.ts
```
