#!/usr/bin/env node

const mongoose = require('mongoose')
const chalk = require('chalk')
const axios = require('axios')

require('dotenv').config({ path: './.env' })
const todoModel = require('../api/models/Todo')

const getTodos = async () => {
    let url = "https://todoapi64.herokuapp.com/api/todos"
    try {
        const res = await axios.get(url)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response.data)
    }
}

const getTodo = async (args) => {
    let url = "https://todoapi64.herokuapp.com/api/todo/" + args.id
    try {
        const res = await axios.get(url)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response.data)
    }
}

module.exports = {
    getTodos, getTodo
}