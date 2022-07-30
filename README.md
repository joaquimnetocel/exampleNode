# NODE EXAMPLE 📦

## DESCRIPTION

THIS PROJECT IS AN EXAMPLE OF **[NODE](https://nodejs.org)**.

## BUILT USING

* **[NODE](https://nodejs.org)**: JAVASCRIPT RUNTIME BUILT ON [_CHROME'S V8 JAVASCRIPT ENGINE_](https://v8.dev).
* **[PRETTIER](https://prettier.io)**: CODE FORMATTER TOOL.
* **[ESLINT](https://eslint.org)**: CODE ANALYSIS TOOL.
* **[NODEMON](https://nodemon.io/)**: MONITOR THAT WATCHES FOR FILE CHANGES AND AUTOMATICALLY RESTARTS THE NODE APLICATTION.
* **[EXPRESS](https://expressjs.com)**: WEB APPLICATION FRAMEWORK FOR _NODE_.
* **[DOTENV](https://www.npmjs.com/package/dotenv)**: ENVIRONMENT VARIABLES.
* **[EJS](https://ejs.co)**: TEMPLATING LANGUAGE.
* **[CORS](https://www.npmjs.com/package/cors)**: CROSS-ORIGIN RESOURCE SHARING IS A MECHANISMI THAT ALLOWS RESTRICTED RESOURCES ON A WEB PAGE TO BE REQUESTED FROM ANOTHER DOMAIN OUTSIDE THE DOMAIN FROM WHICH THE FIRST RESOURCE WAS SERVED.
* **[TYPESCRIPT](https://www.typescriptlang.org)**: SYNTACTIC SUPERSET OF JAVASCRIPT WHICH ADDS OPTIONAL STATIC TYPING TO THE LANGUAGE.
* **[ESBUILD](https://esbuild.github.io/)**: FAST TYPESCRIPT TO JAVASCRIPT TRANSPILER AND BUNDLER.
* **[PRISMA](https://www.prisma.io)**: OBJECT RELATIONAL MAPPING (ORM).
* **[GRAPHQL](https://graphql.org)**: A QUERY LANGUAGE FOR APIs AND A RUNTIME FOR FULFILLING THOSE QUERIES WITH YOUR EXISTING DATA.
* **GRAPHQL PLAYGROUND**: GRAPHICAL, INTERACTIVE AND IN-BROWSER _GRAPHQL_ IDE.
* **[CROSSENV](https://www.npmjs.com/package/cross-env)**: RUN SCRIPTS THAT SET AND USE ENVIRONMENT VARIABLES ACROSS PLATFORMS.

## REQUIRED AND RECOMMENDED TOOLS

* [INSTALL _VSCODE_](./folderMarkdown/folderVscodeInstallation/fileVscodeInstallation.md) (RECOMMENDED).

* [INSTALL AND CONFIGURE _GIT_](./folderMarkdown/fileInstallAndConfigureGit.md) (RECOMMENDED).

* [SYNCHRONIZE _VSCODE_ WITH _GITHUB_](./folderMarkdown/fileSynchronizeVscodeWithGithub.md) (RECOMMENDED).

* [INSTALL _NODE_ AND _NODE PACKAGE MANAGER_ (_NPM_)](./folderMarkdown/fileInstallNodeAndNpm.md) (REQUIRED).

## DOWNLOAD

* YOU CAN CLONE THIS REPOSITORY USING _GIT_:

```bash
git clone https://github.com/joaquimnetocel/exampleNode.git
```

* OR YOU CAN DOWNLOAD THE REPOSITORY [HERE](https://github.com/joaquimnetocel/exampleNode/archive/refs/heads/master.zip).

* OR YOU CAN BUILD THIS PROJECT FROM ZERO (FOLLOW THE INSTRUCTIONS [HERE](./folderMarkdown/folderProjectCreation/fileProjectCreation.md)).

## CREATE DATABASE AND CONFIGURE DATABASE CONNECTION

* IF YOU ARE NOT USING MYSQL, CHANGE THE PROVIDER IN _prisma/schema.prisma_ FILE .
* EDIT THE _DATABASE_URL_ VARIABLE IN _.env_ FILE TO FIT YOUR DATABASE.

![PRISMA DATA SOURCE](./folderMarkdown/folderProjectCreation/filePrismaDatasource.png)

```bash
npm run database
```

## QUICK START

```bash
# INSTALL ALL THE DEPENDENCIES:
npm install
```

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
