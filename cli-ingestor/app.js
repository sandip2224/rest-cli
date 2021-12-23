#!/usr/bin/env node

const mongoose = require('mongoose')
const chalk = require('chalk')
const axios = require('axios')

require('dotenv').config({ path: './.env' })
const todoModel = require('../api/models/Todo')

const baseUrl = 'https://todoapi64.herokuapp.com'

const getTodos = async () => {
    let url = `${baseUrl}/api/todos`
    try {
        const res = await axios.get(url)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response.data)
    }
}

const getTodo = async (args) => {
    let url = `${baseUrl}/api/todo/` + args.id
    try {
        const res = await axios.get(url)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response.data)
    }
}

const postTodo = async (args) => {
    let url = `${baseUrl}/api/todo`
    try {
        const res = await axios.post(url, args)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response.data)
    }
}

const updateTodo = async (args) => {
    let url = `${baseUrl}/api/todo/` + args.id
    try {
        const res = await axios.patch(url, args)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response.data)
    }
}

const deleteTodo = async (args) => {
    let url = `${baseUrl}/api/todo/` + args.id
    try {
        const res = await axios.delete(url)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response.data)
    }
}

module.exports = {
    getTodos, getTodo, postTodo, updateTodo, deleteTodo
}