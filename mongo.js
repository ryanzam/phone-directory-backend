const mongoose = require("mongoose")
const url = "mongodb+srv://admin:<password>@persondatabase-9onky.mongodb.net/test?retryWrites=true"

mongoose.connect(url, { useNewUrlParser: true })



const Person = mongoose.model('Person', {
    name: String,
    number: String
})

if (process.argv.length > 2) {
    const person = new Person ({
        name : process.argv[2],
        number : process.argv[3]
    })
    
    person
        .save()
        .then(result => {
            console.log("person saved!")
            mongoose.connection.close()
    }) 
} else {

    Person
    .find({})
    .then(result => {
        console.log("Puhelinluettelo:")
        result.forEach(person => {
            console.log(person.name + " "+ person.number)
        })
        mongoose.connection.close()
    })
}

