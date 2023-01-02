require('dotenv').config()
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY

const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req,res) => {

})

app.post('/', async (req, res) => {
    console.log(req.body)
    const location = req.body.city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}&units=metric`
    const response = await axios(url)
    console.log(response.data)
    res.json(response.data)
})

app.post('/form', (req, res) => {
    console.log(req.body)
    console.log('called')
})

app.listen(3000, () => {
    console.log('The server has started')
})