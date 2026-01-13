const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
 require ('dotenv').config()
 //middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
   //get.get('api/v1/tasks')
   //get.post('api/v1/tasks')
   //get.get('api/v1/tasks/:id')
   //get.patch('api/v1/tasks/:id')
   //get.delete('api/v1/tasks/:id')

  
const start = async () => {
  try {
        await connectDB(process.env.MONGO_URI)
  
    app.listen(3000, () => 
      console.log(`Server is listening on port 3000...`)
  )
  } catch (error) {
    console.log('There was an error starting the app.')
    console.log(error)
  }
}
   
     start()
