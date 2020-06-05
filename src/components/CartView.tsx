import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CartConsumer } from '../contexts/cartContext'


interface Params {
    cart: string
}

interface Props extends RouteComponentProps<Params> { }

// Kundvagnsida- Cartpage
function CartView(props: Props) {
    const cart = props.match.params.cart

    return (
        <div>
            <CartConsumer>
                {({ cartList }) => (
                    <div>
                        {cartList.map((product) => {
                            return (
                                <div key={product.id}>
                                    <Link to={"/products/" + product.id}>
                                        <h1>{product.title}</h1>
                                        <p>{product.descreption}</p>
                                        <img src={require("./../assets/" + product.img)} alt="pic" />
                                        <h3>Köp: {product.price} SEK</h3>
                                    </Link>

                                </div >
                            )
                        })}
                    </div>
                )}
            </CartConsumer>
            <div style={container}>
                <h1>
                    Hej Kundvagnsida
            </h1>
                <Link to='/checkout/'>
                    <h1>Go To checkout</h1>
                </Link>
            </div>
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