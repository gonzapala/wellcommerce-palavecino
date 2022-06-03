//@ts-check
import './App.css';
import './bootstrap.min.css'
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/product/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Context from './contextos/Context';

function App() {
	
	return (
		<>
		<Context>
			<BrowserRouter >
				<Navbar />	
				<Routes>
					<Route path="/" element={<ItemListContainer/>}/>
					<Route path="/category/:categoria" element={<ItemListContainer/>}/>
					<Route path="/item/:id" element={<ItemDetailContainer/>}/> 
					<Route path="/cart" element={<Cart/>} />
					<Route path="*" element="Error 404"/>
				</Routes>
			</BrowserRouter>
		</Context>
		</>
	);
}

export default App;


