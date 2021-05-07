"use strict";
let greet;
//---------------declare the function-----------------------------
greet = () => {
    console.log("testing the function");
};
//optional parameters at the end
// = 10 this allow to make a default value
// ? this allow to make an optional value
// : void      represents a complete lack of return value
// undefinde   will be when we have an optional parameter
// void        is complete lack of any kind of value
const add = (a, b, c = 10, d) => {
    console.log(a + b + c);
    console.log(d);
};
add(5, 3);
add(3, 4, 1, false);
//the export value will be here     ▼▼▼▼▼▼▼▼
const minus = (a, b) => {
    return a - b;
};
let result = minus(55, 7);
const greet2 = (user) => {
    console.log(`${user} says hello, and his`);
};
//this is not working well
const greetAgain = (user) => {
    console.log(`${user.name} says hello, and his ${user.age}`);
};
greet2("joshes");
greetAgain("pablo", 22);
//---------------Function Signatures----------------------------
//example #1
let greet3;
//void, we return nothing
greet3 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example #2
let calc;
calc = (calcOne, calcTwo, action) => {
    if (action === 'add') {
        return calcOne + calcTwo;
    }
    else {
        return calcOne - calcTwo;
    }
};
//example #3
let logDetails;
// object with a function
logDetails = (ninja) => {
    console.log(`${ninja.name} is power # ${ninja.power}`);
};
// Execution of examples
greet3("tony", "Love you");
console.log(calc(4, 3));
logDetails(("lee", 66));
