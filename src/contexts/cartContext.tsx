import React, { createContext, Component } from 'react'
import { Product } from '../products'


interface ProviderState {
    cartList: Product[]
}

interface ContextState extends ProviderState {
    addProductToCart: (product: Product) => void
    //remove
}

const CartContext = createContext<ContextState>({
    cartList: [],
    addProductToCart: (product: Product) => { }
})

export const CartConsumer = CartContext.Consumer
export class CartProvider extends Component<{}, ProviderState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            cartList: []
        }
    }

    addProductToCart = (product: Product) => {
        const clonedCart = Object.assign([], this.state.cartList)
        clonedCart.push(product)
        this.setState({ cartList: clonedCart })

    }

    //remove decla


    render() {
        return (
            <CartContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart
                //remoce

            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

