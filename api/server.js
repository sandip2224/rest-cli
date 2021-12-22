const express = require("express")
const colors = require("colors")
require("dotenv").config({ path: "./.env" })

const connectDB = require('./config/db')
const app = express()

// Connect to database
connectDB()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Mounting routes
app.use('/api', require('./routes/todoRoute'))

const server = app.listen(process.env.PORT || 3000, console.log(`API running on port ${process.env.PORT || 3000}`.green.bold))

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
})