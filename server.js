require('dotenv').config()
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY

const express = require('express')
const bodyParser = require('body-parser')
//const axios = require('axios')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) =>console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

const weatherAppRouter = require('./routes/weather')
app.use('/weather', weatherAppRouter)


// app.get('/', (req,res) => {

// })


// app.post('/', async (req, res) => {
//     const user = new weatherAppSchema({
//         username: 'test',
//         password: 'password',
//         city: 'Waterloo'
//     })
//     try {
//         const newUser = await user.save()
//         res.status(201).json(newUser)
//     } catch (err) {
//         res.status(400).json({message: err.message})
//     }
// })

// app.post('/form', (req, res) => {
//     console.log(req.body)
//     console.log('called')
// })

app.listen(process.env.PORT, () => {
    console.log('The server has started')
})