import React  from "react";
import { Link } from "react-router-dom";

const Nav = ()=>{

    return(
        <ul className="AppNav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addproduct">Add Product</Link></li>
            <li><Link to="/updateproduct">Update Product</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/User">User</Link></li>
            <li><Link to="/signup">Singup</Link></li>
            <li><Link to="/Logout">Logout</Link></li>
        </ul>
    )
}
export default Nav;