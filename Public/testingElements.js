"use strict";
/*
control k + C == comentar
control k + U == descomentar

para copilar directamente, tenemos que usar el siguiente commando
tsc sandbox.ts -w
*/
//define varibles
//We can change the value but not the type
let character = 'mario';
let testingNumber = 30;
let isBlueBelt = false;
//we can asign a type value in the function
const circle = (diameter) => {
    return diameter * Math.PI;
};
console.log(circle(testingNumber));
//-----------------------arrays-------------
let names = ['Luigy', 'Fabio', 'Maria'];
names.push('Toby');
names.push(3); //=======================>this gives an error, because is trying to push a number but still works
let mixedArray = [3, 4, "hola", true];
mixedArray.push("ryu");
mixedArray[0] = false;
//print arrays
console.log(names);
console.log(mixedArray);
//-----------------------arrays-------------
//we cannot change the type
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = '25'; //===========> gives an error but still working
console.log(ninja);
//-----------------------Explicit types-------------
let character2;
let age2;
let isLoogeIn;
age2 = "lets"; //===========> gives us an error
//--------arrays-------------
let ninjas2 = [];
ninjas2.push("Tommy", "jonny");
console.log(ninjas2);
//--------union types-------------
//using any we can add any kind of type
let mixed2 = [];
mixed2.push('hello');
mixed2.push(24);
mixed2.push(true);
console.log(mixed2);
//only a variable
let uid;
uid = true;
uid = "false";
console.log(uid + " uid variable");
//add for any kind of varible
let anyVariable = true;
anyVariable = 35;
console.log(anyVariable + " anyVariable variable");
//--------Objects-------------
let ninjaThree;
ninjaThree = {
    names: 'yoshi',
    age: 58
};
let ninjaFour;
//with the any type
let ninjaFive;
ninjaFive = {
    name: true,
    age: 25
};
console.log(ninjaFive);
//call all the inputs with the querySelectorAll
const inputs = document.querySelectorAll('input');
//for loop for each input
inputs.forEach(input => {
    console.log(input);
});
