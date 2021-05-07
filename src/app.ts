//import elements
//import the clases
//we import the js, because we will be copilin it
import {Invoice} from "./clases/invoice.js";
import { ListTemplate } from "./clases/listTemplate.js";
import {Payment} from "./clases/payment.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";


// // this is how we do it
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// //we declare the docs
// docOne = new Invoice("mario", "Work in this site", 300);
// docTwo = new Invoice("Juan", "Work in the UX", 268);

// //we get the elements in a array
// let docs: HasFormatter[] = [];

// //push the elementins in to an array
// docs.push(docOne, docTwo);

// console.log(docs);


//select a class with -----typecasting----
//form selector
const formClass = document.querySelector('.new-item-form') as HTMLFormElement;

//get all the data from the form
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement;

//template instance
// we have to put ""!"" to verify that we will find this element in the website
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

formClass.addEventListener('submit',(e:Event) =>{
    //this prevent from loding the site in the browser
    e.preventDefault();
    
    //tuples
    let values: [ string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }


    list.render(doc, type.value, "end");
});



















