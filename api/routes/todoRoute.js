const express = require('express')
const router = express.Router()

const errorMsg=(err)=>{
    res.status(500).json({
        message: 'Unexpected error occurred!!',
        error: err
    })
}

const todoModel=require('../models/Todo')

router.get('/todos', async (req, res)=>{
    try {
        const todos = await todoModel.find()
        res.status(200).json({
            count: todos.length,
            todos: todos.map((todo) => {
                return {
                    task: todo.task,
                    completed: todo.completed,
                    todoId: todo._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/api/todo/' + todo._id
                    }
                }
            })
        })
    }
    catch (err) {
        errorMsg(err)
    }
})

router.get('/todo/:id', async (req, res)=>{
    const id = req.params.id
    if (!mongoose.isValidObjectId(id)) {
        return res.status(422).json({
            message: 'Task ID is not valid!!'
        })
    }
    try {
        const todo = await todoModel.findById(id)
        if (!todo) {
            return res.status(404).json({
                message: 'No todo found for given id!!'
            })
        }
        res.status(200).json({
            task: todo.task,
            completed: todo.completed,
            todoId: todo._id,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/api/todo/' + todo._id
            }
        })
    }
    catch (err) {
        errorMsg(err)
    }
})

router.post('/todo', async (req, res)=>{
    try {
        const newTodo = new todoModel({
            task: req.body.task
        })
        const doc = await newTodo.save()
        res.status(201).json({
            message: 'Task added successfully!!',
            createdTodo: {
                task: doc.task,
                completed: doc.completed,
                todoId: doc._id,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/api/todo/' + doc._id
                }
            }
        })
    }
    catch (err) {
        errorMsg(err)
    }
})

router.patch('/todo/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const todo = await todoModel.findById(id)
        if (!todo) {
            return res.status(404).json({
                message: 'No todo found for given id!!'
            })
        }

        // Todo exists, now we try updation
        const updatedTodo = await todoModel.updateOne({ _id: id }, req.body)
        if (updatedUser.modifiedCount === 0) {
            return res.status(200).json({
                message: 'Todo details remain unchanged!!',
                updatedTodo
            })
        }
        res.status(200).json({
            message: 'Todo details updated successfully!!',
            request: {
                type: 'GET',
                url: 'http://localhost:3000/api/v1/users/' + id
            }
        })
    }
    catch (err) {
        errorMsg(err)
    }
})

router.delete('/todo/:id', async (req, res)=>{
    const id = req.params.id
    if (!mongoose.isValidObjectId(id)) {
        return res.status(422).json({
            message: 'Todo ID is not valid!!'
        })
    }
    try {
        const response = await todoModel.deleteOne({ _id: id })
        if (response.deletedCount === 0) {
            return res.status(404).json({
                message: 'Todo details not found!!'
            })
        }
        res.status(200).json({
            message: 'Todo deleted successfully!!',
            request: {
                type: 'POST',
                url: 'http://localhost:3000/api/todo',
                body: {
                    task: String
                }
            }
        })
    }
    catch (err) {
        errorMsg(err)
    }
})

module.exports = router