# _PRISMA_

## DESCRIPTION

EXAMPLES OF [_NODE.JS_](https://nodejs.org) USING:

* [_PRISMA_](https://www.prisma.io): AN OBJECT RELATIONAL MAPPING (ORM).

## PREREQUISITES

* **_NODEMON_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderExamples/folderNodemon/README.md).
* **_EXPRESS.JS_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderExamples/folderExpress/README.md).
* **_TYPESCRIPT_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderExamples/folderTypescript/README.md).

## RECOMMENDED VSCODE EXTENSIONS

INSTALL [_PRISMA_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma).

## REQUIRED PACKAGES

```bash
npm install -D prisma
npm install @prisma/client
```

## INITIALIZATION

THE FOLLOWING COMMAND WILL INITIALIZE PRISMA. IT WILL CREATE THE FILE [_schema.prisma_](/prisma/schema.prisma) IN _prisma_ FOLDER AND MODIFY THE [_.env_](/.env) FILE.

```bash
# IF YOUR MYSQL PASSWORD IS EMPTY:
npx prisma init --url mysql://root:@localhost:3306/databaseProject

# IF YOUR MYSQL PASSWORD IS "password":
#npx prisma init --url mysql://root:password@localhost:3306/databaseProject
```

![PRISMA DATA SOURCE](./filePrismaDatasource.png)

## CONFIGURATIONS

* FILL THE DATABASE SCHEMA FILE [_schema.prisma_](/prisma/schema.prisma) IN _prisma_ FOLDER. YOU CAN DO IT MANUALLY OR IMPORT THE DATABASE STRUCTURE WITH THE COMMAND:

  ```bash
  npx prisma db pull --schema=./prisma/schema.prisma
  ```

* WINDOWS BUG FIX: IF WORKING WITH WINDOWS, OPEN THE MYSQL FILE _my.ini_ AND ADD `lower_case_table_names=2` RIGHT AFTER THE LINE `[mysqld]`. RESTART THE MYSQL SERVER. THIS IS GOING TO ENABLE UPPERCASE IN MYSQL TABLE NAMES.

* CREATE THE COMMAND `npm run database` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN [_package.json_](/package.json):

  ```json
  "database": "prisma db push --schema=./prisma/schema.prisma && prisma generate --schema=./prisma/schema.prisma",
  ```

* CREATE COMMAND `npm run studio` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN _package.json_:

  ```json
  "studio": "prisma studio --schema=./prisma/schema.prisma",
  ```

## USING PRISMA

* CREATE THE DATABASE AND PREPARE PRISMA:

```bash
npm run database
```

* RUN PRISMA STUDIO:

  ```bash
  npm run studio
  ```

## EXAMPLE

* INSTALL THE [_REST Client_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) TO SIMULATE POST, PUT AND DELETE REQUESTS.

* RUN THE EXAMPLE:

  ```bash
  npm run tsc-nodemon --jsfile=./folderDist/folderExamples/folderPrisma/examplePrisma.js
  ```
