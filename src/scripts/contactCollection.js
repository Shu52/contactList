// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
const databaseMethods = require("./databaseMethods")
const Database = require("./database")

const collection = () =>{
        const databaseLoad = Database.load("Contacts");
        const databaseSave = Database(database, "Contacts")

}