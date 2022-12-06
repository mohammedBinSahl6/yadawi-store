import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Aos from 'aos';
import 'aos/dist/aos.css'
import SignUP from './components/SignUp';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
Aos.init()


function App() {
  const location = useLocation()

  return (
   <div className='app'>
    {
      !location.pathname.toLocaleLowerCase().includes('login')&&
      <Navbar />
      
    }
   
    
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/signup' element={<SignUP />} />
      <Route exact path='/shop' element={<Shop />} />
      <Route exact path='/product/:id' element={<Product />} />
      <Route exact path='/cart' element={<Cart />} />
    </Routes>
    <Footer />
   </div>
  );
}

export default App;
