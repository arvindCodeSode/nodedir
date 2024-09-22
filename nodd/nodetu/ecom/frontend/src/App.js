import './App.css';
import Nav from './component/common/Nav';
import Footer from './component/common/Footer';
import SignUp from './component/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App1">
        <BrowserRouter>
        <Nav></Nav>
        <Routes>
            <Route path='/' element={<h1> Home Page </h1>}></Route>
            <Route path='/addproduct' element={<h1> Add Product </h1>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
