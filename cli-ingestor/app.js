#!/usr/bin/env node

const mongoose = require('mongoose')
const chalk = require('chalk')
const axios = require('axios')

require('dotenv').config({ path: './.env' })
const todoModel = require('../api/models/Todo')

const getTodo = async (args) => {
    let url = "http://localhost:3000/api/todo/" + args.id
    try {
        const res = await axios.get(url)
        console.log("Response: " + res.response.body)
    }
    catch (err) {
        console.log("ERROR")
        console.log(err.response.data)
    }
}

module.exports = {
    getTodo
}