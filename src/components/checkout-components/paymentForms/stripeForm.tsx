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
    showVisaForm: boolean
    title: string
    amount: number
    quantity: number
}

export default class StripeForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showVisaForm: true,
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

    visaPayment = (prodTitle: string, prodPrice: number, prodQuant: number) => {

        this.proceedToCheckout({
            line_items: [
                {
                    description: prodTitle,
                    price_data: {
                        currency: "sek",
                        product_data: {
                            name: "Din beställning"
                        },
                        unit_amount: prodPrice * 100
                    },
                    quantity: prodQuant
                },
            ],
            mode: "payment"
        })
    }

    render() {

        return (
            <CartConsumer>
                {(contextData: ContextState) => {
                    return (

                        <div>
                            {
                                this.state.showVisaForm ?
                                    contextData.cartItems.length ?
                                        contextData.cartItems.map((cartItem, index: number) => {

                                            let prodTitle = cartItem.product.title
                                            let prodPrice = cartItem.product.price
                                            let prodQuant = cartItem.quantity

                                            return (
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} key={cartItem.product.id}>
                                                    <h5>{cartItem.product.id}# Order</h5>
                                                    <h4>{prodTitle}</h4>
                                                    <button style={buttonStyle} onClick={(e) => this.visaPayment(prodTitle, prodPrice, prodQuant)}>Pay</button>
                                                </div>
                                            )
                                        })
                                        :
                                        <p>No items in cart...</p>
                                    : null
                            }
                            <img style={{ maxWidth: '75%', display: "flex", justifyContent: "center", margin: "auto" }}
                                src={require("./assets/visa.png")} alt="Visa" />
                        </div>
                    )

                }}
            </CartConsumer>
        )
    }
}

const buttonStyle: React.CSSProperties = {
    width: '25%',
    border: '1px, grey'
}