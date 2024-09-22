import logo from './logo.svg';
import './App.css';
import Nav from './component/common/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
              <Route path='/' element={<h1>Home</h1>}></Route>
              <Route path='/product' element={<h1>Product</h1>}></Route>
              <Route path='/category' element={<h1>Category</h1>}></Route>
              <Route path='/signup' element={<h1>Signup</h1>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
