import React from 'react'
import ReactDOM from 'react-dom'
import { useForm } from "react-hook-form";
import { Alert, FormGroup, Label, InputGroup, Button } from "@blueprintjs/core";

interface Props {
    form: (form: any) => void
}

export default class PaypalForm extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form style={{ display: 'flex', flexDirection: 'column', width: '20%' }} autoComplete="on">
                    <label>Mobile
                        <input name="PhoneNumber" type="text" placeholder="+46 mobilnummer" autoComplete="on" pattern='text' />
                    </label>
                    <Button type="submit" value="submit" style={buttonStyle}><a href="">Submit</a></Button>
                </form>

                <img style={{ maxWidth: '75%'}}
                    src={require("./swish.png")} alt="Paypal" />
            </div>
        )
    }
}

const buttonStyle: React.CSSProperties = {
    width: '100%',
    border: '1px, grey'
}