//import the formater
import {HasFormatter} from '../interfaces/HasFormatter.js';


//class is a blueprint for an objcect
//with export we can export the class
export class Invoice implements HasFormatter{
    // We have 3 access modifiers \\readonly \\private \\ public
    /*
    //we only can read this property
    readonly client: string;
    //private
    private detail: string;
    //Default behavior everyone can access this
    public amount: number;
    */
    constructor(
        // we need "access modifiers" to make it work
        readonly client: string,
        private details: string,
        public amount: number ){
        //emthy line 
    }

    //make the format for return the text inside the class
    format(){
        //this print in console the class
        return `${this.client} owen $${this.amount} for ${this.details}`
    }
}