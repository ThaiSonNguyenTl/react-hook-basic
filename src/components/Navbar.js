import React,{useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext'
import { TOGGLE_AUTH } from '../reducers/types';
import {Route,Link} from 'react-router-dom'
const Navbar=() => {
    //Load theme context
    const {theme}=useContext(ThemeContext);
    const {isLightTheme,light,dark}=theme
    const style=isLightTheme? light:dark
    //Load auth context
    const {isAuthenticated, dispatch} = useContext(AuthContext)

    return (
        <Route>
             <div className="navbar" style={style}>
            <h1>
                My hooks App
            </h1>
            <ul>
                <Link to = '/home'>
                    Home
                </Link>
                <Link to='/about_guava'>
                    About
                </Link>
                <Link>
                    {isAuthenticated ? 'Welcome My App !' : ''}
                    <button onClick = {() => {
                        dispatch({
                            type: TOGGLE_AUTH,
                            
                        })
                    }}>
                        {isAuthenticated ? 'Logout' : 'Login'}
                    </button>
                </Link>
            </ul>
        </div>
        </Route>
       
    )
}
export default Navbar