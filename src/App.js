import './App.scss';
import Header from './component/Navigation/Header';
import Navbar from './component/Navigation/Navbar';
import { Routes, Route } from 'react-router-dom';
import Productlist from './component/Products/Productlist';
import Product from './component/Products/Product';
import Basket from './component/Checkout/Basket';
import { useEffect, useState } from 'react';
import Detail from './component/Navigation/Detail';
import Review from './component/Checkout/Review';
import Filter from './component/Products/Filter';
import Footer from './component/Navigation/Footer';
// import Signin from './component/Auth/';
// import Signout from './component/Auth/';
// import Signup from "./component/Checkout/Create";
import Navbardesc from './component/Navigation/Navbardesc';
import Shipping from './component/Checkout/Shipping';
import Home from './component/Navigation/Home';
import Checkout from './component/Checkout/CheckoutStage1';
import Guestcheckout from './component/Checkout/Guestcheckout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const getCategory = () => category;
  return (
    <>


      <Navbar countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Navbardesc countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Header' element={<Header category={category} />} />
        <Route exact path='/about' element={<Detail />} />
        <Route exact path='/filter' element={<Filter />} />
        <Route exact path='/Productlist' element={<Productlist category="" />} />
        {/* <Route exact path='/' element={<Signin />} /> */}
        <Route exact path='/Guestcheckout' element={<Guestcheckout />} />
        <Route exact path='/Review' element={<Review />} />
        <Route exact path='/Checkout' element={<Checkout />} />
        {/* <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/' element={<Signout />} /> */}
        <Route exact path='/products/:id' element={<Product onAdd={onAdd} />} />
        <Route exact path='/cart' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route exact path='/Shipping' element={<Shipping cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
