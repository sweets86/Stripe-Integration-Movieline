import React from 'react'
import {Link} from 'react-router-dom'

interface Props {

}

export default class ProductItem extends React.Component<Props> {

    render() {
        return (
            <Link to='/products/:product'>
            
            </Link>
        )
    }
}