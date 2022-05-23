//@ts-check
import './App.css';
import './bootstrap.min.css'
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/product/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContextHOC from './contextos/ContextHOC';

function App() {
	
	return (
		<>
			<ContextHOC>
				<BrowserRouter >
					<Navbar />	
					<Routes>
						<Route path="/" element={<ItemListContainer/>}/>
						<Route path="/category/:id" element={<ItemListContainer/>}/>
						<Route path="/item/:id" element={<ItemDetailContainer/>}/> 
						<Route path="*" element="Error 404"/>
					</Routes>
				</BrowserRouter>
			</ContextHOC>
		</>
	);
}

export default App;


