import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

        return(
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/addproduct'>Add Product</Link>
                    </li>
                    <li>
                        <Link to='/updateproduct'>Update Product</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/logout'>Logout</Link>
                    </li>
                </ul>
            </nav>
        )

}
export default Nav;