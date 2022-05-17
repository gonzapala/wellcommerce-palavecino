//@ts-check
import React, { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
	const [itemCount, setItemCount] = useState(initial);
	
	const handleChange = (event) => {
		console.log('event.value: ', event.value, stock);
		if(Number(event.value) >= 0 && Number(event.value) <= stock){
			setItemCount(event.value)
		}else{
			console.log('No está en el rango.');
			event.value = initial;
			setItemCount(initial)
		}
		// if(event.value == ''){
		// 	console.log('vacio');
		// 	setItemCount(initial)
		// }
	}
	
	function addElement(){
		console.log(itemCount)
		if(itemCount >= stock){
			setItemCount(stock)
		}else{
			setItemCount(  Number(itemCount) + 1);
		}
	}
	
	const removeElement = () => {
		if(itemCount <= 0){
			setItemCount(0)
		}else{
			setItemCount(  Number(itemCount) - 1);
		}

	}

	function add(){
		onAdd(itemCount);
	}

	function remove(){
		setItemCount(0)
		onAdd(0);
	}
	return (
		<>
			<div>
				<p className="badge bg-secondary">Solo quedan {stock} disponibles</p><br></br>
				<img src="https://static.dafiti.com.ar/p/shaffe-co-2290-970609-1-product.jpg" 
					style={{width: 250}} alt="" />
				<p>
					Remera Roja <span className="badge rounded-pill text-bg-light	">Talle L</span>
					<br></br>
				</p>
			</div>
			<div>
				<button className="btn btn-info"
					onClick={removeElement}
					disabled={itemCount <= 0}> - </button>

				<input  type="number" min="0" max={stock}
					value={itemCount}
					onInput={evt => handleChange(evt.target)}/>

				<button className="btn btn-info" 
					onClick={addElement}
					disabled={itemCount >= stock}> + </button>
			</div>

			<button className="btn btn-info" 
				onClick={() => add()}
				disabled={itemCount === 0 || stock === 0}
			> Agregar </button>
			<button className="btn btn-outline-info" 
				onClick={remove}> Quitar </button>
			
		</>
	);
}
