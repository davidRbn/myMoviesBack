const express = require('express');
const app = express()
const apiRouter = require('./apiRouter').router



app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/',(req,res) =>{
    res.setHeader('Content-Type','text/html')
    res.status(200).send('<h1>Hello world</h1>')
})

app.use('/api/',apiRouter)

app.listen(8080,() => {
    console.log('Server en ecoute')
})

