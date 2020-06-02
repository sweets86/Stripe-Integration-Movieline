import React, { CSSProperties } from 'react'
import { products } from "../products"
import { Product } from "../products"
import { Button, Card, Slider } from '@blueprintjs/core'

interface Props {

}

interface State {

}


const productList: Product[] = products
console.log(productList)

// Startsida- Startpage
export default class MasterView extends React.Component {

    constructor(Props: Props) {
        super(Props)
    }



    get loopThis() {
        if (productList.length) {
            return productList.map((product) => {
                return (
                   
                    <div key={product.id} style={ productCards }>
                        <h1>{product.title}</h1>
                        <p>{product.descreption}</p>
                        <img src={require("./../assets/" + product.img)} alt="pic" style={ poster } className='movieImg'/>
                        <h3>Köp: { product.price } SEK</h3>
                        <Button>Add to cart</Button>
                        
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
    backgroundColor: 'white'
    
}

const poster: CSSProperties = {
  objectFit: 'cover',
  width: '70%'    
}




