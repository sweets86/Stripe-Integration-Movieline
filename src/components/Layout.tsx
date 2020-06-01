import React from 'react'
import Navbar from './Navbar'
import ViewContainer from './ViewContainer'

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <ViewContainer />
            </div>
        )
    }
};