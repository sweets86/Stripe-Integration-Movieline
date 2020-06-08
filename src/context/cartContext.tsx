import React, { createContext, Component } from 'react'
import { Product } from '../products'


export interface ProviderState {
    cartList: [{
        product: Product,
        quantity: number
    }
    ]

}

export interface ContextState extends ProviderState {
    addProductToCart: (product: Product) => void
    deletefromcart: (product: Product, index: number) => void
}

export const CartContext = createContext<ContextState>({
    cartList: [],
    addProductToCart: (product: Product) => {
        console.log(("Something went wrong with adding " + product.title + "to cart" )
    )}
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

        const foundProductIndex = this.state.cartList.findIndex((produktToFind: Product) => {
            return product.id === produktToFind.id
        })

        if (foundProductIndex == -1) { clonedCart.push(product) }
        else { clonedCart[foundProductIndex].quantity++ }
        this.setState({ cartList: clonedCart }, () => { console.log(this.state) })
    }

    //remove function

    render() {
        return (
            <CartContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart
                //remove

            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}
