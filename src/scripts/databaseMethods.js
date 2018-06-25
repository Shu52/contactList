const databaseMethods = Object.create({},{
    saveDatabase:{
        value: function (databaseObject, localStorageKey){
        const stringifiedDatabase = JSON.stringify(databaseObject)
        localStorage.setItem(localStorageKey, stringifiedDatabase)
}},
    loadDatabase:{
        value:function (localStorageKey) {
        const databaseString = localStorage.getItem(localStorageKey)
        return JSON.parse(databaseString)
}

    }
})
    module.exports = databaseMethods