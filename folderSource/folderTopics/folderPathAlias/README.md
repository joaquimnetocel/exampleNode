# PATH ALIAS

## THE PROBLEM

UNDER CONSTRUCTION

## PREREQUISITES

* **_NODEMON_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderNodemon/README.md).
* **_TYPESCRIPT_**: FOLLOW THE INSTRUCTIONS [HERE](/folderSource/folderTopics/folderTypescript/README.md).

## CONFIGURATIONS

* ADD THE FOLLOWING PROPERTY TO [_package.json_](/package.json):

  ```json
  "imports":{
      "#pathJavascriptExamples/*": "./folderSource/folderTopics/*",
      "#pathTypescriptExamples/*": "./folderDist/folderTopics/*"
  },
  ```

* ADD THE FOLLOWING PROPERTY IN _compilerOptions_ OF [_tsconfig.json_](../tsconfig.json) (ONLY IF WORKING WITH TYPESCRIPT):

  ```json
  "paths": {
      "#pathJavascriptExamples/*": ["./folderSource/folderTopics/*"],
      "#pathTypescriptExamples/*": ["./folderDist/folderTopics/*", "./folderSource/folderTopics/*"]
  },
  ```

## EXAMPLE WITH _JAVASCRIPT_

```bash
npx nodemon ./folderSource/folderTopics/folderPathAlias/examplePathAlias.js
```

## EXAMPLE WITH _TYPESCRIPT_

```bash
npm run tsc-nodemon --jsfile=./folderDist/folderTopics/folderPathAlias/examplePathAlias.js
```
