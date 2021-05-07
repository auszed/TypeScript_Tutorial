//------------Enums--------
//This allow to ember part of the codes in a object
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

//here we ad some names to titles
enum NamesBooks {
    BOOK1 = "la pajarola",
    BOOK2 = "loritaxx"
}

//create an interfase
interface Resource <T> {
    uid: number;
    //here we embed the ENUM element
    resourceType: ResourceType;
    data: T;
    names: NamesBooks;
}

//get some books
const docFive: Resource <object> = {
    uid: 33,
    //Here we select the item
    resourceType: ResourceType.PERSON, //return a {4} because in that part in the element enum
    data: {title: "name of the till"},
    names: NamesBooks.BOOK2
}

console.log(docFive);