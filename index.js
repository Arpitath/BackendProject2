require('dotenv').config()
const express = require('express')
//import express from "express"
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('This is Arpit from Fanclash!')
})

app.get('/twitter', (req, res) => {
    res.send('Arpit from Twitter')
})

app.get('/login' , (req,res) => {
    res.send('<h1>This is Arpit from Login Page <h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
