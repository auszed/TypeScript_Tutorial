//import elements
//import the clases
//we import the js, because we will be copilin it
import { Invoice } from "./clases/invoice.js";
import { ListTemplate } from "./clases/listTemplate.js";
import { Payment } from "./clases/payment.js";
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
const formClass = document.querySelector('.new-item-form');
//get all the data from the form
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//template instance
// we have to put ""!"" to verify that we will find this element in the website
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
formClass.addEventListener('submit', (e) => {
    //this prevent from loding the site in the browser
    e.preventDefault();
    //tuples
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
