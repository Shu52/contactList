const database = (firstName,lastName,phoneNumber,address) => {
    const newContact = Object.create(null, {
            "firstName": {
            value: "firstName",
            enumerable: true
        },
            "lastName": {
            value: "lastName",
            enumerable: true
        },
            "phoneNumber":{
            value:1111111111,
            enumerable:true
        },
            "address":{
            value:"address",
            enumerable:true
        }
    })
    }
module.exports = database