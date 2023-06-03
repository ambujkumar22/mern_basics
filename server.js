require('dotenv').config()

// invoke required express
const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware for getting req.body in proper format
app.use(express.json())

//middleware
// app.use((req,res,next) => {
//     console.log(req.path, req.method);
//     next()
// })

// middleware for routes
app.use('/api/workouts',workoutRoutes);

// GET request example
// app.get('/',(req, res) => {
//     res.json({message:'This is a running example for nodejs GET request'})
// });

mongoose.connect(process.env.MONGODB)
    .then(() => {
        //listen for 4000 port
        app.listen(process.env.PORT, () => {
            console.log(`Connected to MONGODB & listinging to port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
