import React, { createContext, Component } from 'react'
import { Product } from '../products'

const cartis = [
    {
        id: 1,
        title: "Pirates of the Silicon Valley",
        descreption: "Filmen handlar om persondatorns genombrott genom rivaliteten mellan Apple Computer och Microsoft, Filmen utspelar sig i slutet av 1970-talet fram till 1997.",
        img: "pirates_bigImg.jpg",
        price: 299

    }]

/* const { Provider, Consumer } = React.createContext(
); */


export const ThemeContext = createContext({
    cartList: 
})




/* class TheCartListProvider extends Component {
    state = {
        cartList: cartis
    }



    render() {
        return (
            Provide
        )
    }
}
 */
