import React from 'react'
import Nav from './Navbar'
import ViewContainer from './ViewContainer'

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <ViewContainer />
            </div>
        )
    }
};