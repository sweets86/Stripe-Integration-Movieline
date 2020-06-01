import React, { CSSProperties } from 'react'
import {Link } from 'react-router-dom'
import {Alignment, Button, Navbar} from "@blueprintjs/core";

export default function viewNavBar() {
    return (
        <div>
            <Link to='/'>
                <Navbar.Group align={Alignment.LEFT} style={styleNavBar}>
                    <Navbar.Heading>MovieLine</Navbar.Heading>
                <Navbar.Divider />
                    <Button className="bp3-minimal" icon="shopping-cart" text="Cart" style={styleIcon}/>
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
}

const styleIcon:CSSProperties ={
    alignItems:"right",
    fontWeight: "bold",
    fontSize: "30px",
    position: "relative",
    color: "#FFFFFF",
    display: "inline-block",
    marginTop: "6px",
    marginLeft:"15px",
    textDecoration: "none"

}