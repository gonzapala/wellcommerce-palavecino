//@ts-check
import React, { useState } from "react";

export default function ItemCount({ stock, initial }) {
	const [itemCount, setItemCount] = useState(initial);
	
	const handleChange = (event) => {
		console.log(event.value);
		setItemCount(event.value)
		// if(event.value == ''){
		// 	console.log('vacio');
		// 	setItemCount(initial)
		// }
	}
	
	function addElement(){
		setItemCount( itemCount + 1);
	}
	
	const removeElement = () => {
		setItemCount( itemCount - 1);
	}
	return (
		<>
			{itemCount}
			<button className="btn btn-info" onClick={removeElement} > - </button>
			<input  type="number" min="0" 
				value={itemCount}
				onInput={evt => handleChange(evt.target)}/>
			<button className="btn btn-info" onClick={() => addElement()}> + </button>
			<button className="btn btn-info" onClick={() => addElement()}> Agregar al Carrito </button>
		</>
	);
}
