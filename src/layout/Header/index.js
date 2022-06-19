import React from 'react';
import { NavLink } from "react-router-dom";
import { BackButton } from '../../components';
import './style.css'

const Header = () => {
    const activeClass = ({ isActive }) => isActive ? 'current' : undefined 
    return (
    <nav>
        <ul>
            <li><NavLink className={ activeClass // with NavLink we can set an active Class         NavLink to = a hfer
                // ({ isActive }) => isActive ? 'current' : undefined 
                // 2nd OPTION :
                // { return isActive ? 'current' : undefined }
                
            } 
                to='/'>News</NavLink></li>
            <li><NavLink className={ activeClass} to='/about'>About</NavLink></li>
            <li><NavLink className={ activeClass} to='home'>Home</NavLink></li>
            
            <BackButton />
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
