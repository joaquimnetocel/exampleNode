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
* **[PRISMA](https://www.prisma.io)**: OBJECT RELATIONAL MAPPING (ORM).
* **[GRAPHQL](https://graphql.org)**: A QUERY LANGUAGE FOR APIs AND A RUNTIME FOR FULFILLING THOSE QUERIES WITH YOUR EXISTING DATA.
* **GRAPHQL PLAYGROUND**: GRAPHICAL, INTERACTIVE, IN-BROWSER _GRAPHQL_ IDE.

## PREREQUISITES

* [INSTALL _VSCODE_](./folderMarkdown/folderVscodeInstallation/fileVscodeInstallation.md) (OPTIONAL).

* [INSTALL AND CONFIGURE _GIT_](./folderMarkdown/fileInstallAndConfigureGit.md) (OPTIONAL).

* [SYNCHRONIZE _VSCODE_ WITH _GITHUB_](./folderMarkdown/fileSynchronizeVscodeWithGithub.md) (OPTIONAL).

* [INSTALL _NODE_ AND _NODE PACKAGE MANAGER_ (_NPM_)](./folderMarkdown/fileInstallNodeAndNpm.md) (REQUIRED).

## DOWNLOAD

* YOU CAN CLONE THIS REPOSITORY USING _GIT_:

```bash
git clone https://github.com/joaquimnetocel/exampleNode.git
```

* OR YOU CAN DOWNLOAD THE REPOSITORY [HERE](https://github.com/joaquimnetocel/exampleNode/archive/refs/heads/master.zip).

* OR YOU CAN BUILD THIS PROJECT FROM ZERO [HERE](./folderMarkdown/fileProjectCreation.md).

## DATABASE CONFIGURATIONS

* EDIT THE _DATABASE_URL_ VARIABLE IN _.env_ FILE TO FIT YOUR DATABASE.
* IF YOU ARE NOT USING MYSQL, CHANGE THE PROVIDER IN _prisma/schema.prisma_ FILE .

## QUICK START

```bash
# INSTALL ALL THE DEPENDENCIES AND CREATE THE DATABASE:
npm install
```

```bash
# RUN ON DEVELOPMENT MODE:
npm run dev
```

```bash
# RUN ON PRODUCTION MODE
npx tsc
node ./folderDist/index.js
```

## CONTRIBUTING

* :twisted_rightwards_arrows: PULL REQUESTS AND
* :star: GITHUB STARS

ARE WELCOME! :smiley:
