import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css'

const Header = () => {
    return (
    <nav>
        <ul>
            <li><NavLink className={
                ({ isActive }) => isActive ? 'current' : undefined 
                // 2nd OPTION :
                // { return isActive ? 'current' : undefined }
                
            } 
                to='/'>News</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='home'>Home</NavLink></li>
        </ul>
        
    </nav>
    )
    
}

export default Header;


// EXAMPLE FROM https://reactrouter.com/docs/en/v6/components/nav-link
// let activeStyle = {
//     textDecoration: "underline",
//   };

// style={({ isActive }) =>
// isActive ? activeStyle : undefined
// } 
// // isActive comes with NavLink
