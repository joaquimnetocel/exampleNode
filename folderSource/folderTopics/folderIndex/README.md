# INDEX

## DESCRIPTION

INSTRUCTIONS TO CONFIGURE THE MAIN FUNCTIONALITIES OF THE PROJECT.

## PREREQUISITES

* **_NODEMON_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderNodemon/README.md).
* **_EXPRESS.JS_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderExpress/README.md).
* **_TYPESCRIPT_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderTypescript/README.md).
* **_ESBUILD_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderEsbuild/README.md).
* **_CROSSENV_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderCrossenv/README.md).

## CONFIGURATIONS

* CREATE `npm run tsc-dev` COMMAND BY ADDING THE FOLLOWING LINE TO THE _script_ ENTRY IN [_package.json_](/package.json):

  ```json
  "tsc-dev": "cross-env dotenvDevelopmentMode=true npm run tsc-nodemon --jsfile=./folderDist/index.js\"",
  ```

* CREATE `npm run esbuild-dev` COMMAND BY ADDING THE FOLLOWING LINE TO THE _script_ ENTRY IN [_package.json_](/package.json):

  ```json
  "esbuild-dev": "cross-env dotenvDevelopmentMode=true npm run esbuild-nodemon --jsfile=./folderDist/index.js\"",
  ```

## RUNNING THE PROJECT

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
