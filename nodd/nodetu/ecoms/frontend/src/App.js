import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/common/Footer';
import Signup from './components/Signup';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
          <Routes>
              <Route path="/" element={<h1>Home </h1>}></Route>
              <Route path="/signup" element={<Signup></Signup>}></Route>
          </Routes>
      </BrowserRouter>
        <h1>E-Commerce</h1>
        <Footer></Footer>
    </div>
  );
}

export default App;
