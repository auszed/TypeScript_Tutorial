"use strict";
//------------Enums--------
//This allow to ember part of the codes in a object
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
//here we ad some names to titles
var NamesBooks;
(function (NamesBooks) {
    NamesBooks["BOOK1"] = "la pajarola";
    NamesBooks["BOOK2"] = "loritaxx";
})(NamesBooks || (NamesBooks = {}));
//get some books
const docFive = {
    uid: 33,
    //Here we select the item
    resourceType: ResourceType.PERSON,
    data: { title: "name of the till" },
    names: NamesBooks.BOOK2
};
console.log(docFive);
