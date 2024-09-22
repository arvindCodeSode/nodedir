// import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { json } from "react-router-dom";

const SignUp = ()=>{

    const [ name,setName]=useState('');
    const [ email,setEmail]=useState('');
    const [ password,setPassword]=useState('');

    async function submitForm()
    {
        console.log(name,email,password);
            let result = await fetch("http://localhost:5000/register",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json"
            }

        })
        result = await result.json();
        console.localhost(result);
    }
    return(

        <div className="reg-form">
            <h2>Singup</h2>
            <input type="name" name="name" value={ name } onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" /> 
            <input type="email" name="email" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" /> 
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password" /> 
            <button type="button" onClick={ submitForm } >Submit</button>
        </div>
    )
}
export default SignUp;