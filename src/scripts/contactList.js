// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

const contactCollection = require("./contactCollection")
const contact = require("./contact")

const displayList = ()=>{
    //Variables
    const divRef = document.querySelector(".contactList");
    const divFrag = document.createDocumentFragment();
    const ulRef = document.createElement("ul");
    const liNameRef = document.createElement("li")
    const liAddressRef = document.createElement("li");
    const liPhoneRef = document.createElement("li");
    //function

}