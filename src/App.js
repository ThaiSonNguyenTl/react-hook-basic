import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About'
import Nav from './components/Navbar'
import routes from './routes';
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext';
function App() {
  const showContent = (routes) => {
    let result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return result
  }
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home Router</Link>
            </li>
            <li>
              <Link to="/users/mo/xinhgai" >Users Router</Link>
            </li>
            <li>
              <Link to={
               {
                pathname: "/about",
                state: {
                  from: 'root'
                }
               }
              }>About</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route  exact path='/about' component={About}/>
              <Route exact path='/users/:firstname/:lastname' component={Users} />
            </Switch>
          </div>
        </header>
       
        <Switch>
          <ThemeContextProvider>
          <AuthContextProvider>
              <Nav/>
            {showContent(routes)}
         
              </AuthContextProvider>
          </ThemeContextProvider>
        </Switch>
      </Router>
      
    </div>
  );
 
}

export default App;
