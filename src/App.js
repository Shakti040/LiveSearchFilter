import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Error from './Error';

import Menu from './Menu';
import User from './User';
import Search from './Search';


const App = () => {

    return (
        <>

            <Menu />
            <Routes>
                <Route exact path='/' Component={About} />
                <Route exact path='/contact' Component={Contact} />
                <Route exact path='/user/:name' Component={User} />
                <Route exact path='/search' Component={Search} />
                <Route Component={Error} />
            </Routes>


        </>
    )
};

export default App;