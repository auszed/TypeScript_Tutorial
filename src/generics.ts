//------------Generics--------

// How it works
// We add this method to an object

//<T> this alows to pass the properties in the objects
// <T> can be any letter
//---extends object------
//  allows only to use objecsts as parameters
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    // the ... means all the elements
    return {...obj, uid};
}

//this only alow to pass an atribut name that is a string
const addUID2 = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    // the ... means all the elements
    return {...obj, uid};
}

let docOne = addUID({name: "yoshi", age: 40});
let docTwo = addUID2({name: "hello"});

//this works well
console.log(docOne);

//this not because we dont know what propertys we have inside
console.log(docOne.name);
console.log(docOne.age);

console.log(docTwo);

//create an interfase
interface Resource <T> {
    uid: number;
    resorceName: string;
    data: T;
}

//we implement the interfase
const docThree: Resource <object> = {
    uid: 2,
    resorceName: "lala",
    data: {name : "juan", age: 22}
}

console.log(docThree);

//other example with arrays
const docFour: Resource <string []> = {
    uid: 2,
    resorceName: "lala",
    data: ["mandarina", "manzana", "banana"]
}
console.log(docFour);








