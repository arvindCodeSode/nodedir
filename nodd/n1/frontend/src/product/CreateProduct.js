import React from "react";
import { useState,useEffect } from "react";

const CreateProduct = ()=>{
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');
    const [type,setProductType] = useState('');
    const [price,setPrice] = useState('');
    function submitForm(){
        console.log(title,category,type,price);
    }
    
    return (
        <>
        <div className="center-div">
            <h3>Add Product</h3>
            <input type="text" placeholder="Enter Title"  onChange={(e)=>{  setTitle(e.target.value) }} value={title}   /><br /> 
            <input type="email" placeholder="Enter Category"  onChange={(e)=>{  setCategory(e.target.value) }} value={category}   /><br /> 
            <input type="password" placeholder="Enter Product Type"  onChange={(e)=>{  setProductType(e.target.value) }} value={type}   /><br /> 
            <input type="password" placeholder="Enter Price"  onChange={(e)=>{  setPrice(e.target.value) }} value={price}   /><br /> 
            <button onClick={()=>{ submitForm() }}>Add</button>
        </div>
        </>
    )


}