const express = require('express')

// Controllers
const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require('../controllers/todos.controller')

const router = express.Router()

router.route('/')
  .get(getAllTodos)
  .post(createTodo)

router.route('/:id')
  .get(getTodoById)
  .patch(updateTodo)
  .delete(deleteTodo)


module.exports = { todosRouter: router }