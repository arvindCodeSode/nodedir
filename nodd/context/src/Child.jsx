import React from "react";
import { useContext } from "react";
import { GlobalInfo } from "./App";

const Child = ()=>{
    const {appcolor} = useContext(GlobalInfo)
    console.log(appcolor);
    return(
        <h1 style={{color:appcolor}}>This is the child element</h1>
    )
}
export default Child;