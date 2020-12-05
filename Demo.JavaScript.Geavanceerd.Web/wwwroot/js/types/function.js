console.info("***********");
console.info("function.js");
console.info("***********");

function functionThatAddsTwoNumbers(a, b) {
    return a + b;
}

let resultOfFunctionWith0Arguments = functionThatAddsTwoNumbers();
let resultOfFunctionWith1Argument = functionThatAddsTwoNumbers(1);
let resultOfFunctionWith2Arguments = functionThatAddsTwoNumbers(1,1);
let resultOfFunctionWith3Arguments = functionThatAddsTwoNumbers(1,1,1);
console.log("resultOfFunctionWith0Arguments: " + resultOfFunctionWith0Arguments);
console.log("resultOfFunctionWith1Argument: " + resultOfFunctionWith1Argument);
console.log("resultOfFunctionWith2Arguments: " + resultOfFunctionWith2Arguments);
console.log("resultOfFunctionWith3Arguments: " + resultOfFunctionWith3Arguments);

function functionThatAddsTwoNumbersWithDefaults(a, b) {
    if (!a) a = 0; // als a 'falsy' is (vb. undefined), dan zal !false naar true evalueren en zal a dus 0 als waarde krijgen.
    if (!b) b = 0; // idem.
    return a + b;
}
resultOfFunctionWith0Arguments = functionThatAddsTwoNumbersWithDefaults();
resultOfFunctionWith1Argument = functionThatAddsTwoNumbersWithDefaults(1);
console.log("resultOfFunctionWith0Arguments: " + resultOfFunctionWith0Arguments);
console.log("resultOfFunctionWith1Argument: " + resultOfFunctionWith1Argument);


console.info("--- variadic function ---"); 
function functionThatAddsUnlimitedNumbers() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
resultOfFunctionWith3Arguments = functionThatAddsUnlimitedNumbers(1, 1, 1);
console.log("resultOfFunctionWith3Arguments: " + resultOfFunctionWith3Arguments);