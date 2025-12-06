// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitterANDListener = new EventEmitter()
  
// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitterANDListener.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
     console.log('I am customListener')
})

customEmitterANDListener.emit('response','john', 34, console.log('I am coustomEmitter'))  
