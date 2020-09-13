import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

interface Params {
    confirm: string
}

interface State {
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
            showOrder: false,
            orderNr: "",
            amount: parseInt("")
        }
    }

    async makeOrderRequest() {
        try {
            const response = await fetch('/api', {
                headers: { "Content-Type": "application/json" },
                method: "GET",
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            return data.map((dataItem: any) => {
                let nr = dataItem.payment_intent
                console.log(nr)
                let am = dataItem.amount_subtotal / 100
                console.log(am)

                this.setState({ orderNr: nr })
                this.setState({ amount: am })
                this.setState({ showOrder: true })
            })

        } catch (err) {
            console.log(err)
        }
    }

    orderInfo = () => {
        this.makeOrderRequest()
    }

    render() {
        return (
            <div style={{paddingLeft: "2em"}}>
                <h1>Thanks for your order!</h1>
                <p>
                    We appreciate your business!
                    If you have any questions, please email
            <Link to="mailto:orders@example.com">orders@example.com</Link>.
          </p>
                <button onClick={this.orderInfo}>Order</button>
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