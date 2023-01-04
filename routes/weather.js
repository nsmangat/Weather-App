const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY

const express = require('express')
const {Model, model} = require('mongoose')
const router = express.Router()
const User = require('../models/user')

const axios = require('axios')


router.get('/', (req,res) => {

})




router.post('/', async (req, res) => {
    // console.log('posting')
    // const user = new User({
    //     username: 'test3',
    //     password: 'password3',
    //     city: req.body.city
    // })
    // try {
    //     const newUser = await user.save()
    //     res.status(201).json(newUser)
    // } catch (err) {
    //     res.status(400).json({message: err.message})
    // }
})

router.post('/login', async (req, res) => {

    const user = await User.findOne({username: req.body.username, password: req.body.password})
    if (user != null) {
        console.log("User exists")
        const location = user.city
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}&units=metric`
        const response = await axios(url)
        const {data: weatherData} = response
        // const temperature = weatherData.main.temp
        // const precipitation = weatherData.weather[0].main
        // const windSpeed = weatherData.wind.windSpeed
        const sendWeatherData = {temperature: weatherData.main.temp, precipitation: weatherData.weather[0].main, windSpeed: weatherData.wind.speed, city: user.city, user: user.username}
        //JSON.stringify(sendWeatherData)
        console.log(sendWeatherData)
        //can make user data being sent more specific
        res.status(201).json({sendWeatherData})
    }
    else {
        console.log('User does not exist')
        res.status(400).json({message: err.message})

    }
})

router.post('/register', async (req, res) => {
    console.log('posting')
    const user = new User({
        username: 'test2',
        password: 'password2',
        city: 'test city'
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.post('/newcity', async (req, res) => {
    console.log('adjusting for new city')
    const user = new User({
        username: 'test2',
        password: 'password2',
        city: 'test city'
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

module.exports = router