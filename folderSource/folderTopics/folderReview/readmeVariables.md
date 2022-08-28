# VARIABLES (LET)

IN JAVASCRIPT, WE CAN STORE DATA IN VARIABLES. VARIABLES ARE DECLARED WITH THE `let` KEYWORD.

```javascript
let stringColor = "GREEN";
console.log(stringColor);
stringColor = "BLUE";
console.log(stringColor);
stringColor = "RED";
console.log(stringColor);
```

AS WE CAN SEE ON THE EXAMPLE ABOVE, THE `let` KEYWORD IS USED ONLY ONCE, WHEN THE VARIABLE IS CREATED. USING LET, WE CAN CHANGE THE VALUE IT STORES ANYTIME.

## CONSTANTS (CONST)

```javascript
const stringColor = "GREEN";
console.log(stringColor);
stringColor = "BLUE"; // THIS WILL THROW AN ERROR, BECAUSE THE VARIABLE IS CONSTANT (DECLARED WITH CONST).
```

## SCOPE

VARIABLES DECLARED WITH `let` OR `const` ONLY EXISTS INSIDE THE SCOPE WHERE THEY ARE DECLARED.

```javascript
const stringColor = "RED";
if (stringColor === "RED") {
    const stringMessage = "DANGER!";
    console.log(stringMessage);
}
console.log(stringMessage); // THIS WILL THROW AN ERROR, BECAUSE stringMessage ONLY EXISTS INSIDE THE if BLOCK.
```
