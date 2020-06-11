import React from "react";
import { RadioGroup, Radio } from "@blueprintjs/core"


interface Props {

}

interface State {
    selectedOption: string
}
export default class deliveryMethod extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            selectedOption: ""
        }
    }


    handleOptionChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            selectedOption: event.currentTarget.value
        })

    }

    handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log('You have selected:', this.state.selectedOption);
    }


    render() {
        return (
            <div>
                <RadioGroup
                    label="Delivery Choice"
                    onChange={this.handleOptionChange}
                    selectedValue={this.state.selectedOption}
                >
                    <Radio {...this.state} label="PostNord" defaultChecked={true} value="one" onChange={this.handleOptionChange} />
                    <Radio {...this.state} label="DHL" value="two" onChange={this.handleOptionChange} />
                    <Radio {...this.state} label="Express" value="three" onChange={this.handleOptionChange} />
                </RadioGroup>

                booooooo
            </div>
        );
    }
}
