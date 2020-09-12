import React from 'react'
import { CartConsumer, ContextState } from '../../../context/cartContext'
import { loadStripe } from '@stripe/stripe-js'

interface Props {
    form: (form: any) => void
    showSwishForm: boolean
    showPaypalForm: boolean
    showInfo: any
}

interface State {
    title: string
    amount: number
    quantity: number
}


export default class StripeForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            title: "",
            amount: parseInt(""),
            quantity: parseInt("")
        }
    }

    async proceedToCheckout(body: any) {
        const PUBLIC_KEY = 'pk_test_8asbHZHZoVp2kblhfCEUUGIr006fit3Srr'
        const stripePromise = loadStripe(PUBLIC_KEY)

        try {
            console.log("Starting...")
            const response = await fetch('/api/checkout-session', {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify(body)
            })

            const session = await response.json()
            console.log(session.id)
            const stripe = await stripePromise
            const result = await stripe?.redirectToCheckout({ sessionId: session.id })
            console.log(result)

        } catch (err) {
            console.log(err)
        }
    }

    visaPayment = () => {

        this.proceedToCheckout({
            line_items: [
                {
                    price_data: {
                        currency: "sek",
                        product_data: {
                            name:" this"
                        },
                        unit_amount: 200000
                    },
                    quantity: 2
                },
            ],
            mode: "payment"
        })
    }

    handleClick = (prodTitle: string, prodPrice: number, prodQuant: number) => {
        console.log(prodTitle)
    }

    render() {
        return (
            <CartConsumer>
                {(contexData: ContextState) => {
                    return (
                        contexData.cartItems.map((cartItem, index: number) => {
                            let prodTitle = cartItem.product.title
                            let prodPrice = cartItem.product.price
                            let prodQuant = cartItem.quantity
                            return (
                                <div>
                                    <button onClick={(e) => this.handleClick(prodTitle, prodPrice, prodQuant)}>Click</button>
                                </div>
                            )
                        })
                    )
                }}
            </CartConsumer>
        )
    }
}