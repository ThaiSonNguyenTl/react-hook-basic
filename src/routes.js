import React from 'react'
import About_Two from './pages/About_Two'
import Home_Two from './pages/Home_Two'

const routes = [
    {
        path: '/home',
        exact: true,
        main: () => <Home_Two/>

    },
    {
        path: '/about_guava',
        exact: false,
        main: () => <About_Two />
    },
    
]
export default routes