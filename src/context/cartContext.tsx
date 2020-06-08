import React, { createContext, Component } from 'react'
import { Product } from '../products'


export interface ProviderState {
    cartList: Product[]
}

export interface ContextState extends ProviderState {
    addProductToCart: (product: Product) => void
    deletefromcart: (product: Product, index: number) => void
}

export const CartContext = createContext<ContextState>({
    cartList: [],
    addProductToCart: (product: Product) => {
        console.log(("Something went wrong with adding " + product.title + "to cart")
        )
    },
    deletefromcart: (product: Product) => {
        console.log(("Something went wrong while " + product.title + "to cart")
        )
    }
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
        this.setState({ cartList: clonedCart }, () => { console.log(this.state) })
    }

    deletefromcart = (product: Product, index: number) => {
        const clonedCart = Object.assign([], this.state.cartList)
        clonedCart.splice(index, 1)
        this.setState({ cartList: clonedCart }, () => { console.log(this.state) })
    }



    render() {
        return (
            <CartContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart,
                deletefromcart: this.deletefromcart

            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}
