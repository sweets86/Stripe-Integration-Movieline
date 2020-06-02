import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface Params {
    product: string
}

interface Props extends RouteComponentProps<Params> {

}

// Produktsida- Productpage
function DetailView(props: Props) {
    const view = props.match.params.product

    return (
        <div>
            <img src={require(`../assets/${view}.jpg`)} style={{ marginLeft: "2em" }} />
            <h1 style={{ marginLeft: "2em" }}> {view} </h1>
            <button style={{ marginLeft: "2em" }}>Add To Cart</button>
            <div style={{ marginLeft: "2em", marginTop: "2em" }}>
                Description
                <p style={{ marginLeft: "2em", marginTop: "2em" }}>Price</p>
            </div>

        </div>
    )

};

export default DetailView