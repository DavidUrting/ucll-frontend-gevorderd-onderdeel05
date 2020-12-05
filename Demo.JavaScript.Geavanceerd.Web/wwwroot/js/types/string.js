console.info("*********");
console.info("string.js");
console.info("*********");

let theAnswer = 42;
let string1 = "Dit is een string met \"dubbele\" quotes.";
let string2 = 'Dit is een string met \'single\' quotes.';
let string3 = 'Je kan ook "mixen". Geen gedoe met escaping :)';
let string4 = `Dit is een string met backticks.
Het coole aan de backticks is dat je de string over meerdere
lijnen kan uitschrijven. En je hebt ook nog zoiets als interpolation:
deze variabele werd in de string geïnterpoleerd: ${theAnswer}.
The power of backticks dus!`;

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);


console.info("--- string concatenatie ---");
console.log("Geconcateneerd: " + string1 + " " + string2);


console.info("--- properties and methods ---");
console.log("length of string1: " + string1.length);
console.log("positie van 'met' in string1: " + string1.indexOf("met"));