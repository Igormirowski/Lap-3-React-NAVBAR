import React from 'react'; 
import { useLocation, Link } from 'react-router-dom';


const NotFound = () => {
    const location = useLocation()
    return(
        <h1>
       Sorry, {location.pathname} page not found!
        </h1>
    )

}


export default NotFound; 
