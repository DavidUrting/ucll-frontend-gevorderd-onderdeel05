console.info("*********");
console.info("object.js");
console.info("*********");

console.info("--- object literal ---");
let objectLiteral = {
    _property1: "Als een property start met _: niet gebruiken, da's privé! Gebruik de get/set accessors.",
    get property1() {
        // get accessor voor de private property
        return this._property1; 
    },
    set property1(value) {
        // set accessor voor de private property
        if (!value) throw "Gelieve een string van minstens één character in te stellen";
        this._property1 = value;
    },
    property2: "Dit is wel publiek.",
    toString: function () {
        return `property1: ${this.property1}, property2: ${this.property2}`;
    }
}

objectLiteral.property1 = "Dit is";
objectLiteral.property2 = "een test."
console.log("objectLiteral: " + objectLiteral.toString());

console.info("--- object from class ---");
class SomeClass {
    constructor() {
        this._property1 = "Als een property start met _: niet gebruiken, da's privé! Gebruik de get/set accessors.";
        this.property2 = "Dit is wel publiek."
    }

    get property1() {
        // get accessor voor de private property
        return this._property1;
    }

    set property1(value) {
        // set accessor voor de private property
        if (!value) throw "Gelieve een string van minstens één character in te stellen";
        this._property1 = value;
    }

    toString() {
        return `property1: ${this.property1}, property2: ${this.property2}`;
    }
}

let objects = [];
for (let i = 0; i < 5; i++) {
    let object = new SomeClass();
    object.property1 = "Dit is";
    object.property2 = "test nummer " + i + ".";
    objects.push(object)
}

for (let i = 0; i < objects.length; i++) {
    console.log("Object " + i + ": " + objects[i].toString());
}