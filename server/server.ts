
/* import * as path from 'path' */
/* import apiRouter from './routes' */

const express = require('express')
require('dotenv').config('.env')

const app = express()

/* let publicPath = path.join(__dirname, './public/index.html') */

app.use(express.static('public'))
app.use('/checkout', express.json())
/* app.use(apiRouter) */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

app.post('/checkout/checkout-session', async (req, res) => {
    console.log(req.body)
    try {
        const confirm = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: req.body.line.items,
            mode: req.body.mode,
            success_url: 'http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:3000/'
        })

        res.json({ id: confirm.id })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})