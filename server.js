const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY

const express = require('express')
const app = express()


app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(3000, () => {
    console.log('The server has started')
})