import React from "react"
import { Link,useNavigate } from "react-router-dom"


const Nav = ()=>{
    let auth = localStorage.getItem('user');
    let authData = auth?JSON.parse(auth):'';
    console.log(authData);
    const navigate = useNavigate();
    function logout(){
        localStorage.removeItem('user');
        navigate('/login');
    }
    return (
        <nav className="navbar">
            {
                auth?
                <>
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Product</Link> </li>
                    <li><Link to='/category'>Category</Link> </li>
                    <li><Link onClick={()=>{ logout() }}>Logout</Link></li>
                </ul>
                <ul className="right-nav">
                    <li><Link onClick={()=>{ logout() }}>Hi {authData?authData.name:''}</Link></li>
                </ul>
                </>
                :
                <>
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                </ul>
                <ul className="right-nav">
                    <li><Link to='/login'>Login</Link> </li><li><Link to='/register'>Regiter</Link> </li>
                </ul>
                </>
            }
        </nav>
    )
}   
export default Nav;