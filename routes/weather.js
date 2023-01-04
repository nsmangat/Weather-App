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
    // const username = 'test2'
    // const password = 'password2'
    const user = await User.findOne({username: req.body.username, password: req.body.password})
    console.log(user)
    //console.log(user.length)
    if (user != null) {
        console.log("User exists")
        res.status(201).json({message: 'exists'})
    }
    else {
        console.log('User does not exist')
        res.status(201).json({message: 'does not exist'})

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

// router.post('/', async (req, res) => {
//     const location = req.body.city
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHER_API_KEY}&units=metric`
//     const response = await axios(url)
//     console.log(response.data)
//     res.json(response.data)
// })


router.post('/form', (req, res) => {
    console.log(req.body)
    console.log('called')
})

module.exports = router