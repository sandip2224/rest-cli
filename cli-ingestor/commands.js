const program = require('commander')
const chalk = require('chalk')
const { prompt } = require('inquirer')

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
    .description('🚀 GET a specific todo from database')
    .option('--id <type>', 'Enter todo id')
    .action(async (options) => {
        console.log(options)
    })

program
    .command('post')
    .description('🚀 CREATE a new todo')
    .option('--task <type>', 'Enter task description')
    .action(async (options) => {
        console.log(options)
    })

program
    .command('patch')
    .description('🚀 UPDATE an existing todo')
    .option('--task <type>', 'Enter task description')
    .action(async (options) => {
        console.log(options)
    })

program.parse()