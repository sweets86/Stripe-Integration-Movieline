import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    view: string
}

export default function ProductItem(props: Props) {

    return (

        <Link to={"/products/" + props.view} >
            <img src={require("../assets/" + props.view + ".jpg")} style={image} />
            <h1> {props.view} </h1>
            <button style={{margin: "0.5em"}} >Add To Cart</button>
        </Link>
    )
};

const image: React.CSSProperties = {
    height: "25%",
    width: "25%",
    objectFit: "cover"
}