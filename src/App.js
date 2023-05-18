import { createContext, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './css/mobile.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SignUP from './components/SignUp';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import FAQ from './components/FAQ';
import Privacy from './components/Privacy';
Aos.init();

export const CartContext = createContext();

function App() {
	const [cart, setCart] = useState([]);
	const location = useLocation();
	const getRoutes = () => {
		if (
			location.pathname.toLocaleLowerCase().includes('login') ||
			location.pathname.toLocaleLowerCase().includes('signup')
		)
			return true;
		else return false;
	};
	return (
		<CartContext.Provider value={{ cart, setCart }}>
			<div className='app'>
				{!getRoutes() && <Navbar />}

				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/signup' element={<SignUP />} />
					<Route exact path='/shop' element={<Shop />} />
					<Route exact path='/product/:id' element={<Product />} />
					<Route exact path='/cart' element={<Cart />} />
					<Route exact path='/contact' element={<Contact />} />
					<Route exact path='/checkout' element={<Checkout />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/faq' element={<FAQ />} />
					<Route exact path='/privacy-policy' element={<Privacy />} />
				</Routes>
				{!getRoutes() && <Footer />}
			</div>
		</CartContext.Provider>
	);
}

export default App;
