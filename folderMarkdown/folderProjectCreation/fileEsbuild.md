# _ESBUILD_

## DESCRIPTION

[ESBUILD](https://esbuild.github.io/) IS A FAST TYPESCRIPT TO JAVASCRIPT TRANSPILER AND BUNDLER.

## INSTALLATION

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

## EXAMPLE (HELLO WORLD WITH _ESBUILD_ AND _NODEMON_)

* RUN THE EXAMPLE:

  ```bash
  npm run esbuild-nodemon --jsfile=./folderDist/folderExamples/exampleHelloWorld.js
  ```

[BACK](./fileProjectCreation.md)
