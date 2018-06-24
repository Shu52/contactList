// The user should see the contact form at the top of the view, and the list of contacts underneath it
const contactList = require("./contactList")
const contactForm = require("./contactForm")

if (database.load("TaskDatabase") === null) {
    console.log(database);
    database.save(database, "TaskDatabase");
  }

