import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import DetailCheckoutView from './DetailCheckoutView'
import { Button, Card, Label, MenuItem, Menu, FormGroup, InputGroup, RadioGroup, Radio, Checkbox} from "@blueprintjs/core"
import { CartConsumer, ContextState } from '../context/cartContext'
import InfoForm from './checkout-components/FormInfo'


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
                <CartConsumer>
                    {(contextData: ContextState) => {
                        return (
                            <div>
                               
                                {
                                    contextData.cartItems.length ?

                                        contextData.cartItems.map((cartItem, index: number) => {
                                            return (
                                                <div>
                                                    <h3>{cartItem.product.title}</h3>
                                                    <p>Antal: [här quantity]</p>
                                                    <p>{cartItem.product.price} SEK</p>
                                             
                                                   
                                                </div>
                                            )
                                        })
                                        : 
                                        <h4>No items in cart...</h4>
                                }
                                <h3>Total Pris [Här funktionen med total pris]</h3>
                            </div>
                        )
                    }}
        </CartConsumer> 

                </div>




                <div style={cardStyle}>
                <h2>Your Info</h2>
                  <InfoForm></InfoForm>
                </div>

                <div style={cardStyle}>
                <h2>Delivery</h2>
               
                
                
                    <Radio label="PostNord" value="one" defaultChecked={true}/>
                    <Radio label="DHL" value="two" />
                    <Radio label="Express" value="three" />
            
              
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


export const cardStyle: React.CSSProperties = {
    maxWidth:"60%",
    minWidth:"300px",
    flex:"1",
    margin:"0.2px",
    padding:'8px',
    border: '1px solid #487cc5'
}