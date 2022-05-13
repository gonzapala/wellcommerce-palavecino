import './App.css';

import Navbar from './components/NavBar';
// import SumarContainer from './components/SumarContainer';
import ItemListContainer from './components/ItemListContainer';
function App() {
	
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<section>
				{/* <SumarContainer a={10} b={5}/> */}
				<h1>
					Wellcomerce
				</h1>
				<ItemListContainer />
				
			</section>
		</div>
	);
}

export default App;


