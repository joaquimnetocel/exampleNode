# _ESBUILD_

## DESCRIPTION

INSTRUCTIONS TO CONFIGURE:

* [ESBUILD](https://esbuild.github.io/): A FAST TYPESCRIPT TO JAVASCRIPT TRANSPILER AND BUNDLER.

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

## RUNNING AN EXAMPLE WITH ESBUILD

```bash
npm run esbuild-nodemon --jsfile=./folderDist/folderExamples/folderHelloWorld/exampleHelloWorld.js
```
