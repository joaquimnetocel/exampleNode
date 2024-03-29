# RUNNING JAVASCRIPT

## DESCRIPTION

WE WILL SEE HOW TO RUN JAVASCRIPT CODE IN FIVE DIFFERENT WAYS:

* RUNNING JAVACRIPT WITH THE NODE'S _REPL_.
* RUNNING A JAVASCRIPT FILE WITH NODE.
* RUNNING JAVASCRIPT ON THE BROWSER'S CONSOLE.
* RUNNING JAVASCRIPT CODE IN A HTML FILE.
* MAKING A HTML FILE RUN A JAVASCRIPT FILE.

## RUNNING JAVASCRIPT WITH THE NODE'S _REPL_

_REPL_ (READ EVALUATE PRINT LOOP) IS A PROGRAMMING LANGUAGE ENVIRONMENT (BASICALLY A CONSOLE WINDOW) THAT TAKES SINGLE EXPRESSION AS USER INPUT AND RETURNS THE RESULT BACK TO THE CONSOLE AFTER EXECUTION. THE REPL SESSION PROVIDES A CONVENIENT WAY TO QUICKLY TEST SIMPLE JAVASCRIPT CODE. TO RUN NODE'S REPL JUT TYPE `node` ON TERMINAL:

```bash
node
```

A NEW ENVIRONMENT NOW IS RUNNING AND YOU CAN USE IT TO TEST JAVASCRIPT COMMANDS LINE BY LINE. TRY THE FOLLOWING TO CALCULATE A SIMPLE SUM WITH JAVASCRIPT:

```javascript
2+3;
```

TO QUIT THE REPL ENVIRONMENT, JUST PRESS `CTRL+C` TWICE.

## RUNNING A JAVASCRIPT FILE WITH NODE

JAVASCRIPT CODE CAN BE WRITTEN IN A FILE WITH `.js` EXTENSION AND YOU CAN RUN IT JUST TYPING ´node´ FOLLOWED BY THE FILE. HERE IS AN EXAMPLE:

```bash
node ./folderSource/folderTopics/folderRunningJavascript/exampleRunningJavascript.js
```

## RUNNING ON THE BROWSER'S CONSOLE

YOU CAN ALSO RUN JAVASCRIPT CODE DIRECTLY FROM YOUR FAVORITE BROWSER.

* OPEN THE BROWSER.
* CLICK WITH THE RIGHT MOUSE BUTTON ANYWHERE ON THE CURRENT PAGE.
* CHOOSE "Inspect".
* ON THE RIGHT PANEL, CHOOSE "Console" (IF THIS OPTION IS HIDDEN, JUST INCREASE THE RIGHT PANEL WIDTH TO SEE IT).

NOW YOU CAN TRY JAVASCRIPT CODE DIRECTLY IN YOUR BROWSER. AGAIN, LET'S TRY A SIMPLE SUM:

```javascript
2+3;
```

## RUNNING JAVASCRIPT CODE IN A HTML FILE

YOU CAN ALSO RUN JAVASCRIPT IN HTML PAGES.

* CREATE A HTML FILE (`.html` EXTENSION) WITH JAVASCRIPT CODE SURROUNDED BY `<script>` AND `</script>`. HERE IS THE EXAMPLE:

  ```javascript
  // exampleRunningJavascript.html
  <head>
      <title>PAGE TITLE</title>
  </head>
  <body>
      THIS IS MY HTML PAGE
      <script>
          console.log("HELLO");
          console.log("WORLD");
      </script>
  </body>
  ```

* OPEN THE HTML FILE WITH YOUR FAVORITE BROWSER.

* OPEN THE BROWSER CONSOLE AND YOU WILL SEE "HELLO" AND "WORLD" PRINTED.

## MAKING A HTML FILE RUN A JAVASCRIPT FILE

* CREATE A JAVASCRIPT FILE (`.js` EXTENSION). HERE IS THE EXAMPLE:

  ```javascript
  // exampleRunningJavascript.js
  7 + 8;
  console.log("HELLO WORLD");
  ```

* CREATE A HTML FILE THAT CALLS A `.js` FILE. HERE IS THE EXAMPLE:

  ```javascript
  // exampleRunningExternalJavascript.html
  <head>
      <title>PAGE TITLE</title>
  </head>
  <body>
      THIS IS MY HTML PAGE
      <script src="./exampleRunningJavascript.js" />
  </body>
  ```

* OPEN THE HTML FILE WITH YOUR FAVORITE BROWSER.

* OPEN THE BROWSER CONSOLE AND YOU WILL SEE "HELLO WORLD" PRINTED.
