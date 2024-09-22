import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Regiter = ()=>{
    let auth = localStorage.getItem('user');
   
    const navigate = useNavigate();
    if(auth){
        navigate('/')
    }
    const [errors,setError] = useState({});
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setCPassword] = useState('');
    async function submitForm(){
        console.log(name,email,password,confirmPassword);
        let result = await fetch('http://localhost:5000/user/register',{
            method:"POST",
            body:JSON.stringify({name,email,password,confirmPassword}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json();
        console.log(result);
        if(result.status){
            console.log(result.data);
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
    // console.log(errors.password);
    return (
        <>
        <div className="center-div">
            <h3>Register</h3>
            <input type="text" placeholder="Enter Name"  onChange={(e)=>{  setName(e.target.value) }} value={name}   />
            <span className="errors"></span>
            <br /> 
            <input type="email" placeholder="Enter Email"  onChange={(e)=>{  setEmail(e.target.value) }} value={email}   /><br /> 
            <input type="password" placeholder="Enter Password"  onChange={(e)=>{  setPassword(e.target.value) }} value={password}   /><br /> 
            <input type="password" placeholder="Enter Confirm Password"  onChange={(e)=>{  setCPassword(e.target.value) }} value={confirmPassword}   /><br /> 
            <button onClick={()=>{ submitForm() }}>Register</button>
        </div>
        </>
    )

}
export default Regiter;