
import * as path from 'path'
import apiRouter from './routes'

const express = require('express')
require('dotenv').config('.env')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()

let thisPath = path.join(__dirname, '../public')

app.use(express.static(thisPath))
app.use('/api', express.json())
app.use(apiRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})