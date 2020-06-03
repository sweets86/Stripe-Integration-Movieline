import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import DetailCheckoutView from './DetailCheckoutView'

interface Params {
    checkout: string
}

interface Props extends RouteComponentProps<Params> { }

// Utcheckningsida
export default class CheckoutView extends React.Component<Props> {
    constructor(props: Props) {
        super(props)

        const checkout = props.match.params.checkout
    }

    render() {
        return (
            <div style={container}>
            <h1>Hej checkout</h1>
            <h2>Your Cart</h2>
            <h3>Your Info</h3>
            <h4>Delivery</h4>
            <h5>Payment</h5>
            <p>Will be displayed by CartContext and DetailCheckoutView</p>
            <DetailCheckoutView />
        </div>
        )
    }
};

const container: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    flexDirection: "column",
    position: "fixed",
    height: '100%',
}