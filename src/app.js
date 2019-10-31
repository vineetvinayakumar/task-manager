const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const dotenv = require('dotenv');


const app = express()
// const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app

