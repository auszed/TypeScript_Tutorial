//class is a blueprint for an objcect
//with export we can export the class
export class Payment {
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
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        //emthy line 
    }
    //make the format for return the text inside the class
    format() {
        //this print in console the class
        return `${this.recipient} is owed $${this.amount} for ${this.detail}`;
    }
}
