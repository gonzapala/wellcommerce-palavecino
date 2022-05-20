import './App.css';
import './bootstrap.min.css'
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/product/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
	
	return (
		<>
		<header className="App-header">
			
		</header>
		<div className="App">

			<BrowserRouter >
				<Navbar />	
				<Routes>
					<Route path="/" element={<ItemListContainer/>}/>
					<Route path="/list" element={<ItemListContainer/>}/>
					<Route path="/category/:id" element={<ItemListContainer/>}/>
					<Route path="/item/:id" element={<ItemDetailContainer/>}/> 
					<Route path="*" element="Error 404"/>
				</Routes>
			</BrowserRouter>
		</div>
		</>
	);
}

export default App;


