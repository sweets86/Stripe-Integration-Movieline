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
                    <label>Email
                        <input name="Email" type="text" placeholder="you@example.com" autoComplete="on" pattern='text' />
                    </label>
                    <label>Mobile
                        <input name="PhoneNumber" type="text" placeholder="+46 mobilnummer" autoComplete="on" pattern='text' />
                    </label>
                    <Button type="submit" value="submit" style={buttonStyle}><a href="https://www.paypal.com/se/signin">Submit</a></Button>
                </form>

                <img style={{ maxWidth: '50%' }}
                    src={require("./paypal.png")} alt="Paypal" />
            </div>
        )
    }
}

const buttonStyle: React.CSSProperties = {
    width: '100%',
    border: '1px, grey'
}


/* matchEmail(input: any) {
    var reg = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    );
    return email.filter(function (email) {
        if (email.match(reg)) {
        return email
        } else {
            return alert("wrong")
        }
    })
}

onKeyDown={this.matchEmail}
let email = ['@gmail.com'] */