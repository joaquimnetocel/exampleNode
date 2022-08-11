// MODULES
import { functionSum, functionSubtraction } from "./moduleMathOperations.js";
import { numberPrice, stringColor } from "./moduleAttributes.js"; // EXPORTING AT THE END
import functionSquare from "./functionSquare.js"; // EXPORT DEFAULT
/////

console.log("THE PRICE IS", numberPrice);
console.log("THE COLOR IS", stringColor);
console.log("THE SUM IS", functionSum(5, 2));
console.log("THE SUBTRACTION IS", functionSubtraction(5, 2));
console.log("THE SQUARE IS", functionSquare(5));
