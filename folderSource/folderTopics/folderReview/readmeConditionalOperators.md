# CONDITIONAL OPERATORS

SOMETIMES, WE NEED TO PERFORM DIFFERENT ACTIONS BASED ON DIFFERENT CONDITIONS. TO DO THAT, WE CAN USE THE `if` STATEMENT AND THE CONDITIONAL OPERATOR ?, THAT'S ALSO CALLED A "QUESTION MARK" OPERATOR.

## THE `if` STATEMENT

THE `if` STATEMENT EVALUATES A CONDITION, IF THE RESULT IS TRUE, EXECUTES A BLOCK OF CODE (INSIDE CURLY BRACES). FOR EXAMPLE:

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

IF WE WANT TO EXECUTE ONLY ONE STATEMENT, THE CURLY BRACES ARE OPTIONAL:

```javascript
const stringColor = "RED";
if (stringColor === "RED") console.log(stringMessage);  // SHOWS "DANGER!"
```

## THE `else` CLAUSE

THE `if` STATEMENT MAY CONTAIN AN OPTIONAL `else` BLOCK. IT EXECUTES WHEN THE CONDITION IS FALSY. FOR EXAMPLE:

```javascript
let numberPrice = 50;

if (numberPrice > 300) {
    console.log("IT IS VERY EXPENSIVE!"); // NOT EXECUTED
}
else {
    console.log("IT IS VERY CHEAP!"); // SHOWS THE MESSAGE, BECAUSE 50 ISN'T GREATER THAN 300.
}
```

## SEVERAL CONDITIONS (`else if`)

SOMETIMES, WE'D LIKE TO TEST SEVERAL VARIANTS OF A CONDITION. THE `else if` CLAUSE LETS US DO THAT. FOR EXAMPLE:

```javascript
let numberPrice = 50;

if (numberPrice > 300) {
    console.log("IT IS VERY EXPENSIVE!"); // NOT EXECUTED
}
else if (numberPrice < 100) {
    console.log("IT IS VERY CHEAP!"); // SHOWS THE MESSAGE
}
else {
    console.log("IT'S A FAIR PRICE!"); // NOT EXECUTED
}
```

IT IS WORTH TO NOTE THAT THERE CAN BE MORE `else if` BLOCKS AND THAT THE FINAL `else` IS OPTIONAL.

## TERNARY OPERATOR (?)

SOMETIMES, WE NEED TO ASSIGN A VARIABLE DEPENDING ON A CONDITION. FOR INSTANCE:

```javascript
let booleanAllowed;
const numberAge = 30;

if (numberAge > 18) {
  booleanAllowed = true;
} else {
  booleanAllowed = false;
}

console.log(booleanAllowed);
```

THE SO-CALLED "CONDITIONAL" OR "QUESTION MARK" OPERATOR LETS US DO THAT IN A SHORTER AND SIMPLER WAY. THE OPERATOR IS REPRESENTED BY A QUESTION MARK (?).

FOR EXAMPLE, THIS EXAMPLE WILL DO THE SAME THING AS THE PREVIOUS ONE:

```javascript
let booleanAllowed = (numberAge > 18) ? true : false;
```

TECHNICALLY, WE CAN OMIT THE PARENTHESES AROUND `numberAge > 18`. THE QUESTION MARK OPERATOR HAS A LOW PRECEDENCE, SO IT EXECUTES AFTER THE COMPARISON `>`.

THIS OPERATOR IS CALLED "TERNARY", BECAUSE IT HAS THREE OPERANDS.

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
