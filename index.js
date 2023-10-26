// modules and globals
require('dotenv').config()
const express = require('express')
const app = express()

// express setting
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// controllers&routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

// * = all - no more code after this (except for listen)
app.get('*', (req, res) => {
    res.render('error404')
})

// listen for connection
app.listen(process.env.PORT)