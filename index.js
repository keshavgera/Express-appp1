const express = require('express')
const coursesRouter = require('./routes/courses')
const bodyParser = require('body-parser')

require("dotenv").config();

const app = express()


const mongoose = require('mongoose')
const url = 'mongodb://localhost/mydatabase'

const port = 3009

app.use(bodyParser.json())
app.use("/api/v1/courses", coursesRouter)

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})