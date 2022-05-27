//@ts-check
import './App.css';
import './bootstrap.min.css'
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/product/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	
	return (
		<>
			<BrowserRouter >
				<Navbar />	
				<Routes>
					<Route path="/" element={<ItemListContainer/>}/>
					<Route path="/category/:categoria" element={<ItemListContainer/>}/>
					<Route path="/item/:id" element={<ItemDetailContainer/>}/> 
					<Route path="*" element="Error 404"/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;


