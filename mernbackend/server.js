const fileuploader = require('express-fileupload')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

//dotenv is used so that we dont show our username/password here (credentials of the super user)
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

// the next line is to activate body passer in our app
app.use(express.json())
app.use(cors())
app.use(fileuploader())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running"))