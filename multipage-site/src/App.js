import './App.css'
import { BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'

// page components
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Article from './pages/Article'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        {/* <a> always send a new get request to the server which sends a new html page always as a response. So we use link in react.react ke Link tag se ye hota ki click krne pe new get request bhejne ki bajaye pehle request jati react router pe, vo check krta ki jis page pe jana uspe konse konse components use ho rkhe, or kya vo components server se react ne le rkhe jb 1st time site load hui. to ab vo directly un components ko utha leta jo new page pe hone chahiye. Navlinks are similar to link but they show active class for which the path is selected */}
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      
      {/*without switch, /about or /contact was also showing home too with them coz there was / in /about which runs first.With switch, only home was showing wehn we were going to /about coz switch runs only one at a time and it matches the / and runs home only. With use of exact in / path, home will run only when the path is / only and so wont run for /about or /contact   */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/articles/:id">
          <Article />
        </Route>
        <Route path="*">
        <Redirect to="/" />
        </Route>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App
