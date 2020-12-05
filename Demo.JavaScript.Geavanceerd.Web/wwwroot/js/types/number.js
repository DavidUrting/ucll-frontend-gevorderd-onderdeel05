console.info("*********");
console.info("number.js");
console.info("*********");

const PI = 3.14;
const dozijn = 12;
let willekeurigGetal = Math.random();
console.log("PI: " + PI);
console.log("dozijn: " + dozijn);
console.log("willekeurigGetal: " + willekeurigGetal);


console.info("--- isNaN() ---");
console.log("isNaN('tekstje'): " + isNaN('tekstje'));
console.log("isNaN(true): " + isNaN(true)); // opgelet: coersion naar 1
console.log("isNaN(3): " + isNaN(3));
console.log("isNaN('3'): " + isNaN('3')); // opgelet: coersion naar 3


console.info("--- parseInt()/parseFloat() ---");
console.log("parseInt('123'): " + parseInt('123'));
console.log("parseFloat('123,45'): " + parseFloat('123,45')); // opgelet met ','! 
console.log("parseFloat('123.45'): " + parseFloat('123.45'));
console.log("parseFloat('   123.45   '): " + parseFloat('   123.45   '));