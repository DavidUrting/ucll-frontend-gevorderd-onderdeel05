console.info("*********");
console.info("regexp.js");
console.info("*********");

let patroon = /upperorlower/i; // /i -> case insensitive

console.log("Er is een match op positie: " + "Bevat dit UpPerORLower?".search(patroon));
console.log("Vervangen van de match met de lege string: " + "Bevat dit UpPerORLower?".replace(patroon, ""))
