import React from 'react'
import { CartConsumer, ContextState } from '../../../context/cartContext'

interface Props {
    form: (form: any) => void
    showSwishForm: boolean
    showPaypalForm: boolean
    showInfo: any
}

interface State {}


export default class StripeForm extends React.Component<Props, State> {
    
    async proceedToCheckout(body: any) {

        let stripe
        stripe = Stripe('pk_test_8asbHZHZoVp2kblhfCEUUGIr006fit3Srr')

        try  {
            console.log("Starting...")
            const response = await fetch('/api/checkout-session', {
                headers: { "Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify(body)
            })

            const confirm = await response.json()
            console.log(confirm.id)
            const result = await stripe.redirectToCheckout({sessionId: confirm.id})

        } catch (err) {
            console.log(err)
        }
    }

    visaPayment = () => {
        /* this.proceedToCheckout({
            line_items: [
                {
                    title: "Summary of your order",
                    price_data: {
                        currency: "sek",
                        product_data: {
                            name: ""
                        },
                        unit_amount: ""
                    },
                    quantity: ""
                },
            ],
            mode: "payment"
        }) */
        console.log("heej")
    }

    render () {
        return (
            <CartConsumer>
                {(contexData: ContextState) => {
                    return (
                        <div onClick={this.visaPayment}></div>
                    )
                }}

            </CartConsumer>
        )
    }
}