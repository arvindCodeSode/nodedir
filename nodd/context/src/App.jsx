import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import Child from './Child';
import SuperChild from './SuperChild';
export const GlobalInfo = createContext();

function App() {
  const [color, setColor] = useState('yellow');

  return (
   <GlobalInfo.Provider value={{appcolor:color}}>
    <h1>This is the parent element</h1>
    <Child></Child>
    <SuperChild></SuperChild>
   </GlobalInfo.Provider>
  )
}

export default App
