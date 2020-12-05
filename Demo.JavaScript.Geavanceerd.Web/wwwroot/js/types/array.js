console.info("********");
console.info("array.js");
console.info("********");

// Helper functie om een array af te drukken op de console.
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("  " + array[i]);
    }
}
let courses = ["C# basis", "C# gevorderd", "Front end basis", "Front end gevorderd"];
console.log("Cursussen:");
printArray(courses);
console.log("courses 1st element: " + courses[0]);
console.log("courses last element: " + courses[courses.length - 1]);


console.info("--- push/pop ---");
courses.push("foutje");
courses.pop();
courses.push("Databases basis");
courses.push("Databases gevorderd");
printArray(courses);


console.info("--- Array.isArray ---");
console.log("Array.isArray(123): " + Array.isArray(123));
console.log("Array.isArray('tekstje'): " + Array.isArray('tekstje'));
console.log("Array.isArray(true): " + Array.isArray(true));
console.log("Array.isArray(courses): " + Array.isArray(courses));


console.info("--- properties en methods ---");
console.log("courses.length: " + courses.length);