import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    let auth = localStorage.getItem('user');


    const navigate = useNavigate();
    if(auth){
        navigate('/')
    }
    const [errors,setError] = useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    async function submitForm(){
        let result = await fetch('http://localhost:5000/user/login', {
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-type':'application/json'
            }
        });
        result = await result.json();
        if(result.status)
        {
            localStorage.setItem('user',JSON.stringify(result.data));
            navigate('/');
        }else{

            if(!result.status){
                setError(result.errors)
                console.log('name',errors);
                console.log('password',errors.password);
                alert('Error');
            }
        }
    }
    
    return (
        <>
        <div className="center-div">
            <h3>Login</h3>
            <input type="email" placeholder="Enter Email"  onChange={(e)=>{  setEmail(e.target.value) }} value={email}   /><br /> 
            <input type="password" placeholder="Enter Password"  onChange={(e)=>{  setPassword(e.target.value) }} value={password}   /><br /> 
            <button onClick={()=>{ submitForm() }}>Login</button>
        </div>
        </>
    )

}
export default Login;