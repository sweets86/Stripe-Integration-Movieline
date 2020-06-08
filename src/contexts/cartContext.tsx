import React, { createContext, Component, useState } from 'react'
import { Product } from '../products'


export interface ProviderState {
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

/* 
const addToCart = () => {
    const [product, setProduct] = useState('');
    const updateProductList = (event: any) => {
        setProduct(event.target.value)
    }
    const addProduct = event => {
        event.preventDefault();
        setProduct(lastUpdatedCart => [...lastUpdatedCart, { product: Product }])
    }

}
 */

export const CartConsumer = CartContext.Consumer
export class CartProvider extends Component<{}, ProviderState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            cartList: [{
                id: 1,
                title: "Pirates of the Silicon Valley",
                descreption: "Filmen handlar om persondatorns genombrott genom rivaliteten mellan Apple Computer och Microsoft, Filmen utspelar sig i slutet av 1970-talet fram till 1997.",
                img: "pirates_bigImg.jpg",
                price: 299
            }]
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
                //remove

            }}>
                {this.props.children}  {/* fråga om detta ------> detta måste vi skriva så att alla children till CartContext kan få infos som vi har sparat i staten->  om vi wrappar allt i CartContext.Provider då blir de alla children till det */}
            </CartContext.Provider>
        )
    }
}