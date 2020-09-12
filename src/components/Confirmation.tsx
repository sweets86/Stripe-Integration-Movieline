import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

interface Params {
    confirm: string
}

interface Props extends RouteComponentProps<Params> { }

function Confirmation(props: Props) {
    const confirm = props.match.params.confirm
    return (
        <div>
            <h1>Thanks for your order!</h1>
            <p>
                We appreciate your business!
                If you have any questions, please email
        <Link to="mailto:orders@example.com">orders@example.com</Link>.
      </p>
        </div>
    )
}

export default Confirmation