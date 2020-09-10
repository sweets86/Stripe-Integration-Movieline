import * as express from 'express'

const router = express.Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

router.post('/checkout/checkout-session', async (req, res) => {
    console.log(req.body)
    try {
        const confirm = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: req.body.line.items,
            mode: req.body.mode,
            success_url: 'http://localhost:3000/checkout?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:3000/'
        })

        res.json({ id: confirm.id })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
})

export default router