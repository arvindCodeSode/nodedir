import './App.css';
import Nav from './common/Nav';
import Home from './Home';
import Login from './user/Login';
import Product from './product/Product';
import Regiter from './user/Register';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import PrivateComponent from './PrivateComponent';

function App() {
  return (
    <div >
        <BrowserRouter>
            <Nav></Nav>
          <Routes>
            <Route path='/' element={<Home></Home>}  ></Route>
            <Route element={ <PrivateComponent /> }>
              <Route path='/product' element={<Product />}  ></Route>
              <Route path='/category' element={<h1>Category</h1>}  ></Route>
            </Route>
            <Route path='/login' element={<Login />}  ></Route>
            <Route path='/register' element={<Regiter  />}  ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
