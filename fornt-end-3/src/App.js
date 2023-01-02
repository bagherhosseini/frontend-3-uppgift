import './App.css';
import Test from './pages/test.js';
import Home from './pages/Home.js';
import UserProfile from './pages/Product.js';
import ProductList from './pages/ProductList.js';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <header >
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/ProductList">Products</Link>
        <Link className='links' to="/test">test</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Product/:userId" element={<UserProfile />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      
   </BrowserRouter>
  )

}

export default App;