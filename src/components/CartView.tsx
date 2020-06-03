import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

interface Params {
    cart: string
}

interface Props extends RouteComponentProps<Params> { }

// Kundvagnsida- Cartpage
function CartView(props: Props) {
    const cart = props.match.params.cart

    return (
        <div style={container}>
            <h1>Hej Kundvagnsida</h1>
            <Link to='/checkout/'>
                <h1>Go To checkout</h1>
            </Link>
        </div>
    )
};

export default CartView

const container: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    flexDirection: "column",
    position: "fixed",
    height: '100%',
}