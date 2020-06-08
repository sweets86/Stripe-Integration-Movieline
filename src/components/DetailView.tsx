import React from 'react'
import { RouteComponentProps } from 'react-router-dom'


interface Params {
    id: string
}

interface Props extends RouteComponentProps<Params> { }


function DetailView(props: Props) {
    const id = props.match.params.id
    console.log(id)

    return (
        <div style={container}>
            <h1>Hej, Produktsida</h1>
            <h1>{id}</h1>
        </div>
    )
};

export default DetailView

const container: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    flexDirection: "column",
    position: "fixed",
    height: '100%',
}