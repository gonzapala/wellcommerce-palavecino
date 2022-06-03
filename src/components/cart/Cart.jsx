//@ts-check
import React, { useContext } from 'react'
import { contextoGeneral } from '../../contextos/Context';
import Item from '../Item';
import '../cart/Cart.css';

export default function Cart() {
	const { cart } = useContext(contextoGeneral);
	return (
		<>
			<div className="container mt-3 mb-3">
				<div className="row">
					<div className="col-sm-10">
						<h2>Cart</h2>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Nombre</th>
									<th scope="col">Descripción</th>
									<th scope="col">Talle</th>
									<th scope="col">Precio</th>
								</tr>
							</thead>

							<tbody>
								{cart &&
									cart.map((item, i) => (
										<tr key={i}>
											<th scope="row">{i+1}</th>
											<td>
												{item.nombre}<br></br>
												<img src={item.imagen} className='img' alt={item.nombre} />
											</td>
											
											<td>{item.descripcion}</td>
											<td>{item.talle}</td>
											<td>{item.precio}</td>
										</tr>
									))}

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}
