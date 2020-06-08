import React, { CSSProperties } from 'react'
import { products } from "../products"
import { Product } from "../products"
import { Button } from '@blueprintjs/core'
import { Link } from 'react-router-dom'


interface Props {

}

interface State {

}


const productList: Product[] = products
console.log(productList)

// Startsida- Startpage
export default class MasterView extends React.Component {

    constructor(props: Props) {
        super(props)

    }
    
    get loopThis() {
        if (productList.length) {
            return productList.map((product) => {
                return (


                    <div key={product.id} style={ productCards }>
                        <Link to={"/products/" + product.id}>
                            <h1 style={ TitleLink }>{product.title}</h1>
                        </Link>

                        <p>{product.descreption}</p>
                        <img src={require("./../assets/" + product.img)} alt="pic" style={poster} className='movieImg' />
                        <h3>Köp: {product.price} SEK</h3>
                        <CartConsumer>
                            {(contextData: ContextState) => {
                                return (
                                    <Button onClick={() => contextData.addProductToCart(product)}>Add to cart</Button>
                                )
                            }}
                        </CartConsumer>
                    </div >
                    
                )
            })
        } else {
            return "sdd"
        }
    };

    render() {
        return <div style={productsContainer}>
            {this.loopThis}
        </div>
    }


}


const productsContainer: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#f0f0f0'
}

const productCards: CSSProperties = {
    width: '100%',
    margin: '2%',
    padding: '20px',
    backgroundColor: '#ccc7c7'
    
}

const poster: CSSProperties = {
  objectFit: 'cover',
  width: '70%'    
}

const TitleLink: CSSProperties = {
    textDecoration: 'none',
    color: 'black'
}



