console.info("**********");
console.info("boolean.js");
console.info("**********");

// het booleaanse type heeft twee waarden: true en false
let someBool1 = false;
let someBool2 = true;
if (someBool1) {
    console.log("Deze code zal niet uitgevoerd worden...");
}
if (someBool2) {
    console.log("Deze code zal wel uitgevoerd worden...");
}
console.log();


console.info("--- conditionele operatoren ---");
// conditionele operatoren hebben een bool als resultaat.
let getal1 = 10;
let getal2 = 15;
let resultaat = getal1 == getal2;
if (resultaat) {
    console.log("Deze code zal niet uitgevoerd worden.")
}
resultaat = getal1 < getal2;
if (resultaat) {
    console.log("Deze code zal wel uitgevoerd worden.")
}
console.log();


console.info("--- boolse operatoren ---");
// boolse operatoren: ! (not), && (and), || (or)
// !true -> false, !false -> true
// true && true -> true, true && false -> false, false && true -> false, false && false -> false
// true || true -> true, true || false -> true, false || true -> true, false || false -> false
if (!someBool1) {
    console.log("Deze code zal wel uitgevoerd worden (want !false is hetzelfde als true)");
}
if (someBool1 && someBool2) {
    console.log("Deze code zal niet uitgevoerd worden (want false && true is false)");
}
if (someBool1 || someBool2) {
    console.log("Deze code zal wel uitgevoerd worden (want false || true is true)");
}
console.log();


console.info("--- falsy en truthy ---");
if (false || 0 || "" || null || undefined || NaN) {
    console.log("Deze code zal niet uitgevoerd worden want de voorwaarde is falsy.");
}
if (1) {
    console.log("Deze code zal wel uitgevoerd worden want de voorwaarde is truthy (alle numbers verschillend van 0 zijn truthy).");
}
if ("Non-empty string, so ... truthy!") {
    console.log("Deze code zal wel uitgevoerd worden want de voorwaarde is truthy (een niet-lege string is truthy).");
}
console.log();


console.info("--- == vs === ---");
if ("" == 0) {
    console.log("Deze if-tak zal uitgevoerd worden.");
}
if (3 + true == "" + 4) {
    console.log("En deze if-tak ook!");
}