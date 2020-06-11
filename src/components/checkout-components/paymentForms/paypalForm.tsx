import React from 'react'
import ReactDOM from 'react-dom'
import { useForm } from "react-hook-form";
import { Alert, FormGroup, Label, InputGroup, Button } from "@blueprintjs/core";
import { isNumber } from 'util';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validMobileRegex = RegExp(
    /^(\+\d{1,3}[- ]?)?\d{10}$/
);

const validateForm = (errors: any) => {
    let valid = true
    Object.values(errors).map((value: any) => value.length > 0 && (valid = false))
    return valid
}

interface State {
    email: string
    mobilePhone: number;
    errors: {
        email: string,
        mobilePhone: any
    }
};

interface Props {
    form: (form: any) => void
}

export default class PaypalForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            email: "",
            mobilePhone: parseInt(""),
            errors: {
                email: "",
                mobilePhone: ""
            }
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors

        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid';
                break;
            case 'mobilePhone':
                errors.mobilePhone =
                validMobileRegex.test(value)
                        ? ''
                        : 'Number is not valid'
                break;
            default:
                break;
        }
        this.setState((prevState) => ({
            ...prevState,
            errors, [name]: value
        }))
    }

    handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm(this.state.errors) && this.state.email != "" && this.state.mobilePhone ) {
            console.log(validateForm(this.state.errors))
            console.info('Valid Form')
            alert('You are valid! Check your mailbox.')
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        const { errors } = this.state
        return (
            <div>
                <form style={{ display: 'flex', flexDirection: 'column', width: '20%' }} onSubmit={this.handleSubmit} /* noValidate */ >
                    <label htmlFor='email'>Email:
                    <input name="email" type="email" onChange={this.handleChange} value={this.state.email} /* formNoValidate */ placeholder="you@example.com" autoComplete="on" />
                        {errors.email.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.email}</span>}
                    </label>
                    <label htmlFor="mobilePhone">Mobile:
                    <input name="mobilePhone" type="mobilePhone" onChange={this.handleChange} /* formNoValidate */ placeholder="mobilnummer" autoComplete="on" />
                        {errors.mobilePhone.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.mobilePhone}</span>}
                    </label>
                    <Button type="submit" value="submit" /* formNoValidate */ style={buttonStyle}>Submit</Button>
                </form>
                <a href="https://www.paypal.com/se/signin"><img style={{ maxWidth: '50%' }}
                    src={require("./paypal.png")} alt="Paypal" /></a>
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