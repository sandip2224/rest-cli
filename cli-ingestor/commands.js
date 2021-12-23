#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const { prompt } = require('inquirer')

const { getTodoQ, postTodoQ, updateTodoQ, deleteTodoQ } = require('../cli-ingestor/utils/QA')
const { getTodos, getTodo, postTodo, updateTodo, deleteTodo } = require('./app')

program
    .version('1.0.0')
    .alias('v')
    .description('>> REST-API Ingestor <<')

program
    .command('getAll')
    .alias('gA')
    .description('🚩 GET all todos from database')
    .action(async () => {
        getTodos()
    })

program
    .command('get')
    .alias('g')
    .description('🚀 GET a specific todo from database')
    .action(async (options) => {
        const res = await prompt(getTodoQ)
        getTodo(res)
    })

program
    .command('create')
    .alias('c')
    .description('🚀 CREATE a new todo')
    .action(async (options) => {
        const res = await prompt(postTodoQ)
        postTodo(res)
    })

program
    .command('update')
    .alias('u')
    .description('🚀 UPDATE an existing todo')
    .action(async (options) => {
        const res = await prompt(updateTodoQ)
        updateTodo(res)
    })

program
    .command('delete')
    .alias('d')
    .description('🚀 DELETE an existing todo')
    .action(async (options) => {
        const res = await prompt(deleteTodoQ)
        deleteTodo(res)
    })

program.parse()