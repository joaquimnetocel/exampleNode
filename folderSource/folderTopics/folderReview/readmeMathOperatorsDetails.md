# SOME DETAILS ON JAVASCRIPT MATH

LET'S SEE SOME DETAILS ABOUT JAVASCRIPT MATH...

## OPERATOR PRECEDENCE

IF AN EXPRESSION HAS MORE THAN ONE OPERATOR, THE EXECUTION ORDER IS DEFINED BY THEIR PRECEDENCE, OR, IN OTHER WORDS, THE DEFAULT PRIORITY ORDER OF OPERATORS.

FROM SCHOOL, WE ALL KNOW THAT THE MULTIPLICATION IN THE EXPRESSION `1 + 3 * 2` SHOULD BE CALCULATED BEFORE THE ADDITION (THE RESULT WILL BE `7`). THAT’S EXACTLY THE PRECEDENCE THING. THE MULTIPLICATION IS SAID TO HAVE A HIGHER PRECEDENCE THAN THE ADDITION. PARENTHESES OVERRIDE ANY PRECEDENCE, SO IF WE’RE NOT SATISFIED WITH THE DEFAULT ORDER, WE CAN USE THEM TO CHANGE IT. FOR EXAMPLE, WRITE `(1 + 3) * 2` AND THE RESULT WILL BE `8`.

THERE ARE MANY OPERATORS IN JAVASCRIPT. IF THE PRECEDENCE IS THE SAME, THE EXECUTION ORDER IS FROM LEFT TO RIGHT. IN SUMMARY, JAVASCRIPT MATH PRECEDENCES FOLLOWS SCHOOL MATH PRECEDENCES.

## MODIFY-IN-PLACE

WE OFTEN NEED TO APPLY AN OPERATOR TO A VARIABLE AND STORE THE NEW RESULT IN THAT SAME VARIABLE. FOR EXAMPLE:

```javascript
let n = 2;
n = n + 5; // NOW n IS 7
n = n * 2; // NOW n IS 14
console.log(n); // SHOWS 14
```

THIS NOTATION CAN BE SHORTENED USING THE OPERATORS += AND *=:

```javascript
let n = 2;
n += 5; // NOW n IS 7
n *= 2; // NOW n IS 14
console.log(n); // SHOWS 14
```

SHORT "MODIFY-AND-ASSIGN" OPERATORS EXIST FOR ALL ARITHMETICAL AND BITWISE OPERATORS: `/=`, `-=`, ETC.

## INCREMENT/DECREMENT (CURIOSITY)

INCREASING OR DECREASING A NUMBER BY ONE IS AMONG THE MOST COMMON NUMERICAL OPERATIONS. SO, THERE ARE SPECIAL OPERATORS FOR IT:

* INCREMENT `++` INCREASES A VARIABLE BY 1:

```javascript
let counter = 7;
counter++;
console.log(counter); // SHOWS 8
```

* DECREMENT `--` DECREASES A VARIABLE BY 1:

```javascript
let counter = 7;
counter--;
console.log(counter); // SHOWS 6
```

INCREMENT/DECREMENT CAN ONLY BE APPLIED TO VARIABLES. TRYING TO USE IT ON A VALUE LIKE 5++ WILL GIVE AN ERROR.

THE OPERATORS ++ AND -- CAN BE PLACED EITHER BEFORE OR AFTER A VARIABLE. WHEN THE OPERATOR GOES AFTER THE VARIABLE, IT IS IN "POSTFIX FORM": `counter++`. THE "PREFIX FORM" IS WHEN THE OPERATOR GOES BEFORE THE VARIABLE: `++counter`. BOTH OF THESE STATEMENTS DO THE SAME THING: INCREASE COUNTER BY 1.

IS THERE ANY DIFFERENCE? YES, BUT WE CAN ONLY SEE IT IF WE USE THE RETURNED VALUE OF `++` OR `--`. LET'S CLARIFY. AS WE KNOW, ALL OPERATORS RETURN A VALUE. INCREMENT/DECREMENT IS NO EXCEPTION. THE PREFIX FORM RETURNS THE NEW VALUE WHILE THE POSTFIX FORM RETURNS THE OLD VALUE (PRIOR TO INCREMENT/DECREMENT).

TO SEE THE DIFFERENCE, HERE'S AN EXAMPLE:

```javascript
let counter = 1;
let new = ++counter; // THE PREFIX FORM ++counter INCREMENTS COUNTER AND RETURNS THE NEW VALUE, 2.
console.log(new); // SHOWS 2
```

NOW, LET'S USE THE POSTFIX FORM:

```javascript
let counter = 1;
let new = counter++; // THE POSTFIX FORM counter++ ALSO INCREMENTS COUNTER BUT RETURNS THE OLD VALUE (PRIOR TO INCREMENT).
console.log(new); // SHOWS 1
```

TO SUMMARIZE, IF THE RESULT OF INCREMENT/DECREMENT IS NOT USED, THERE IS NO DIFFERENCE IN WHICH FORM TO USE:

```javascript
let counter = 7;
counter++;
++counter;
console.log(counter); // SHOWS 9
```

IF WE'D LIKE TO INCREASE A VALUE AND IMMEDIATELY USE THE RESULT OF THE OPERATOR, WE NEED THE PREFIX FORM:

```javascript
let counter = 0;
console.log(++counter); // SHOWS 1
let counter2 = 0;
console.log(counter2++); // SHOWS 0
```