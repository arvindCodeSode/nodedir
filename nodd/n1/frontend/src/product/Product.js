import React, { useState } from "react";
import { useEffect } from "react";

const Product = ()=>{
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        getProduct();
    },{})

    const getProduct = async ()=>{
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        if(result.status){
            setProduct(result.data);
        }
    }

    return (
       <div>
            <ul className="product product-head">
                <li>Sr. No</li>
                <li>Title</li>
                <li>Description</li>
                <li>Category</li>
                <li>Price</li>
            </ul>
            {
                product.map((item,index)=>(
                    <ul className="product product-head">
                        <li>{index+1}</li>
                        <li>{item.title}</li>
                        <li>{item.description}</li>
                        <li>{item.category}</li>
                        <li>{item.price}</li>
                    </ul>
                ))
            }
           
       </div>
    )

}
export default Product;