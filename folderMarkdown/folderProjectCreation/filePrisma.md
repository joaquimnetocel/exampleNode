# _PRISMA_

## DESCRIPTION

[PRISMA](https://www.prisma.io) IS AN OBJECT RELATIONAL MAPPING (ORM).

## INSTALLATION

* INSTALL [_PRISMA_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma).
* INSTALL THE PACKAGE:
  
  ```bash
  npm install -D prisma
  ```
  
* INSTALL _PRISMA_ CLIENT_:
  
  ```bash
  npm install @prisma/client
  ```

## INITIALIZATION

  ```bash
  # IF YOUR MYSQL PASSWORD IS EMPTY:
  npx prisma init --url mysql://root:@localhost:3306/databaseProject

  # IF YOUR MYSQL PASSWORD IS "password":
  #npx prisma init --url mysql://root:password@localhost:3306/databaseProject
  ```

## CONFIGURATION

* THE PREVIOUS STEP CREATES THE FILE [_schema.prisma_](../../../prisma/schema.prisma) IN _prisma_ FOLDER AND MODIFY THE [_.env_](../.env) FILE.
* FILL THE DATABASE SCHEMA FILE [_schema.prisma_](../../../prisma/schema.prisma) IN _prisma_ FOLDER. YOU CAN DO IT MANUALLY OR IMPORT THE DATABASE STRUCTURE WITH THE COMMAND:

  ```bash
  npx prisma db pull --schema=./prisma/schema.prisma
  ```

* CREATE THE COMMAND `npm run database` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN [_package.json_](../package.json):

  ```json
  "database": "prisma db push --schema=./prisma/schema.prisma && prisma generate --schema=./prisma/schema.prisma",
  ```

* CREATE COMMAND `npm run studio` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN _package.json_:

  ```json
  "studio": "prisma studio --schema=./prisma/schema.prisma",
  ```

* PREPARE THE DATABASE: `npm run database`
* RUN PRISMA STUDIO:

  ```bash
  npm run studio
  ```

* CREATE FILE [_modulePrisma.ts_](../../folderSource/folderModules/modulePrisma.ts) IN FOLDER _folderModules_.

## EXAMPLE

* INSTALL THE [_REST Client_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) TO SIMULATE POST, PUT AND DELETE REQUESTS.
* CREATE FOLDER _folderPrisma_ IN FOLDER _folderExamples_.
* CREATE ALL FILES IN _folderPrisma_.
* RUN THE EXAMPLE:

  ```bash
  npm run tsc-nodemon --jsfile=./folderDist/folderExamples/folderPrisma/examplePrisma.js
  ```

[BACK](./fileProjectCreation.md)
