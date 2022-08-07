# _GRAPHQL_ SUBSCRIPTION

## DESCRIPTION

LIKE QUERIES, _SUBSCRIPTIONS_ ENABLE YOU TO FETCH DATA. UNLIKE QUERIES, _SUBSCRIPTIONS_ ARE LONG-LASTING OPERATIONS THAT CAN CHANGE THEIR RESULT OVER TIME. THEY CAN MAINTAIN AN ACIVE CONNECTION TO YOUR _GRAPHQL_ SERVER (MOST COMMONLY VIA WEBSOCKET), ENABLING THE SERVER TO PUSH UPDATES TO THE SUBSCRIPTION'S RESULT.

_SUBSCRIPTIONS_ ARE USEFUL FOR NOTIFYING YOUR CLIENT IN REAL TIMA ABOUT CHANGES TO BACK-END DATA, SUCH AS CREATION OF NEW OBJECT OR UPDATES TO AN IMPORTANT FIELD.

## INSTALLATION

* INSTALL PACKAGES:

```bash
npm install ws
npm install -D @types/ws # ONLY IF WORKING WITH TYPESCRIPT
npm install graphql-ws
npm install graphql-subscriptions
```

* INSTALL ALTAIR CLIENT:

```bash
npm install altair-static
```

## EXAMPLE (_GRAPHQL_ WITH SUBSCRIPTIONS)

* CREATE FOLDER _folderGraphqlSubscriptions_ IN _folderExamples_.
* CREATE ALL FILES IN _folderGraphqlSubscriptions_.
* RUN THE EXAMPLE:
  
  ```bash
  npm run esbuild-nodemon --jsfile=./folderDist/folderExamples/folderGraphqlSubscriptions/exampleGraphqlSubscriptions.js
  ```