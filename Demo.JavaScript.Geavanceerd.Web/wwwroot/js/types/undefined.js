console.info("************");
console.info("undefined.js");
console.info("************");

let variabeleDieNogGeenWaardeHeeftGekregen;
console.log("variabeleDieNogGeenWaardeHeeftGekregen: " + variabeleDieNogGeenWaardeHeeftGekregen);

function dezeGeeftNietsTerug() {
    let i = 1;
}
let resultaatVanFunctieDieNietsTeruggeeft = dezeGeeftNietsTerug();
console.log("resultaatVanFunctieDieNietsTeruggeeft: " + resultaatVanFunctieDieNietsTeruggeeft);

function functieMet2Argumenten(a, b) {
    console.log("argument a: " + a);
    console.log("argument b: " + b)
}
functieMet2Argumenten(123);