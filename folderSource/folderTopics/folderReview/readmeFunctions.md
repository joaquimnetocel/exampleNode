# FUNCTIONS

## FUNCTION EXPRESSION

```javascript
const functionSayHello = function(){
    console.log("HELLO!");
    console.log("HOW ARE YOU?");
    console.log("AS YOU CAN SEE, INSIDE A FUNCTION WE CAN DO A LOT OF THINGS.");
};
functionSayHello();
```

## ARGUMENTS

```javascript
const functionSayHello = function(argSize, argColor){
    console.log(`THE HOUSE IS ${argSize} AND ${argColor}.`);
};
functionSayHello("SMALL", "GREEN");
functionSayHello("BIG", "WHITE");
functionSayHello("SMALL", "RED");
```

## RETURN

```javascript
const functionMean(argNumber1, argNumber2){
    const numberSum = argNumber1 + argNumber2;
    return numberSum/2;
};
const numberResult = functionSum(2,4);
console.log(`THE RESULT IS ${numberResult}.`); // THE RESULT IS 3.
```

## FUNCTION DECLARATION

```javascript
functionSayHello("SMALL", "GREEN");
functionSayHello("BIG", "WHITE");
functionSayHello("SMALL", "RED");
function functionSayHello(argSize, argColor){
    console.log(`THE HOUSE IS ${argSize} AND ${argColor}.`);
};
```

## ARROW FUNCTION

```javascript
const functionSquare = (argNumber)=>{
    return argNumber * argNumber;
};
console.log( functionSquare(3) ); // 9
console.log( functionSquare(4) ); // 16
```

```javascript
const functionSquare = argNumber => argNumber * argNumber;
console.log( functionSquare(3) ); // 9
console.log( functionSquare(4) ); // 16
```
