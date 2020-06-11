import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Card, Label, MenuItem, Menu, FormGroup, InputGroup, RadioGroup, Radio, Checkbox } from "@blueprintjs/core"
import { CartConsumer, ContextState } from '../context/cartContext'
import InfoForm from './checkout-components/FormInfo'
import DeliveryMethod from '../components/checkout-components/Delivery'


interface Params {
    checkout: string
}

interface Props extends RouteComponentProps<Params> { }

// Utcheckningsida
export default class CheckoutView extends React.Component<Props> {
    constructor(props: Props) {
        super(props)

        const checkout = props.match.params.checkout
        /* this.state = {
            setPrice: ""
        } */
    }


    render() {
        return (

            <div style={checkoutStyle} className="pt-card pt-elevation-0">

                <div style={cardStyle}>
                    <h2>Summary of your order:</h2>
                    <CartConsumer>
                        {(contextData: ContextState) => {
                            let totalPrice = 0;
                            let pricePerItem = 0;

                            return (
                                <div>
                                    {
                                        contextData.cartItems.length ?

                                            contextData.cartItems.map((cartItem, index: number) => {
                                                totalPrice = totalPrice + cartItem.product.price * cartItem.quantity;
                                                pricePerItem = cartItem.product.price * cartItem.quantity;
                                                return (
                                                    <div style={summary} key={cartItem.product.id}>
                                                        <h3>{cartItem.product.title}</h3>
                                                        <p>Antal: x{cartItem.quantity}</p>
                                                        <p>{pricePerItem} SEK</p>
                                                    </div>
                                                )
                                            })
                                            :
                                            <p>No items in cart...</p>
                                    }
                                    <h3 style={{ textAlign: 'center', padding: '10px', backgroundColor: '#212121', color: 'white' }}>Total: {totalPrice} SEK</h3>
                                </div>

                            )
                        }}
                    </CartConsumer>

                </div>



                <div style={cardStyle}>
                    <h2>Your Info</h2>
                    <div style={{ fontSize: '12px' }}>Fields with * must be filled.</div>
                    <br />
                    <InfoForm></InfoForm>
                </div>

                <div style={cardStyle}>
                    <h2>Delivery</h2>
                    <DeliveryMethod></DeliveryMethod>


                </div>

                <div style={cardStyle}>
                    <h2>Payment</h2>

                    <Menu>
                        <MenuItem text="chouse your method">
                            <MenuItem text="Visa Card" />
                            <MenuItem text="Swish" />
                            <MenuItem text="PayPal" />
                        </MenuItem>
                    </Menu>
                    <br />
                    <Button>Order confirmation</Button>
                </div>
                <div id="contain-all" style={{ textAlign: 'right', minWidth: '100%', padding: '2%' }}>
                    <b>Total price including sales tax and shipping: </b>
                    <div id="price-inkl">HERE THE PRICE + DELIVERY</div>
                    <Button onClick={confirmOrder}>Confirm your order</Button>
                </div>
            </div>
        )
    }
};

function confirmOrder() {
    if (window.confirm('Are you sure you are done?')) {
        window.location.reload(true);
    }
}

const checkoutStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center",

}


export const cardStyle: React.CSSProperties = {
    maxWidth: "60%",
    minWidth: "300px",
    flex: "1",
    margin: "0.2px",
    padding: '8px',
    border: '1px solid #487cc5'
}

const summary: React.CSSProperties = {
    textAlign: 'center'

}
