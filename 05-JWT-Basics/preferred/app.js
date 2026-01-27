require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const mainRouter = require('./routes/main')


app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI)
    app.listen(3000, () => console.log(`Server is listening port 3000...`))
  } catch (error) {
    console.log(error)
  }
}

start()