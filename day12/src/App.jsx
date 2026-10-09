import React, { useState, useEffect } from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Home from './Components/Home';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

  }, [])
  // console.log(products);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App