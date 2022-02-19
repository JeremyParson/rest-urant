// configure environment variables
require('dotenv').config()
// setup express
const express = require('express')
const app = express()

// use places router for all /places visits
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page Not Found</h1>')
}) 

app.listen(process.env.PORT)