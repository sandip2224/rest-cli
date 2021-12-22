const program = require('commander')
const chalk = require('chalk')
const { prompt } = require('inquirer')

const { getTodoQ, postTodoQ, updateTodoQ, deleteTodoQ } = require('../cli-ingestor/utils/QA')
const { getTodo } = require('./app')

program
    .version('1.0.0')
    .alias('v')
    .description('>> REST-API Ingestor <<')

program
    .command('getAll')
    .alias('gA')
    .description('🚩 GET all todos from database')
    .action(async () => {

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
    .command('post')
    .description('🚀 CREATE a new todo')
    .option('--task <type>', 'Enter task description')
    .action(async (options) => {
    })

program
    .command('patch')
    .description('🚀 UPDATE an existing todo')
    .option('--task <type>', 'Enter task description')
    .action(async (options) => {
        console.log(options)
    })

program.parse()