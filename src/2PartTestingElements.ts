let greet: Function;


//---------------declare the function-----------------------------
greet = () =>{
    console.log("testing the function");
}

//optional parameters at the end
// = 10 this allow to make a default value
// ? this allow to make an optional value
// : void      represents a complete lack of return value
// undefinde   will be when we have an optional parameter
// void        is complete lack of any kind of value
const add = (a: number, b: number, c: number= 10, d?: boolean | string ): void => {
    console.log(a + b + c);
    console.log(d);
}

add(5, 3);
add(3, 4, 1, false);

//the export value will be here     ▼▼▼▼▼▼▼▼
const minus = (a: number, b: number): number =>{
    return a - b;
}

let result = minus(55, 7);


//---------------declare the TYPE-----------------------------
/*
this was the original function
const greetAgain = (user: {name: string, uid:string | number}) =>{
    console.log('${user.name} says hello);
}


*/ 
//type is when we can use variables in diferent functions
type StingOrNum = string | number;
type objWithName = {name: string, age: string | number};

const greet2 = (user: StingOrNum) =>{
    console.log(`${user} says hello, and his`);
}

//this is not working well
const greetAgain = (user: objWithName) =>{
    console.log(`${user.name} says hello, and his ${user.age}`);
}



greet2("joshes");
greetAgain("pablo",22);


//---------------Function Signatures----------------------------

//example #1
let greet3: (a: string, b: string) => void;
//void, we return nothing
greet3 = (name: string, greeting: string) =>{
    console.log(`${name} says ${greeting}`);
};

//example #2
let calc: (a: number, b: number, c?: string) => number;
calc = (calcOne: number, calcTwo: number, action?: string): number =>{
    if (action === 'add'){
        return calcOne + calcTwo;
    }else{
        return calcOne - calcTwo;
    }  
};

//example #3
let logDetails: (obj: {name: string, power: number}) => void;

//type
type person = {name: string, power: number};

// object with a function
logDetails = (ninja: person) =>{
    console.log(`${ninja.name} is power # ${ninja.power}`);
}


// Execution of examples
greet3("tony", "Love you");
console.log(calc(4, 3));
logDetails(("lee", 66));





