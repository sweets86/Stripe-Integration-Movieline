import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

interface Params {
    confirm: string
}

interface State {
    orderSuccess: boolean
    showSuccess: boolean
    showOrder: boolean
    orderNr: string
    amount: number
}

interface Props extends RouteComponentProps<Params> {

}

/* const confirm = props.match.params.confirm */

export default class Confirmation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            orderSuccess: false,
            showSuccess: false,
            showOrder: false,
            orderNr: "",
            amount: parseInt("")
        }
/*         this.verifyCheckout = this.verifyCheckout.bind(this) */

    }

    async componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search)
        const sessionId = urlParams.get('session_id')
        try {
            if (sessionId) {
                const response = await fetch('/api/verify-checkout-session', {
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                    body: JSON.stringify({ sessionId })
                })
                const session = await response.json()

                if (session.isVerified) {
                        this.setState({ showSuccess: true })
                        this.makeOrderRequest()
                } else {
                    alert('Du måste genomföra betalningen innan din order kan skickas.')
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    async makeOrderRequest() {
        try {
            const response = await fetch('/api', {
                headers: { "Content-Type": "application/json" },
                method: "GET",
            })
            console.log(response)
            const order = await response.json()
            console.log(order)
            return order.map((orderItem: any) => {
                let nr = orderItem.payment_intent
                console.log(nr)
                let am = orderItem.amount_subtotal / 100
                console.log(am)

                this.setState({ orderNr: nr })
                this.setState({ amount: am })
                this.setState({ showOrder: true })
            })

        } catch (err) {
            console.log(err)
        }
    }

/*     orderInfo = () => {
        this.makeOrderRequest()
    } */

    render() {
        return (
            <div style={{ paddingLeft: "2em" }}>

                {

                    this.state.showSuccess ?
                        <div>
                            <h1>Thanks for your order!</h1>
                            <p>
                                We appreciate your business!
                                If you have any questions, please email
            <Link to="mailto:orders@example.com">orders@example.com</Link>.
          </p>
                            {/* <button onClick={this.orderInfo}>Order</button> */}
                        </div>
                        : null
                }
                {
                    this.state.showOrder ?
                        <div>
                            <h3>Ditt orderbekräftelse nummer: {this.state.orderNr}</h3>
                            <h3>Betalt: {this.state.amount} SEK</h3>
                        </div>
                        : null
                }

            </div>
        )
    }
}

