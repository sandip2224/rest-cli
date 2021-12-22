const mongoose = require('mongoose')

const connectDB = async (NODE_ENV) => {
    let conn;
    if(NODE_ENV=='test') conn = await mongoose.connect(process.env.MONGO_TEST_URI)
    else conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB