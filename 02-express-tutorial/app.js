const express = require('express')
const app = express()
const people = require('./routes/people')
const cookieParser = require('cookie-parser')
const auth = require('./routes/auth')
const logger = require('./logger')

// Middleware
app.use(logger)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static( './methods-public'))
// Parse cookies from the request 
app.use(cookieParser())
// Routes
app.use('/api/v1/people', people)
app.use('/', auth)
app.use('/logoff', auth)



// Start the server

app.listen(3000,() => {
        console.log(`server is listening on port 3000...`)
})
