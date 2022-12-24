import './App.css';
import Ok from './pages/ok.js';
import Home from './pages/Home.js';
import Product from './pages/product.js';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/Home">home</Link>
        <Link to="/product">Products</Link>
        <Link to="/ok">ok</Link>
      </header>
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/ok" element={<Ok />} />
        </Routes>
      </main>
      
   </BrowserRouter>
  ); 
}

export default App;