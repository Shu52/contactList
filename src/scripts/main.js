// The user should see the contact form at the top of the view, and the list of contacts underneath it
const contactList = require("./contactList")
const contactForm = require("./contactForm")
const databaseMethods = require("./databaseMethods")
const database = require("./database")

if (databaseMethods.loadDatabase("Contact") === null) {
    console.log(database);
    databaseMethods.saveDatabase(database,"Contacts");
  }

