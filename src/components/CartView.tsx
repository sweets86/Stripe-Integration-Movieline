import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CartConsumer, ContextState } from '../context/cartContext'
import { productsContainer, productCards, poster, TitleLink } from '../css'

interface Params {
    cart: string
}

interface Props extends RouteComponentProps<Params> { }

// Kundvagnsida- Cartpage
function CartView(props: Props) {
    const cart = props.match.params.cart

    return (
        <CartConsumer>
            {(contextData: ContextState) => {
                return (
                    <div style={productsContainer}>
                        <h1>Cart</h1>
                        {
                            contextData.cartList.length ?

                                contextData.cartList.map((product) => {
                                    return (
                                        <div style={productCards}>
                                            <h3 style={TitleLink}>{product.title}</h3>
                                            <img src={require("./../assets/" + product.img)} alt="pic" style={poster} />
                                            <h3>{product.price} SEK</h3>
                                            <h3>Antal (Remove/Add more)</h3>
                                        </div>
                                    )
                                })
                                :
                                <h4>No items in cart...</h4>
                        }
                        <h3>Total Pris</h3>
                        <Link to='/checkout/'>
                            <h1>Go To checkout</h1>
                        </Link>
                    </div>
                )
            }}
        </CartConsumer>
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