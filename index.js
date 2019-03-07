const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

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
app.get('/', (req, res) => {
    res.send('<h1>Hello Universe!</h1>')
  })

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

//create new person
const randomID = () => {
    let id = Math.floor(Math.random()*1000)
    return id
}
app.post('/api/persons', (req, res) => {
    const body = req.body

    if(body.name === undefined || body.number === undefined) {
        return res.status(400).json({error : "name or number missing"})
    } else if (persons.map(p=>p.name).includes(body.name)){
        return res.status(400).json({error: "name must be unique"})
    } else {
        const person = {
            name : body.name,
            number : body.number,
            id : randomID()
        }
        persons = persons.concat(person)
        res.json(person)
    }



    
})

//delete person
app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.json(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
