# CONDITIONAL OPERATORS

SOMETIMES, WE NEED TO PERFORM DIFFERENT ACTIONS BASED ON DIFFERENT CONDITIONS. TO DO THAT, WE CAN USE THE `if` STATEMENT AND THE CONDITIONAL OPERATOR ?, THAT’S ALSO CALLED A "QUESTION MARK" OPERATOR.

## THE “IF” STATEMENT

THE `if` STATEMENT EVALUATES A CONDITION, IF THE RESULT IS TRUE, EXECUTES A BLOCK OF CODE. FOR EXAMPLE:

```javascript
const stringColor = "RED";
if (stringColor === "RED") { // THE CONDITION IS TRUE
    const stringMessage = "DANGER!";
    console.log(stringMessage); // SHOWS "DANGER!"
}
```

ON THE OTHER HAND, IF THE CONDITION IS FALSE THE BLOCK OF CODE WILL NOT BE EXECUTED.

```javascript
const stringColor = "WHITE";
if (stringColor === "RED") { // THE CONDITION IS FALSE
    const stringMessage = "DANGER!"; // NOT EXECUTED
    console.log(stringMessage); // NOT EXECUTED
}
```

## VARIABLES SCOPE

VARIABLES DECLARED WITH `let` OR `const` ONLY EXISTS INSIDE THE SCOPE WHERE THEY ARE DECLARED.

```javascript
const stringColor = "RED";

if (stringColor === "RED") {
    const stringMessage = "DANGER!";
    console.log(stringMessage);
}

console.log(stringMessage); // THIS WILL THROW AN ERROR, BECAUSE stringMessage ONLY EXISTS INSIDE THE if BLOCK.
```

TODO: TERNARY OPERATOR
