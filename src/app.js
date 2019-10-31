const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const dotenv = require('dotenv');
dotenv.config({
    path: 'config/dev.env'
});
require('./db/mongoose')

const app = express()
// const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app

