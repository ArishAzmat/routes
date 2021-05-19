import './App.css';
import {BrowserRouter, Link, Route,HashRouter, MemoryRouter} from 'react-router-dom'
import hRouter from './components/hashRouter'
import mRouter from './components/memoryRouter'
import Home from './components/Home'
import about from './components/about';
import about2 from './components/about2';
function App() {
  return (
    <BrowserRouter basename='/routes/'>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route exact path='/hashrouter'>           
          <HashRouter>
            <Route path='/' component={hRouter}/>
            <Route path='/about' component={about}/>
            <Route path='/about2' component={about2}/>
          </HashRouter>
        </Route>
        <Route exact path='/memoryrouter'>           
          <MemoryRouter>
            <Route path='/' component={mRouter}/>
            <Route path='/about' component={about}/>
            <Route path='/about2' component={about2}/>
          </MemoryRouter>
        </Route>

      </div>
    </BrowserRouter>
   
  );
}

export default App;
