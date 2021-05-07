"use strict";
//------------Generics--------
// How it works
// We add this method to an object
//<T> this alows to pass the properties in the objects
// <T> can be any letter
//---extends object------
//  allows only to use objecsts as parameters
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    // the ... means all the elements
    return Object.assign(Object.assign({}, obj), { uid });
};
//this only alow to pass an atribut name that is a string
const addUID2 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    // the ... means all the elements
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
let docTwo = addUID2({ name: "hello" });
//this works well
console.log(docOne);
//this not because we dont know what propertys we have inside
console.log(docOne.name);
console.log(docOne.age);
console.log(docTwo);
//we implement the interfase
const docThree = {
    uid: 2,
    resorceName: "lala",
    data: { name: "juan", age: 22 }
};
console.log(docThree);
//other example with arrays
const docFour = {
    uid: 2,
    resorceName: "lala",
    data: ["mandarina", "manzana", "banana"]
};
console.log(docFour);
