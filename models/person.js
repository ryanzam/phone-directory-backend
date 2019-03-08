const mongoose = require("mongoose")
const url = "mongodb+srv://admin:<password>@persondatabase-9onky.mongodb.net/test?retryWrites=true"

//mongoose
mongoose.connect(url, { useNewUrlParser: true })

const Person = mongoose.model('Person', {
    name: String,
    number: String
})

module.exports = Person
