const express = require('express')
const mongoose=require('mongoose')
const router = express.Router()

const todoModel=require('../models/Todo')

router.get('/todos', async (req, res)=>{
    try {
        const todos = await todoModel.find()
        res.status(200).json({
            count: todos.length,
            tasks: todos.map(todo => {
                return {
                    todoId: todo._id,
                    task: todo.task,
                    completed: todo.completed,
                    createdAt: todo.createdAt,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/api/todo/' + todo._id
                    }
                }
            })
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Unexpected error occurred!!',
            error: err
        })
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
            todoId: todo._id,
            task: todo.task,
            completed: todo.completed,
            createdAt: todo.createdAt,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/api/todo/' + todo._id
            }
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Unexpected error occurred!!',
            error: err
        })
    }
})

router.post('/todo', async (req, res)=>{
    try {
        const newTodo = new todoModel({
            task: req.body.task
        })
        const doc=await newTodo.save()
        res.status(201).json({
            message: 'Task added successfully!!',
            createdTodo: {
                todoId: doc._id,
                task: doc.task,
                completed: doc.completed,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/api/todo/' + doc._id
                }
            }
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Unexpected error occurred!!',
            error: err
        })
    }
})

router.patch('/todo/:id', async (req, res)=>{
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

        const updatedTodo = await todoModel.updateOne({ _id: id }, req.body)
        res.status(200).json({
            message: 'Todo details updated successfully!!',
            request: {
                type: 'GET',
                url: 'http://localhost:3000/api/todo/' + id
            }
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Unexpected error occurred!!',
            error: err
        })
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
                    task: "String"
                }
            }
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Unexpected error occurred!!',
            error: err
        })
    }
})

module.exports = router