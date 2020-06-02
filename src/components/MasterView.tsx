import React from 'react'
import { products } from "../products"
import { Product } from "../products"
import { Button } from '@blueprintjs/core'

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
                    <div key={product.id}>
                        <h1>{product.title}</h1>
                        <p>{product.descreption}</p>
                        <img src={require("./../assets/" + product.img)} alt="pic" />
                        <h3>{product.price}</h3>
                        <Button>Add to cart</Button>
                    </div >
                )
            })
        } else {
            return "sdd"
        }
    };

    render() {
        return <div>
            {this.loopThis}
        </div>
    }

}
/*

export default function MasterView() {

    const sectionIds = ['forest', 'sky', 'desert']
    return (
        <div style={container}>
            {sectionIds.map((value) =>
                <NavigationItem key={value} view={value} />
            )}

        </div>
    )
} */