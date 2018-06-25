// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
// In main.js, import the ContactList component and the ContactForm component.
const contactCollection = require("./contactCollection")
const database = require("./database")
const databaseMethods = require("./databaseMethods")

let fName = document.getElementById("fname").value;
let lName = document.getElementById("lname").value;
let addy = document.getElementById("address").value;
let phNumber = document.getElementById("pNumber").value;
//idGen
const idGenerator = function* (startFrom = 0) {
    let newId = 1
    while (true) {
        yield startFrom + newId
        newId++
    }
}
const uuidMaker = idGenerator()

const Database = databaseMethods.loadDatabase("Contact")

const newContact = (fName,lName,addy,phNumber) =>{
    Database.push({
        "firstName": fName,
        "lastName": lName,
        "address": addy,
        "phoneNumber": phNumber,
        "id":idGenerator()
    })
    databaseMethods.saveDatabase(database,"Contacts")
}

