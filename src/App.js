import './App.css';
import './bootstrap.min.css'
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/product/ItemDetailContainer';

function App() {
	
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<section>
				<h1>
					Wellcommerce
				</h1>
				<ItemDetailContainer itemId={2} />
				<ItemListContainer />
			</section>
		</div>
	);
}

export default App;


