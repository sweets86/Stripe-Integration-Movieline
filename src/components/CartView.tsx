import React from 'react'
import CheckoutView from './CheckoutView'
import {Route} from 'react-router-dom'

// Kundvagnsida
export default class CartView extends React.Component {
    render() {
        return (
            <div>
                <Route path='/products/:checkout' component={CheckoutView} />
            </div>
        )
    }
};