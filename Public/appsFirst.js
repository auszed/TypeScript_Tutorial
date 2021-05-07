"use strict";
//class is a blueprint for an objcect
class Invoice {
    constructor(c, d, a) {
        // --this--   is for return the class
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    //make the format for return the text inside the class
    format() {
        //this print in console the class
        return `${this.client} owen $${this.amount} for ${this.detail}`;
    }
}
const invOne = new Invoice("mario", "Work in this site", 300);
const invTwo = new Invoice("Juan", "Work in the UX", 268);
//only objects creating using the class will be allowed to get inside the array
let invoices = [];
invoices.push(invOne, invTwo);
//this is not valid so is not working at all
invoices.push("hello");
console.log(invOne, invTwo);
// ! that symbol delets the error in the typescript
const anchor = document.querySelector('a');
console.log(anchor.href);
//select a tag
const form = document.querySelector('form');
//select a class with -----typecasting----
//form selector
const formClass = document.querySelector('.new-item-form');
//get all the data from the form
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
formClass.addEventListener('submit', (e) => {
    //this prevent from loding the site in the browser
    e.preventDefault();
    console.log(
    //we print the type and HTML tag, completely
    type, 
    //we print the value incede the tag
    type.innerHTML, 
    //we print the value
    type.value, toFrom.value, details.value, amount.valueAsNumber);
});
