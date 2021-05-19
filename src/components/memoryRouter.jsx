import React from 'react'
import { Link } from 'react-router-dom'
function memoryRouter() {
    return (
        <div>
            <h2>MemoryRouter</h2>
            <p>The MemoryRouter keeps the history of the url in memory</p>
            <p>It does not read or write to the address bar</p>
            <p>Usefull in testes non-browser environments like react native</p>
            <p>Open the below components to view MemoryRouter in action. (nothing changes in the url)</p>
            <Link to='/about'>About</Link><br />
            <Link to='/about2'>Second About</Link>
        </div>
    )
}

export default memoryRouter
