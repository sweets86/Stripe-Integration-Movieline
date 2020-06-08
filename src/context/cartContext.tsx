import React, { createContext, Component } from 'react'
import { Product, products } from '../products'


interface CartItem {
    product: Product,
    quantity: number
}

export interface ProviderState {
    cartItems: CartItem[]
}

export interface ContextState extends ProviderState {
    addProductToCart: (product: Product) => void
    deletefromcart: (product: Product, index: number) => void
}

export const CartContext = createContext<ContextState>({
    cartItems: [],
    addProductToCart: (product: Product) => {
        console.log(("Something went wrong with adding " + product.title + "to cart")
        )
    },
    deletefromcart: (product: Product) => {
        console.log(("Something went wrong while deleting " + product.title + "to cart")
        )
    }
})

export const CartConsumer = CartContext.Consumer

export class CartProvider extends Component<{}, ProviderState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            cartItems: []
        }
    }

    addProductToCart = (product: Product) => {
        const clonedCart: CartItem[] = Object.assign([], this.state.cartItems)

        const foundProductIndex: number = this.state.cartItems.findIndex((produktToFind) => {
            return product.id === produktToFind.product.id
        })
        console.log(foundProductIndex)
        if (foundProductIndex === -1) { clonedCart.push({ product: product, quantity: 1 }) }
        else { //incermintproduct()
            clonedCart[foundProductIndex].quantity++

        }
        this.setState({ cartItems: clonedCart }, () => { console.log(this.state) })
    }

    deletefromcart = (product: Product, index: number) => {
        const clonedCart = Object.assign([], this.state.cartItems)
        clonedCart.splice(index, 1)
        this.setState({ cartItems: clonedCart }, () => { console.log(this.state) })
    }

    render() {
        return (
            <CartContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart,
                deletefromcart: this.deletefromcart,
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}