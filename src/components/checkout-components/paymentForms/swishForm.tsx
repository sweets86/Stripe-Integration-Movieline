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
                <h1>SwishForm</h1>
            </div>
        )
    }
}