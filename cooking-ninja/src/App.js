import { BrowserRouter, Switch, Route } from 'react-router-dom'

// page components
import Navbar from './components/Navbar'
import Home from './Pages/home/Home'
import Create from './Pages/create/Create'
import Search from './Pages/search/Search'
import Recipe from './Pages/recipe/Recipe'
import ThemeSelector from './components/ThemeSelector'

// styles
import './App.css'
import { useTheme } from './hooks/useTheme'

function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />  
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App