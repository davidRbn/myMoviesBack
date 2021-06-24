const express = require('express');
const app = express()
const apiRouter = require('./apiRouter').router
require('dotenv').config();



app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.connect({
    host: process.env.DB_HOST,
   username: process.env.DB_USER,
    password: process.env.DB_PASS
})


app.get('/',(req,res) =>{
    res.setHeader('Content-Type','text/html')
    res.status(200).send('<h1>Hello world</h1>')
})

app.use('/api/',apiRouter)

app.listen(8080,() => {
    console.log('Server en ecoute')
})

