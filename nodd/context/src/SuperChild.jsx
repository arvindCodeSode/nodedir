import React, { useContext } from "react";
import { GlobalInfo } from "./App";

const SuperChild = ()=>{
    const {appcolor} = useContext(GlobalInfo);
    return(
        <h1 style={{color:appcolor}}>This is the SuperChild element</h1>
    )
}
export default SuperChild;