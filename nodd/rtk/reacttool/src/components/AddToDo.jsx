import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddToDo = ()=>{
    const dispatch = useDispatch();
    
    const [text,setText]=useState('');
    const AddToDoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');

    }

    return(
        <>
            <form onSubmit={AddToDoHandler}>
                <input type="text" value={text} onChange={(e)=>{  setText(e.target.value)  }}
                 placeholder="Enter Todo" />
                 <button type="submit">Add</button>
            </form>
        </>
    )
}
export default AddToDo;