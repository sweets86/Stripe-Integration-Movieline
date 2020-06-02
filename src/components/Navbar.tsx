import React, { CSSProperties } from 'react'
import {Link } from 'react-router-dom'
import {Alignment, Button, Navbar} from "@blueprintjs/core";

export default function viewNavBar() {
    return (
        <div>
            <Navbar style={styleNavBar}>

                <Navbar.Group align={Alignment.LEFT} >
                    <Link to='/'>
                        <Navbar.Heading  style={styleHeading}>MovieLine</Navbar.Heading>
                    </Link>
                </Navbar.Group>
        
                <Navbar.Group align={Alignment.RIGHT}>
                    <Link to='/CartView'>
                        <Button className="bp3-button bp3-minimal bp3-icon-shopping-cart" style={styleIcon}/>
                    </Link>
                </Navbar.Group>

            </Navbar>
        </div>
    )
};

const styleNavBar:CSSProperties ={
    backgroundColor: "#212121",
    height: "63PX",
    width: "100%",
    display:"flix",
    position: "absolute",
}

const styleIcon:CSSProperties ={
    display: "flex",
    alignItems:"center",
    fontSize: "32px",
    position: "relative",
    color: "#FFFFFF",
    margin: "8px",
}

const styleHeading:CSSProperties ={
    display: "inline-block",
    alignItems:"right",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#FFFFFF",
    margin: "8px",
}