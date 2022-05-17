import './App.css';
import './bootstrap.min.css'
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
	
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<section>
				<h1>
					Wellcomerce
				</h1>
				<ItemListContainer />
			</section>
		</div>
	);
}

export default App;


