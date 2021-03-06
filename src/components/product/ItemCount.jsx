//@ts-check
import { useState } from "react";
import './ItemCount.css';

export default function ItemCount({ stock, initial, cantidad, onAdd }) {
	const [itemCount, setItemCount] = useState(initial);

	const handleChange = (event) => {
		if (Number(event.value) >= 0 && Number(event.value) <= stock) {
			setItemCount(event.value)
		} else {
			event.value = initial;
			setItemCount(initial)
		}
	}

	function addElement() {
		if (itemCount >= stock) {
			setItemCount(stock)
		} else {
			setItemCount(Number(itemCount) + 1);
		}
	}

	const removeElement = () => {
		if (itemCount <= 0) {
			setItemCount(0)
		} else {
			setItemCount(Number(itemCount) - 1);
		}
	}

	function add() {
		onAdd(itemCount);
	}

	return (
		<>
			<div className="w80 m-auto">
				<form>
					<div className="counter input-group">
						<button className="btn btn-outline-secondary" type="button" id="button-addon1"
							onClick={() => removeElement()}
							disabled={itemCount <= 0}> - </button>
						<input type="number" min="0" max={stock}
							className="form-control"
							value={itemCount}
							onInput={evt => handleChange(evt.target)} />
						<button className="btn btn-outline-secondary" type="button" id="button-addon2"
							onClick={() => addElement()}
							disabled={itemCount >= stock}> + </button>
					</div>

					<button className="btn btn-info w-100 m-0" type="button"
						onClick={() => add()}
						disabled={itemCount === 0 || stock === 0 || cantidad === stock}
					> Agregar
					</button>
				</form>
			</div>
		</>
	);
}
