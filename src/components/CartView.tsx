import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CartConsumer, ContextState } from '../context/cartContext'
import { productsContainer, productCards, poster, TitleLink } from '../css'
import { Button } from '@blueprintjs/core'

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

                                contextData.cartList.map((product, index: number) => {
                                    return (
                                        <div style={productCards}>
                                            <h3 style={TitleLink}>{product.title}</h3>
                                            <img src={require("./../assets/" + product.img)} alt="pic" style={poster} />
                                            <h3>{product.price} SEK</h3>
                                            <Button onClick={() => contextData.deletefromcart(product, index)}>Delete from cart</Button>
                                            <h3>Antal (Add more)</h3>
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

const cartTitle: React.CSSProperties = {
    textAlign: 'center'
}

const cartContainer: React.CSSProperties = {
    width: '100%',
    height: 'auto',


}

const singleCartItem: React.CSSProperties = {
    width: '100%',
    height: '20%',
    display: 'flex',
    border: 'grey solid 1px',
    flexWrap: 'wrap'
}

const posterInCart: React.CSSProperties = {
    order: 'initial'
}

const childrenFlex: React.CSSProperties = {
    padding: '2%',
    margin: '2%',
    width: '200px'
}