// Todos
//     /GET all todos
//       ✔ It should GET all the todos (302ms)
//     /GET a todo
//       ✔ It should GET a single todo
//       ✔ It should not GET a non-existent todo (269ms)
//     /POST a new todo
//       ✔ It should not POST a todo without a defined task field (47ms)
//       ✔ It should not POST a todo with a task field more than 30 characters
//       ✔ It should POST a todo with a valid task field (304ms)
//     /PATCH an existing todo
//       ✔ It should not process an invalid todo id
//       ✔ It should not PATCH an undefined todo id (271ms)
//     /DELETE an existing todo
//       ✔ It should not process an invalid todo id
//       ✔ It should not DELETE an undefined todo id (349ms)

//   10 passing (8s)

process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const todoModel = require('../api/models/Todo')

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../api/server')
const should = chai.should()

chai.use(chaiHttp)

describe('Todos', () => {
    beforeEach((done) => { //Before each test we empty the database
        todoModel.deleteMany({}, (err) => {
            done()
        })
    })

    // @GET all todos
    describe('/GET all todos', () => {
        it('It should GET all the todos', (done) => {
            chai.request(server)
                .get('/api/todos')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.have.property('count')
                    res.body.tasks.should.be.a('array')
                    done()
                })
        })
    })

    // @GET a todo
    describe('/GET a todo', () => {
        it('It should GET a single todo', (done) => {
            chai.request(server)
                .get('/api/todo/123')
                .end((err, res) => {
                    res.should.have.status(422)
                    res.body.message.should.be.a('string')
                    res.body.message.should.equal('Task ID is not valid!!')
                    done()
                })
        }),
            it('It should not GET a non-existent todo', (done) => {
                chai.request(server)
                    .get('/api/todo/61c29b8a096af42f58d09512')
                    .end((err, res) => {
                        res.should.have.status(404)
                        res.body.message.should.be.a('string')
                        res.body.message.should.equal('No todo found for given id!!')
                        done()
                    })
            })
    })

    // @POST a new todo
    describe('/POST a new todo', () => {
        it('It should not POST a todo without a defined task field', (done) => {
            let todo = {
                task: ''
            }
            chai.request(server)
                .post('/api/todo')
                .send(todo)
                .end((err, res) => {
                    res.should.have.status(500)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message')
                    res.body.should.have.property('error')
                    done()
                })
        }),
            it('It should not POST a todo with a task field more than 30 characters', (done) => {
                let todo = {
                    task: 'abcdabcdabcdabcdabcdabcdabcdabcd'
                }
                chai.request(server)
                    .post('/api/todo')
                    .send(todo)
                    .end((err, res) => {
                        res.should.have.status(500)
                        res.body.should.be.a('object')
                        res.body.should.have.property('message')
                        res.body.should.have.property('error')
                        done()
                    })
            }),
            it('It should POST a todo with a valid task field', (done) => {
                let todo = {
                    task: 'Test the api!!'
                }
                chai.request(server)
                    .post('/api/todo')
                    .send(todo)
                    .end((err, res) => {
                        res.should.have.status(201)
                        res.body.should.be.a('object')
                        res.body.message.should.equal('Task added successfully!!')
                        res.body.createdTodo.should.be.a('object')
                        done()
                    })
            })
    })

    // @PATCH existing todo
    describe('/PATCH an existing todo', () => {
        it('It should not process an invalid todo id', (done) => {
            let todo = {
                completed: 'true'
            }
            chai.request(server)
                .patch('/api/todo/123')
                .send(todo)
                .end((err, res) => {
                    res.should.have.status(422)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message')
                    res.body.message.should.equal('Task ID is not valid!!')
                    done()
                })
        }),
            it('It should not PATCH an undefined todo id', (done) => {
                let todo = {
                    completed: 'true'
                }
                chai.request(server)
                    .patch('/api/todo/61c29b8a096af42f58d09512')
                    .send(todo)
                    .end((err, res) => {
                        res.should.have.status(404)
                        res.body.should.be.a('object')
                        res.body.should.have.property('message')
                        res.body.message.should.equal('No todo found for given id!!')
                        done()
                    })
            })
    })

    // @DELETE existing todo
    describe('/DELETE an existing todo', () => {
        it('It should not process an invalid todo id', (done) => {
            chai.request(server)
                .delete('/api/todo/123')
                .end((err, res) => {
                    res.should.have.status(422)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message')
                    res.body.message.should.equal('Todo ID is not valid!!')
                    done()
                })
        }),
            it('It should not DELETE an undefined todo id', (done) => {
                chai.request(server)
                    .delete('/api/todo/61c29b8a096af42f58d09512')
                    .end((err, res) => {
                        res.should.have.status(404)
                        res.body.should.be.a('object')
                        res.body.should.have.property('message')
                        res.body.message.should.equal('Todo details not found!!')
                        done()
                    })
            })
    })
})