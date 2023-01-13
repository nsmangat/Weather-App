const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY

const express = require('express')
const {Model, model} = require('mongoose')
const router = express.Router()
const User = require('../models/user')

const axios = require('axios')
const { json } = require('body-parser')


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
        const username = {username: user.username}

        res.status(201).json(username)
        // const location = user.city
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}&units=metric`
        // const response = await axios(url)
        // const {data: weatherData} = response
        // // const temperature = weatherData.main.temp
        // // const precipitation = weatherData.weather[0].main
        // // const windSpeed = weatherData.wind.windSpeed
        // const sendWeatherData = {temperature: weatherData.main.temp, precipitation: weatherData.weather[0].main, windSpeed: weatherData.wind.speed, city: user.city, username: user.username}
        // //JSON.stringify(sendWeatherData)
        // console.log(sendWeatherData)
        // //can make user data being sent more specific
        // res.status(201).json({sendWeatherData})
    }
    else {
        console.log('User does not exist')
        res.status(400).json({message: err.message})

    }
})

router.post('/newcity', async (req, res) => {
    console.log('adjusting for new city')
    console.log(req.body.city)
    const user = await User.findOne({username: req.body.username})
    console.log(user)
    user.city = req.body.city
    try {
        const updatedUser = await user.save()
        const location = user.city
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}&units=metric`
        const response = await axios(url)
        const {data: weatherData} = response
        const sendWeatherData = {temperature: weatherData.main.temp, precipitation: weatherData.weather[0].main, windSpeed: weatherData.wind.speed, city: user.city, username: user.username}
        console.log(sendWeatherData)
        res.status(201).json({sendWeatherData})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.post('/initialcity', async (req, res) => {
    console.log('get initial city')
    const user = await User.findOne({username: req.body.username})
    try {
        const location = user.city
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}&units=metric`
        const response = await axios(url)
        const {data: weatherData} = response
        const sendWeatherData = {temperature: weatherData.main.temp, precipitation: weatherData.weather[0].main, windSpeed: weatherData.wind.speed, city: user.city}
        console.log(sendWeatherData)
        res.status(201).json({sendWeatherData})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.post('/register', async (req, res) => {
    console.log('register')
    const user = await User.findOne({username: req.body.username})
    if(!user) {
        console.log("register success")
        const user = new User({
        username: req.body.username,
        password: req.body.password,
        city: req.body.city
    })
    try {
        await user.save()
    } catch (err) {
        res.status(400).json({message: err.message})
    }
        const registerStatus = "Account creation successful! Please login with these credentials"
        res.status(201).json({registerStatus})
    }
    else {
        console.log("register fail")
        const registerStatus = "Sorry, that username already exists. Please try again"
        res.status(201).json({registerStatus})
    }
})


//Manual delete so don't have to do it through MongoDB everytime
router.delete('/:accountToDelete', async (req, res) => {
    console.log('Trying delete')
    console.log(req.params.accountToDelete)
    
    try {
        const accountToDelete = await User.findOne({username: req.params.accountToDelete})
        if(accountToDelete) {
            await accountToDelete.remove()
            console.log("User deleted")
        }
    } catch (err) {
        console.log("Error deleting user")
    }
})

module.exports = router