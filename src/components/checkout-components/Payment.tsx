import React from 'react';
import { MenuItem, Menu } from "@blueprintjs/core"
import VisaForm from './paymentForms/visaForm'
import SwishForm from './paymentForms/swishForm'
import PaypalForm from './paymentForms/paypalForm'
import PaymentOrder from './paymentForms/paymentOrder'
import { StripeProvider, Elements } from 'react-stripe-elements';

interface State {
    isVisaSelected: boolean
    isSwishSelected: boolean
    isPaypalSelected: boolean
    forms: []
    showMenu: boolean
}

interface Props {
    showVisaForm: boolean
    showSwishForm: boolean
    showPaypalForm: boolean
    showInfo: any
}

export default class Payment extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isVisaSelected: false,
            isSwishSelected: false,
            isPaypalSelected: false,
            forms: [],
            showMenu: true
        }
    }

    visaHandleClick = () => {
        this.setState({ isVisaSelected: true, isSwishSelected: false, isPaypalSelected: false })
        this.setState({ showMenu: false })
    }

    swishHandleClick = () => {
        this.setState({ isSwishSelected: true, isVisaSelected: false, isPaypalSelected: false })
        this.setState({ showMenu: false })
    }

    paypalHandleClick = () => {
        this.setState({ isPaypalSelected: true, isVisaSelected: false, isSwishSelected: false })
        this.setState({ showMenu: false })
    }

    form = (form: any) => {
        let formToFill = this.state.forms as any
        formToFill.push(form)
        this.setState({
            forms: formToFill
        }, () => {
            console.log(this.state.forms)
        })
    }

    render() {
        return (
            <div>
                <h2>Payment</h2>
                {
                    this.state.showMenu ?
                        <Menu id="menu">
                            <h4>Choose your payment method</h4>
                            <MenuItem text="Show alternatives..." shouldDismissPopover={true}>

                                <MenuItem text="Visa Card" onClick={this.visaHandleClick} />
                                <MenuItem text="Swish" onClick={this.swishHandleClick} />
                                <MenuItem text="PayPal" onClick={this.paypalHandleClick} />
                            </MenuItem>
                        </Menu>
                        : null
                }
                <div>
                    {this.state.isVisaSelected &&
                        <StripeProvider apiKey='pk_test_8asbHZHZoVp2kblhfCEUUGIr006fit3Srr'>
                            <Elements>
                                <VisaForm form={this.form} showSwishForm={this.props.showSwishForm} showPaypalForm={this.props.showPaypalForm} showInfo={this.props.showInfo} />
                            </Elements>
                        </StripeProvider>}
                    {this.state.isSwishSelected && <SwishForm form={this.form} showVisaForm={this.props.showVisaForm} showPaypalForm={this.props.showPaypalForm} showInfo={this.props.showInfo} />}
                    {this.state.isPaypalSelected && <PaypalForm form={this.form} showVisaForm={this.props.showVisaForm} showSwishForm={this.props.showSwishForm} showInfo={this.props.showInfo} />}
                </div>
                <div>
                    <PaymentOrder forms={this.state.forms} />
                </div>
            </div>
        )
    }
}

