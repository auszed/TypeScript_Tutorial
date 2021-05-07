//class is a blueprint for an objcect
//with export we can export the class
export class Invoice {
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
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        //emthy line 
    }
    //make the format for return the text inside the class
    format() {
        //this print in console the class
        return `${this.client} owen $${this.amount} for ${this.details}`;
    }
}
