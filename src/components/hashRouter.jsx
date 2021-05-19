import React from 'react'
import {Route ,Link, HashRouter } from 'react-router-dom'
function hashRouter() {
    return (
        <div>
            <h1>Hashrouter</h1>
            <p>It uses URL hash. When we use hashes in the URL/location bar browser doesn't make a server request.</p>
            <p>The hash router adds # between the url So the browser doesnt reads the path after the " # "  </p>
            <p>Click on these links to view the Hashrouter in action</p>
            <Link to='/about'>About</Link><br />
            <Link to='/about2'>Second About</Link>
        </div>
    )
}

export default hashRouter
