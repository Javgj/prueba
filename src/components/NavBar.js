import React from 'react'
import { Link } from 'react-router-dom'

function navBar () {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/information">Navbar</a>
            </nav>
        </div>
    )
}

export default navBar