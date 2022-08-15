# GRAPHQL CODEGEN (GRAPHQL CODE GENERATOR)

## DESCRIPTION

EXAMPLE OF [_NODE.JS_](https://nodejs.org) USING:

* [_GRAPHQL_ CODE GENERATOR (_GRAPHQL CODEGEN_)](https://www.graphql-code-generator.com) IS A TOOL THAT GENERATES CODE OUT OF YOUR GRAPHQL SCHEMA.
* _GRAPHQL PLAYGROUND_: A GRAPHICAL, INTERACTIVE AND IN-BROWSER _GRAPHQL_ IDE.
* [_ALTAIR GRAPHQL CLIENT_](https://altair.sirmuel.design/): A GRAPHICAL, INTERACTIVE AND IN-BROWSER _GRAPHQL_ IDE.

## PREREQUISITES

* **_NODEMON_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderNodemon/README.md).
* **_EXPRESS_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderExpress/README.md).
* **_TYPESCRIPT_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderTypescript/README.md).
* **_GRAPHQL MODULES_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderGraphqlModules/README.md).
* **_GRAPHQL SUBSCRIPTIONS_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderGraphqlSubscriptions/README.md).

## REQUIRED PACKAGES

* FOR CODEGEN:

```bash
npm install -D @graphql-codegen/cli
npm install -D @graphql-codegen/graphql-modules-preset
npm install -D @graphql-codegen/typescript-resolvers
npm install -D @graphql-codegen/typescript
npm install -D @graphql-codegen/add
```

* FOR GRAPHQL PLAYGROUND:

```bash
npm install graphql-playground-html
```

* FOR ALTAIR GRAPHQL CLIENT:

```bash
npm install altair-static
```

## CONFIGURATIONS

* CREATE THE COMAND `npm run codegen` BY INSERTING THE FOLLOWING LINE TO THE _script_ PROPERTY IN _package.json_:

```json
"codegen": "graphql-codegen --watch --config ./folderSource/folderTopics/folderGraphqlCodegen/folderApplication/folderCodegenConfigurations/codegen.yml",
```

## EXAMPLE

* CREATE _codegen.yml_ (IT IS POSSIBLE TO USE `npx graphql-codegen init`, BUT IT WAS CREATED MANUALLY).

* CREATE TYPE DEFINITIONS FROM GRAPHL SCHEMA:

```bash
npm run codegen
```

* RUN THE EXAMPLE:

```bash
npm run tsc-nodemon --jsfile=./folderDist/folderTopics/folderGraphqlCodegen/exampleGraphqlCodegen.js
```
