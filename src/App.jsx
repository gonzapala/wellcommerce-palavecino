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
import Completed from './components/cart/Completed';
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
					<Route path="/completed/:id" element={<Completed/>} />
					<Route path="*" element="Error 404"/>
				</Routes>
			</BrowserRouter>
		</CartContext>
		</CategoriasContext>
<script
                type="text/javascript"
                src="//media.flixfacts.com/js/loader.js"
                data-flix-distributor="4780"
                data-flix-language="f4"
                data-flix-brand="SAMSUNG"
                data-flix-mpn="UN43T5300AGCZB"
                data-flix-ean="8806090484377"
                data-flix-sku=""
                data-flix-button="flix-minisite"
                data-flix-inpage="flix-inpage"
                data-flix-button-image=""
                data-flix-fallback-language=""
                data-flix-price=""></script>
		</>
	);
}

export default App;


