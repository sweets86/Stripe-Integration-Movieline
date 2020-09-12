import React from 'react';
import { MenuItem, Menu } from "@blueprintjs/core"
import VisaForm from './paymentForms/visaForm'
import StripeForm from './paymentForms/stripeForm'
import SwishForm from './paymentForms/swishForm'
import PaypalForm from './paymentForms/paypalForm'
import PaymentOrder from './paymentForms/paymentOrder'
import { CartConsumer, ContextState } from '../../context/cartContext'
import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe';
import { useStripe } from '@stripe/react-stripe-js'
import { createWriteStream } from 'fs';


interface State {
    isVisaSelected: boolean
    isSwishSelected: boolean
    isPaypalSelected: boolean
    forms: []
    showMenu: boolean
}

interface Props {
    showVisaForm: boolean
    showSwishForm: boolean
    showPaypalForm: boolean
    showInfo: any
}

export default class Payment extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isVisaSelected: false,
            isSwishSelected: false,
            isPaypalSelected: false,
            forms: [],
            showMenu: true,
        }
    }

    visaHandleClick = () => {
        this.setState({ isVisaSelected: true, isSwishSelected: false, isPaypalSelected: false })
        this.setState({ showMenu: false })
        /* this.goToCheckout()
        this.visaPayment() */
    }

    swishHandleClick = () => {
        this.setState({ isSwishSelected: true, isVisaSelected: false, isPaypalSelected: false })
        this.setState({ showMenu: false })
    }

    paypalHandleClick = () => {
        this.setState({ isPaypalSelected: true, isVisaSelected: false, isSwishSelected: false })
        this.setState({ showMenu: false })
    }

    form = (form: any) => {
        let formToFill = this.state.forms as any
        formToFill.push(form)
        this.setState({
            forms: formToFill
        }, () => {
            console.log(this.state.forms)
        })
    }

/*     async proceedToCheckout(body: any) {
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

    goToCheckout = () => {
        this.proceedToCheckout({
            line_items: [
                {
                    price_data: {
                        currency: "sek",
                        product_data: {
                            name: this.state.title
                        },
                        unit_amount: this.state.amount
                    },
                    quantity: this.state.quantity
                },
            ],
            mode: "payment"
        })
    } */

    render() {
        return (
            <div>
                <h2>Payment</h2>
                {
                    this.state.showMenu ?
                        <Menu id="menu">
                            <h4>Choose your payment method</h4>
                            <MenuItem text="Show alternatives..." shouldDismissPopover={true}>

                                <MenuItem text="Visa Card" onClick={this.visaHandleClick} />
                                <MenuItem text="Swish" onClick={this.swishHandleClick} />
                                <MenuItem text="PayPal" onClick={this.paypalHandleClick} />
                            </MenuItem>
                        </Menu>
                        : null
                }
                <div>
                    {this.state.isVisaSelected && <StripeForm form={this.form} showSwishForm={this.props.showSwishForm} showPaypalForm={this.props.showPaypalForm} showInfo={this.props.showInfo} />}
                    {this.state.isSwishSelected && <SwishForm form={this.form} showVisaForm={this.props.showVisaForm} showPaypalForm={this.props.showPaypalForm} showInfo={this.props.showInfo} />}
                    {this.state.isPaypalSelected && <PaypalForm form={this.form} showVisaForm={this.props.showVisaForm} showSwishForm={this.props.showSwishForm} showInfo={this.props.showInfo} />}
                </div>
                <div>
                    <PaymentOrder forms={this.state.forms} />
                </div>
            </div>
        )
    }
}
