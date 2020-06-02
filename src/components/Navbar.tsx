import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to='/products/1'>
                <h1>MovieLine</h1>
            </Link>

        </div>
    )
};