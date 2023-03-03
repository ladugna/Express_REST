

// 1. dependencies
//const fs= require('fs');
//const path= require('path');

const express= require('express');
const morgan = require('morgan');
//const favicon = require('serve-favicon')

const intercept= require('./middlewares/intercept')
const mealsRouter=require("./router/mealsRouter")
//const ingredientsRouter= require("./router/ingredientsRouter")

//2. init
const app= express();
//eman
//3. setup = configure app settings
app.disable('x-powered-by')

//4. middleware
app.use(morgan('dev'))
//app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')))
app.use(express.json())     //if there is json body, parse it.  it is generalizing

// 5. routing
app.use('/meals', mealsRouter )
//app.use('/ingredients', ingredientsRouter)
// app.use('/users', booksRouter)
// app.use('/payments', booksRouter)
app.all('*', (req, res, next) => {
    next(new Error('No route found'))
})
//6. error handle
app.use((error, req, res, next) => {
    // send SMS to admin
    next(error)
})
app.use((error, req, res, next) => {
    // Log the error in DB
    next(error)
})
app.use((error, req, res, next) => {
    res.status(500).json({ success: false, data: error.message })
})

// 7. bootstrap
app.listen(400, ()=>
    console.log('listening on 4000')
)