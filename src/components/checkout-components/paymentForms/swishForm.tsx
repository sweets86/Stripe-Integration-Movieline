import React from 'react'
import ReactDOM from 'react-dom'
import { useForm } from "react-hook-form";
import { Alert, FormGroup, Label, InputGroup, Button } from "@blueprintjs/core";
import { stringify } from 'querystring';

const validMobileRegex = RegExp(
    /^(\+\d{1,3}[- ]?)?\d{10}$/
);

const validateForm = (errors: any) => {
    let valid = true
    Object.values(errors).map((value: any) => value.length > 0 && (valid = false))
    return valid
}

interface State {
    mobilePhone: number
    errors: {
        mobilePhone: any
    }
};

interface Props {
    form: (form: any) => void
}

export default class SwishForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            mobilePhone: parseInt(""),
            errors: {
                mobilePhone: ""
            }
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const {name, value} = event.target
        let errors = this.state.errors

        errors.mobilePhone = validMobileRegex.test(value) ? '' : 'Number is not valid';

        this.setState((prevState) => ({
            ...prevState,
            errors, [name]: value
        }))
    }

    handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm(this.state.errors) && this.state.mobilePhone != parseInt("")) {
            console.log(validateForm(this.state.errors))
            console.info('Valid Form')
            alert('You are valid! Open your BankID application.')
        } else {
            console.error('Invalid Form')
        }
    }
    render() {
        const { errors } = this.state
        return (
            <div>
                <form style={{ display: 'flex', flexDirection: 'column', width: '20%' }} onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="mobilePhone">Mobile:
                        <input name="mobilePhone" type="mobilePhone" onChange={this.handleChange} /* value={this.state.mobilePhone} */ formNoValidate placeholder="+46 mobilnummer" autoComplete="on" /* pattern='text' required={true} */ />
                        {errors.mobilePhone.length > 0 &&
                            <span style={{ color: 'red' }}>{errors.mobilePhone}</span>}
                    </label>
                    <Button type="submit" value="submit" formNoValidate style={buttonStyle}>Submit</Button>
                </form>

                <img style={{ maxWidth: '75%' }}
                    src={require("./swish.png")} alt="Paypal" />
            </div>
        )
    }
}

const buttonStyle: React.CSSProperties = {
    width: '100%',
    border: '1px, grey'
}

/* event.preventDefault();
        const value: any = event.target;
        let errors = this.state.errors

        errors.mobilePhone = validMobileRegex.test(value)

        this.setState((prevState) => ({
            ...prevState,
            errors, value
        })) */