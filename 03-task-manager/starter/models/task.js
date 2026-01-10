const mongoose = require('mongoose')
const schema = {
        name: String,
        completed: Boolean,
}
const TaskSchema = mongoose.Schema(schema)
module.exports = mongoose.model('Task', TaskSchema)