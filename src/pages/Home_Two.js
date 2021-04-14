import React from 'react'
import Todos from '../components/Todos';
import TodoContextProvider from '../contexts/TodoContext'
import ThemeContextProvider from '../contexts/ThemeContext'
import ThemeToggle from '../contexts/ThemeContext'
import AuthContextProvider from '../contexts/AuthContext';
import Nav from '../components/Navbar'

  const Home_Two = () => {
    return (
         <React.Fragment>
          
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        <ThemeToggle />
         </React.Fragment>
        
      
    )
}

export default Home_Two