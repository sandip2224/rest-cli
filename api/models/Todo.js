const mongoose = require('mongoose')

// Create item schema
const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true,
        maxLength: [30, 'Please restrict task length to 30 characters']
    },
    completed:{
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
)

module.exports = mongoose.model('todoModel', todoSchema)