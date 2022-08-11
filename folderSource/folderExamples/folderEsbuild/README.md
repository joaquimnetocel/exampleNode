# _ESBUILD_

## DESCRIPTION

EXAMPLES AND INSTRUCTIONS TO CONFIGURE:

* [_ESBUILD_](https://esbuild.github.io/): A FAST TYPESCRIPT TO JAVASCRIPT TRANSPILER AND BUNDLER.

## PREREQUISITES

* **_NODEMON_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderExamples/folderNodemon/README.md).

## REQUIRED PACKAGES

```bash
npm install -D esbuild
npm install -D esbuild-node-tsc
```

## CONFIGURATION

* ADD _folderBundle_ to _.gitignore_.
* CREATE FILE _esbuild.development.config.cjs_.
* CREATE FILE _esbuild.production.config.js_.
* CREATE COMMAND `npm run esbuild-nodemon` BY ADDING THE FOLLOWING LINES TO THE _script_ ENTRY IN _package.json_:

  ```json
  "esbuild-nodemon": "nodemon --exec \"etsc --config=esbuild.development.config.cjs && node %npm_config_jsfile%\"",
  ```

## EXAMPLE WITH ESBUILD AND NODEMON ON DEVELOPMENT MODE

```bash
npm run esbuild-nodemon --jsfile=./folderDist/folderExamples/folderEsbuild/exampleEsbuild.js
```

## EXAMPLE WITH ESBUILD ON PRODUCTION MODE

```bash
# BUNDLE WITH ESBUILD AND RUN ON PRODUCTION MODE 
node ./folderSource/folderExamples/folderEsbuild/esbuild.production.config.js # THIS IS GOING TO CREATE/BUNDLE ./folderBundle/exampleEsbuild.js
node ./folderBundle/exampleEsbuild.js
```
