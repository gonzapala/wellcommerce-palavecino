//@ts-check
import React, { useState } from "react";
import './ItemCount.css'

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
			
			<div className="w80 m-auto">
				<form>
				<div className="input-group">
					<button className="btn btn-outline-secondary" type="button" id="button-addon1"
						onClick={removeElement}
						disabled={itemCount <= 0}> - </button>
					<input type="number" min="0" max={stock}
					 	className="form-control"
						value={itemCount}
						onInput={evt => handleChange(evt.target)}  />
					<button className="btn btn-outline-secondary" type="button" id="button-addon2"
						onClick={addElement}
						disabled={itemCount >= stock}> + </button>
				</div>
				</form>
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
