import React from 'react'
import CartView from './CartView'
import DetailCheckoutView from './DetailCheckoutView'

// Utcheckningsida
export default class CheckoutView extends React.Component {
    render() {
        return (
            <div>
                <CartView />
                <DetailCheckoutView />
            </div>
        )
    }
};