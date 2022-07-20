"use strict";
console.log('Hello Nigga');
// implicit types
var helloNigga = "Hello, Nigga!";
console.log("Implicit Types >>> ", helloNigga);
// explicit types
var firstName = "Alvin";
var age = 24;
console.log("Explicit Types >>> ", firstName, age);
var x = ["hello", 10];
console.log("Tuples >>>", x);
// enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antartica"] = 5] = "Antartica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
var australia = Continents.Australia;
console.log("Enums >>> ", australia);
var user = {
    name: "alvin",
    id: 10
};
console.log("Interface >>> ", user);
var windowState = "open";
var odd = 3;
console.log("Composing Types >>> ", windowState);
if (typeof window !== 'undefined') {
    var element = document.getElementById("typescript");
    if (element) {
        element.innerHTML = "Typescript for Babies";
    }
}
