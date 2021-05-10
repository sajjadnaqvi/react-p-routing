import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return(
        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/"> About </NavLink>
        <NavLink activeClassName="active_class" to="/contact">  Contact</NavLink>
        <NavLink activeClassName="active_class" to="/user">  User</NavLink>
        <NavLink activeClassName="active_class" to="/service">Services</NavLink>
        </div>
    );
}

export default Menu;