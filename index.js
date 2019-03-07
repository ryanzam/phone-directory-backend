const express = require('express')
const app = express()

let persons = [
    {
        name : "Arto Hellas",
        number : "040-123456",
        id : 1
    },
    {
        name : "Martti Tienari",
        number : "040-123456",
        id : 2
    },
    {
        name : "Arto Jarvinen",
        number : "040-123456",
        id : 3
    },
    {
        name : "Lea Kutvonen",
        number : "040-123456",
        id : 4
    }
]

//routes
//get person list
app.get('/api/persons', (req, res)=>{
    res.json(persons)
})

//get single person
app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    //if person with id exists, return person
    if(person) {
        res.json(person)
    } //else return 404 status code
    else {
        res.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
