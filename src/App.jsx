//@ts-check
import './App.css';
import './bootstrap.min.css'
import Navbar from './components/core/NavBar';
import ItemListContainer from './components/products/ItemListContainer';
import ItemDetailContainer from './components/product/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import CartContext from './contextos/CartContext';
import CategoriasContext from './contextos/CategoriasContext';
import Checkout from './components/cart/Checkout';

function App() {
	
	return (
		<>
		<CategoriasContext>
		<CartContext>
			<BrowserRouter >
				<Navbar />	
				<Routes>
					<Route path="/" element={<ItemListContainer/>}/>
					<Route path="/category/:categoria" element={<ItemListContainer/>}/>
					<Route path="/item/:nombre/:id" element={<ItemDetailContainer/>}/> 
					<Route path="/cart" element={<Cart/>} />
					<Route path="/checkout" element={<Checkout/>} />
					<Route path="*" element="Error 404"/>
				</Routes>
			</BrowserRouter>
		</CartContext>
		</CategoriasContext>
		</>
	);
}

export default App;


