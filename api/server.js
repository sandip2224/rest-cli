const express = require("express")
const colors = require("colors")
const cors = require('cors')
require("dotenv").config({ path: "./.env" })

const connectDB = require('./config/db')
const app = express()

// Connect to database
connectDB(process.env.NODE_ENV)

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Mounting routes
app.use('/api', require('./routes/todoRoute'))

app.get('/', (req, res) => {
    res.json({ message: 'CORS-enabled API up and running!!' })
})

const server = app.listen(process.env.PORT || 3000, console.log(`API running on port ${process.env.PORT || 3000}`.green.bold))

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
})

module.exports = server