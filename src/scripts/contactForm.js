// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
// In main.js, import the ContactList component and the ContactForm component.
const contactCollection = require("./contactCollection")
const database = require("./database")

let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let addy = document.getElementById("address");
let phNumber = document.getElementById("pNumber");

const Database = database.load("Contact");
const newContact = (fName,lName,addy,phNumber) =>{
    database.firstName = fName;
    database.lastName = lName;
    database.address = addy;
    database.phoneNumber = phNumber;
}

let newContactVar = newContact(fName,lName,addy,phNumber)