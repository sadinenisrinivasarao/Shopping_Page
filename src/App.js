
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './Pages/Shop/Shop';
import { ShopCategory } from "./Pages/ShopCategory/ShopCategory"
import { Product } from "./Pages/Product/Product"
import { Cart } from "./Pages/Cart/Cart"
import { Footer } from './Components/Footer/Footer';
import { Login_sign } from "./Pages/Login_signup/Login_sign"
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kids_banner from "./Components/Assets/banner_kids.png"
import { ProductDetails } from './Components/ProductDetails/ProductDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />}></Route>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />}></Route>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<Login_sign />}></Route>
        </Routes>
        <br />
        <hr />
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
