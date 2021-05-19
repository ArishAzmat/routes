import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <h1>Browser Router</h1>
            <p>Difference Between BrowserRouter, HashRouter, MemoryRouter</p>
            <p>Client-side React application is able to maintain clean routes like example.com/react/route </p>
            <Link to='/'><p>BrowserRouter</p></Link><br />
            <Link to='/hashrouter'><p>hashRouter</p></Link><br />
            <Link to='/memoryrouter'><p>memoryRouter</p></Link>
        </div>
    )
}

export default Home
