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
            <div style={container}>
                <Card style={info}>

                    <Card>
                        <h1  style={{fontSize:'bold' }}> Your information</h1>
                        <FormGroup>
                            <Label htmlFor="input-b">Enter Name</Label>
                            <InputGroup id="text-input" placeholder="Enter name" />
                            <Label htmlFor="input-b">Enter Email</Label>
                            <InputGroup id="text-input" placeholder="Enter email" />
                            <Label htmlFor="input-b">Enter Telephone</Label>
                            <InputGroup id="text-input" placeholder="Enter telephone" />
                            <Label htmlFor="input-b">Enter Address</Label>
                            <InputGroup id="text-input" placeholder="Enter Address" />
                            <h2  style={{fontSize:'bold' }}> Our payment methods</h2>
                            <Menu>
                                <MenuItem text="Submenu">
                                <MenuItem text="Visa Card" />
                                    <MenuItem text="Swish" />
                                    <MenuItem text="PayPal" />
                                </MenuItem>
                            </Menu>
                        </FormGroup>
                    </Card>

                    <Card>

                        <h2  style={{fontSize:'bold' }}> The cart</h2>
                        <Table>
                        </Table>

                    </Card>

                </Card>
                <Button>Order confirmation</Button>
                <DetailCheckoutView />
            </div>
        )
    }
};

const container: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    margin: '0 auto',
    justifyContent: "center",
    textAlign: "center",
    width: "80%",
    flexDirection: "column",
    position: "fixed",
    height: '80%',
    backgroundColor: '#f0f0f0'
}

const info: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    margin: '0 auto',  
}