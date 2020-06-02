import React from 'react'
import {products} from '../products'
import {Product} from '../products'
import ProductItem from './ProductItem'


// Startsida- Startpage
export default class MasterView extends React.Component {

    get loopThis() {
        if (productList.length) {
            return productList.map((product) => {
                return (
                    <ProductItem />
                )
            })
        }else {
            "this"
        }
    }

    render() {
        return (
            this.loopThis
        )
    }

};