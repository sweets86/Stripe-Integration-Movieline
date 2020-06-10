import React from 'react'
import ReactDOM from 'react-dom'
import { useForm } from "react-hook-form";
import { Alert, FormGroup, Label, InputGroup, Button } from "@blueprintjs/core";

interface State {
    color: string
    cardNumber: number
    month: number,
    year: number,
    cvc: number
}

interface Props {
    form: (form: any) => void
}

export default class PaypalForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            color: "green",
            cardNumber: parseInt(""),
            month: parseInt(""),
            year: parseInt(""),
            cvc: parseInt("")
        }
    }

    visaHandleClick = () => {
        const printVisaForm = {
            color: this.state.color,
            cardNumber: this.state.cardNumber,
            month: this.state.month,
            year: this.state.year,
            cvc: this.state.cvc
        }

        this.props.form(printVisaForm)
    }

    render() {
        return (
            <div>
                <h1>VisaForm</h1>
            </div>
        )
    }
}