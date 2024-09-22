import React from "react";
import { useState } from "react";
const AddProudct = () => {
    const [ name,setName ] = useState("");
    const [ email,setEmail ] = useState("");
    const [ password,setPassword ] = useState("");
    async function Submit()
    {
        let result = await fetch("http://localhost:5000/register",{
            method:"post",
            body:{name,email,password},
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        console.log(result);

    }

    return (

        <div>
            <h1>
                Singup User
            </h1>
            <form>
               
                <div>
                    <input type="text" value={ name } onChange={ (e)=>{ setName(e.target.value)  } } placeholder="Enter Name"  />
                    <input type="email" value={ email } onChange={ (e)=>{ setEmail(e.target.value)  } } placeholder="Enter Email"  />
                    <input type="password" value={ password } onChange={ (e)=>{ setPassword(e.target.value)  } } placeholder="Enter Password"  />
                    <button type="button" onClick={ ()=>{ Submit() } }>Submit </button>
                </div>
            </form>
        </div>
    )

}
export default AddProudct;