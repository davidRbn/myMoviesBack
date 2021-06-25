const express = require('express');
const app = express()
const apiRouter = require('./apiRouter').router
const mysql = require('mysql');
const models = require('./models')
// let port = process.env.PORT


//  if (port === null || port === "" || port === undefined) {
//      port = 8000;
//    }


app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/',(req,res) =>{
    res.setHeader('Content-Type','text/html')
    res.status(200).send('<h1>Hello world</h1>')
})

app.use('/api/',apiRouter)

////////////////////////////////






///////////////////////////////

// app.listen(8080,() => {
//     console.log('Server en ecoute')
// })

models
    .sequelize
    .sync()
    .then(app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running')
    }))

    const connection = mysql.createConnection(process.env.JAWSDB_URL);


connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});


    connection.end();

