const getTodoQ = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter task id:'
    }
]

const postTodoQ = [
    {
        type: 'input',
        name: 'task',
        message: 'Enter task:'
    }
]

const updateTodoQ = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter task id:'
    },
    {
        type: 'input',
        name: 'completed',
        message: 'Enter completion status (true/false):',
        default: 'false'
    }
]

const deleteTodoQ = getTodoQ

module.exports = {
    getTodoQ, postTodoQ, updateTodoQ, deleteTodoQ
}