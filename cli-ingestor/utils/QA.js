const getTodo = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter task id:'
    }
]

const postTodo = [
    {
        type: 'input',
        name: 'task',
        message: 'Enter task:'
    }
]

const updateTodo = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter task id:'
    },
    {
        type: 'input',
        name: 'task',
        message: 'Enter completion status (true/false):',
        default: 'false'
    }
]

const deleteTodo = getTodo

module.exports = {
    getTodo, postTodo, updateTodo, deleteTodo
}