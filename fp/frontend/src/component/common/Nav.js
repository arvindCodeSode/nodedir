import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{

    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/product'>Product</Link> </li>
                <li><Link to='/category'>Category</Link> </li>
                <li><Link to='/signup'>Signup</Link> </li>
            </ul>
        </nav>
    )
}
export default Nav;