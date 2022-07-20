console.log('Hello Nigga');


// implicit types
let helloNigga = "Hello, Nigga!"
console.log("Implicit Types >>> ", helloNigga)

// explicit types
let firstName: string = "Alvin";
let age: number = 24;
console.log("Explicit Types >>> ", firstName, age)


// tuple
type stringAndNumber = [string, number];
let x: stringAndNumber = ["hello", 10];
console.log("Tuples >>>", x)


// enums
enum Continents {
    North_America, // 0
    South_America, // 1
    Africa, // 2
    Asia, // 3
    Europe, // 4
    Antartica, //5
    Australia, //6
}
var australia = Continents.Australia;
console.log("Enums >>> ", australia)



// interface
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "alvin",
    id: 10
}
console.log("Interface >>> ", user)




// composing types → Union
type WindowState = "open" | "closed" | "minimized";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;
const windowState: WindowState = "open";
const odd: OddNumberUnderTen = 3;
console.log("Composing Types >>> ", windowState);


if (typeof window !== 'undefined') {
    const element = document.getElementById("typescript");
    element.innerHTML = "Typescript for Babies";
}



