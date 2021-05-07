//we used to enforce a certain type of structur within the class
//We dont used to create new objects
//this is the interfaces
interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void,
    spend(b: number): number
}

//here we declare the interfase with a varible
const me: IsPerson = {
    name: "lulu",
    age: 20,
    speak(text: string):void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log("I spend "+ amount)
        return amount;
    }
};


//we use the interfase in a function
const greetPerson = (person: IsPerson) => {
    console.log("hello ", person.name);
}

//we need to declare the object outside and used here 
greetPerson(me);



//import the clases
//we import the js, because we will be copilin it
import {Invoice} from './clases/invoice.js';

const invOne = new Invoice("mario", "Work in this site", 300);
const invTwo = new Invoice("Juan", "Work in the UX", 268);

//only objects creating using the class will be allowed to get inside the array
let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

//loop for prin every item
invoices.forEach(inv =>{
    /*
    //this arent accesible at all
    inv.client = 'this is for read only';
    inv.detail = 'this is private, so is not accesible';
    inv.amount = 22;
    */
    console.log(inv.client, inv.amount, inv.format());
});


// ! that symbol delets the error in the typescript
const anchor = document.querySelector('a')!;

console.log(anchor.href);

//select a tag
const form = document.querySelector('form');

//select a class with -----typecasting----
//form selector
const formClass = document.querySelector('.new-item-form') as HTMLFormElement;

//get all the data from the form
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement;

formClass.addEventListener('submit',(e:Event) =>{
    //this prevent from loding the site in the browser
    e.preventDefault();
    
    console.log(
        //we print the value
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});



















