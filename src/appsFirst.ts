//class is a blueprint for an objcect
class Invoice{
    //we have 3 propertys
    client: string;
    detail: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        // --this--   is for return the class
        this.client = c;
        this.detail = d;
        this.amount = a;
    }

    //make the format for return the text inside the class
    format(){
        //this print in console the class
        return `${this.client} owen $${this.amount} for ${this.detail}`
    }
}

const invOne = new Invoice("mario", "Work in this site", 300);
const invTwo = new Invoice("Juan", "Work in the UX", 268);

//only objects creating using the class will be allowed to get inside the array
let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);
//this is not valid so is not working at all
invoices.push("hello");

console.log(invOne, invTwo);

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
        //we print the type and HTML tag, completely
        type,
        //we print the value incede the tag
        type.innerHTML,
        //we print the value
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});
















