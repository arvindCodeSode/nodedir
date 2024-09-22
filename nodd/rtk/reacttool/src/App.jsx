import { useState } from 'react'
import AddToDo from './components/AddToDo'
import Todo from './components/Todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Redux devtool</h1>
     <AddToDo></AddToDo>
     <Todo></Todo>
    </>
  )
}

export default App
