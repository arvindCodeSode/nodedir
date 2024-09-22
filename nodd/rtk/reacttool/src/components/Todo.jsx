import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch= useDispatch();
 

  return(
    <>
        <h1>Todo list</h1>
        <table style={{border:'1px solid #ccc'}}>
            <thead>
                <tr style={{border:'1px solid #ccc'}}>
                <th style={{border:'1px solid #ccc'}}>Task</th>
                <th style={{border:'1px solid #ccc'}}>Action</th>
                </tr>
            </thead>
            <tbody>
       
                {
                    todos.map((todo)=>(

                        <tr style={{border:'1px solid #ccc'}} key={todo.id}>
                            <td style={{border:'1px solid #ccc'}}>{todo.text}</td>
                            <td style={{border:'1px solid #ccc'}}> <button type="button" onClick={()=>{ dispatch(removeTodo(todo.id)) }}>Remove</button></td>
                        </tr>
                    ))
                }
        </tbody>
         </table>
    </>
  )
};
export default Todo;
