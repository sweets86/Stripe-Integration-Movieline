import React from 'react'
import { products } from "../products"
import { Product } from "../products"




const productList: Product[] = products
console.log(productList)

// Startsida- Startpage
export default class MasterView extends React.Component {


    get loopThis() {
        if (productList.length) {
            return productList.map((value) => {
                return <div>
                    <h1>{value.title}</h1>
                    <p>{value.descreption}</p>
                    <img src={value.img} alt="pic" />
                    <h3>{value.price}</h3>
                </div>
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