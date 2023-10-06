import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <NavLink to='/'> About </NavLink>
            <NavLink to='/contact'> Contact </NavLink>
            <NavLink to='/user'> User </NavLink>
            <NavLink to='/search'> Search </NavLink>
        </>
    )
}

export default Menu;