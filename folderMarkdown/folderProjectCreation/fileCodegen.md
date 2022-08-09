# GRAPHQL CODE GENERATOR:

## DESCRIPTION

[GRAPHQL CODE GENERATOR](https://www.graphql-code-generator.com) IS A TOOL THAT GENERATES CODE OUT OF YOUR GRAPHQL SCHEMA.

## INSTALLATION

* INSTALL PACKAGES:

    ```bash
    npm install -D @graphql-codegen/cli
    npm install -D @graphql-codegen/graphql-modules-preset
    npm install -D @graphql-codegen/typescript-resolvers
    npm install -D @graphql-codegen/typescript
    npm install -D @graphql-codegen/add
    ```

## EXAMPLE / CONFIGURATION

* CREATE FOLDER _folderCodegen_ IN _folderExamples_.
* CREATE ALL FILES IN _folderCodegen_. SPECIFICALLY _codegen.yml_ (IT IS POSSIBLE TO USE `npx graphql-codegen init`, BUT IT WAS CREATED MANUALLY).
* INSERT THE FOLLOWING LINE TO THE _script_ PROPERTY IN _package.json_:

  ```json
  "codegen": "graphql-codegen --config ./folderSource/folderExamples/folderCodegen/folderApplication/folderCodegenConfigurations/codegen.yml",
  ```

* `npm run codegen`
