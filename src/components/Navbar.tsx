import React, { CSSProperties } from 'react'
import {Link } from 'react-router-dom'
import {Alignment, Button, Navbar} from "@blueprintjs/core";

export default function viewNavBar() {
    return (
        <div>
            <Link to='/'>
                <Navbar.Group align={Alignment.LEFT} style={styleNavBar}>
                    <Navbar.Heading  style={styleHeading}>MovieLine</Navbar.Heading>
                <Navbar.Divider />
                    <Button className="bp3-button bp3-minimal bp3-icon-shopping-cart" style={styleIcon}/>
                </Navbar.Group>
            </Link>
        </div>
    )
};

const styleNavBar:CSSProperties ={
    backgroundColor: "#212121",
    height: "63PX",
    width: "100%",
    fontWeight: "bold",
    display:"flix"
}

const styleIcon:CSSProperties ={
    display: "inline-block",
    alignItems:"right",
    fontSize: "32px",
    position: "relative",
    color: "#FFFFFF",
    margin: "8px",
    marginLeft:"auto",
}

const styleHeading:CSSProperties ={
    display: "inline-block",
    alignItems:"right",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#FFFFFF",
    margin: "8px",
}