# NODE.JS EXAMPLES 📦

## DESCRIPTION

THIS PROJECT CONTAINS EXAMPLES AND CONFIGURATIONS FOR **[NODE](https://nodejs.org)**.

![NODE IMAGE](./folderMarkdown/node.jpg)

<!-- ## BUILT USING

* **[ESBUILD](https://esbuild.github.io/)**: FAST TYPESCRIPT TO JAVASCRIPT TRANSPILER AND BUNDLER.
* **[PRISMA](https://www.prisma.io)**: OBJECT RELATIONAL MAPPING (ORM).
* **[GRAPHQL](https://graphql.org)**: A QUERY LANGUAGE FOR APIs AND A RUNTIME FOR FULFILLING THOSE QUERIES WITH YOUR EXISTING DATA.
* **GRAPHQL PLAYGROUND**: GRAPHICAL, INTERACTIVE AND IN-BROWSER _GRAPHQL_ IDE.
* **[CROSSENV](https://www.npmjs.com/package/cross-env)**: RUN SCRIPTS THAT SET AND USE ENVIRONMENT VARIABLES ACROSS PLATFORMS.
* **[GRAPHQL CODE GENERATOR (CODEGEN)](https://www.graphql-code-generator.com)**: TOOL THAT GENERATES CODE OUT OF YOUR GRAPHQL SCHEMA. -->

## REQUIRED AND RECOMMENDED TOOLS

* [INSTALL _VSCODE_](/folderMarkdown/folderVscodeInstallation/fileVscodeInstallation.md) (RECOMMENDED).

* [INSTALL AND CONFIGURE _GIT_](/folderMarkdown/fileInstallAndConfigureGit.md) (RECOMMENDED).

* [SYNCHRONIZE _VSCODE_ WITH _GITHUB_](/folderMarkdown/fileSynchronizeVscodeWithGithub.md) (RECOMMENDED).

* [INSTALL _NODE_ AND _NODE PACKAGE MANAGER_ (_NPM_)](/folderMarkdown/fileInstallNodeAndNpm.md) (REQUIRED).

## DOWNLOAD

YOU CAN GET THIS PROJECT IN THE FOLLOWING WAYS:

* CLONNING THIS REPOSITORY USING _GIT_:

  ```bash
  git clone https://github.com/joaquimnetocel/exampleNode.git
  ```

* DOWNLOADING THE REPOSITORY [HERE](https://github.com/joaquimnetocel/exampleNode/archive/refs/heads/master.zip).

* BUILDING THIS PROJECT FROM ZERO (FOLLOW THE INSTRUCTIONS [HERE](/folderMarkdown/folderProjectCreation/fileProjectCreation.md)).

## QUICK START

<!-- * CONFIGURING THE DATABASE CONNECTION
  * IF YOU ARE NOT USING MYSQL, CHANGE THE PROVIDER IN _prisma/schema.prisma_ FILE .
  * EDIT THE _DATABASE_URL_ VARIABLE IN _.env_ FILE TO FIT YOUR DATABASE.

    ![PRISMA DATA SOURCE](/folderMarkdown/folderProjectCreation/filePrismaDatasource.png)

* CREATING THE DATABASE AND PREPARING PRISMA:

  ```bash
  npm run database
  ``` -->

* INSTALLING THE DEPENDENCIES:

  ```bash
  npm install
  ```

* RUNNING THE PROJECT

  ```bash
  # RUN ON DEVELOPMENT MODE WITH TYPESCRIPT:
  npm run tsc-dev
  ```

  ```bash
  # RUN ON DEVELOPMENT MODE WITH ESBUILD:
  npm run esbuild-dev
  ```

  ```bash
  # RUN ON PRODUCTION MODE
  npx tsc
  node ./folderDist/index.js
  ```

  ```bash
  # BUNDLE WITH ESBUILD AND RUN ON PRODUCTION MODE 
  node esbuild.production.config.js # THIS IS GOING TO CREATE/BUNDLE ./folderBundle/index.js
  node ./folderBundle/index.js
  ```

## CONTRIBUTING

YOU ARE WELCOME TO CONTRIBUTE WITH:

* :twisted_rightwards_arrows: PULL REQUESTS AND
* :star: GITHUB STARS

:smiley:
