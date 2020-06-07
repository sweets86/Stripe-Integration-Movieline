import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import DetailCheckoutView from './DetailCheckoutView'
import { Button, Card, Label, MenuItem, Menu, FormGroup, InputGroup,} from "@blueprintjs/core"
import { Cell, Column, Table } from "@blueprintjs/table";

interface Params {
    checkout: string
}

interface Props extends RouteComponentProps<Params> { }

// Utcheckningsida
export default class CheckoutView extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    
        const checkout = props.match.params.checkout

    }
   

    render() {
        return (
            <div style={checkoutStyle} className="pt-card pt-elevation-0">

                <div style={cardStyle}>
                <h2>The Cart </h2>    
                
                </div>

                <div style={cardStyle}>
                <h2>Your Info</h2>
                    <FormGroup>
                        <Label htmlFor="input-b">Enter Name</Label>
                        <InputGroup id="text-input" placeholder="Enter name" />
                        <br/>
                        <Label htmlFor="input-b">Enter Email</Label>
                        <InputGroup id="text-input" placeholder="Enter email" />
                        <br/>
                        <Label htmlFor="input-b">Enter Telephone</Label>
                        <InputGroup id="text-input" placeholder="Enter telephone" />
                        <br/>
                        <Label htmlFor="input-b">Enter Address</Label>
                        <InputGroup id="text-input" placeholder="Enter Address" />
                    </FormGroup>
                </div>

                <div style={cardStyle}>
                <h2>Delivery</h2>
    
                </div>

                <div style={cardStyle}>
                <h2>Payment</h2>
                
                <Menu>
                    <MenuItem text="chouse your method">
                    <MenuItem text="Visa Card" />
                        <MenuItem text="Swish" />
                        <MenuItem text="PayPal" />
                    </MenuItem>
                </Menu>
                <br/>
                <Button>Order confirmation</Button>
                </div>       
                <DetailCheckoutView />
            </div>
        )
    }
};

const checkoutStyle: React.CSSProperties = {
    display: "flex",
    flexDirection:'row',
    flexWrap: "wrap",
    justifyContent: "center",

}


const cardStyle: React.CSSProperties = {
    maxWidth:"60%",
    minWidth:"300px",
    flex:"1",
    margin:"0.2px",
    padding:'8px',
    border: '1px solid #487cc5'
}