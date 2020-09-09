import * as express from 'express'

const router = express.Router()

router.get('/api/', (req, res) => {
    res.json('Hello')
})

router.post('/api/stripe-session', async (req, res) => {
    try {

    } catch (error) {
        console.error(error)
    }
})

export default router