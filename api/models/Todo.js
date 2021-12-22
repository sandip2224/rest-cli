const mongoose = require('mongoose')

// Create item schema
const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Please enter a valid task'],
        trim: true,
        maxLength: [30, 'Please restrict task length to less than 30 characters']
    },
    completed:{
        type: Boolean,
        default: false
    }
},{ timestamps: true }
)

module.exports = mongoose.model('todoModel', todoSchema)