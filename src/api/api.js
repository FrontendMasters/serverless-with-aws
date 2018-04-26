const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({message: 'ok'})
})

app.get('/todos', (req, res) => {
  const todos = [
    {id: 1, name: 'clean up', status: 'open'},
    {id: 1, name: 'cook', status: 'done'}
  ]
  res.json({data: todos})
})


app.get('/todos/:todo', (req, res) => {
  res.json({id: 1, name: 'clean up', status: 'open'})
})

module.exports = app
