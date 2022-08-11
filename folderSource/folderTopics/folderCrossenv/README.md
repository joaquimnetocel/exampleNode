# INDEX

## DESCRIPTION

EXAMPLE OF [_NODE.JS_](https://nodejs.org) USING:

* _CROSSENV_: RUN SCRIPTS THAT SET AND USE ENVIRONMENT VARIABLES ACROSS PLATFORMS.

## REQUIRED PACKAGES

```bash
npm install cross-env # RUN SCRIPTS THAT SET AND USE ENVIRONMENT VARIABLES ACROSS PLATFORMS
```

## CONFIGURATIONS

* CREATE `npm run crossenv-example` COMMAND BY ADDING THE FOLLOWING LINE TO THE _script_ ENTRY IN [_package.json_](/package.json):

  ```json
  "crossenv-example": "cross-env dotenvDevelopmentMode=true node ./folderSource/folderTopics/folderCrossenv/exampleCrossenv.js\"",
  ```
