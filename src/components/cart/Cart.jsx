//@ts-check
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../contextos/CartContext';
import Loader from '../shared/Loader';
import '../cart/Cart.css';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Cart() {
	const { cart, calcularTotal, quitarDelcarro, clearCart } = useContext(cartContext);
	const [totalPagar, setTotalPagar] = useState(0);
	const [loading, setLoading] = useState(false);
	
	useEffect(() => {
		setLoading(true);
		// console.log('cart al montar component: ', cart)
		setTimeout(() => {
			setTotalPagar(calcularTotal());
			setLoading(false);
		}, 500);

	}, [])

	useEffect(() => {
		// console.log('cambio de cart')
		setTotalPagar(calcularTotal());
	}, [cart])

	return (
		<>
			
				<div className="container mt-3 mb-3">
					<div className="row">
						<div className="col-sm-10 offset-1">
							<h2 className='text-light'>Cart</h2>
							{loading ? <Loader /> :
								cart.length > 0 ? 
								<div className="card">
									<table className="table">
										<thead className='table-dark'>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Nombre</th>
												<th scope="col">Descripción</th>
												<th scope="col">Talle</th>
												<th scope="col">Precio</th>
												<th scope="col"></th>
											</tr>
										</thead>

										<tbody>
											{cart &&
												cart.map((item, i) => (
													
													<tr key={i}>
														<th scope="row">{i + 1}</th>
														<td>
															<img src={item.imagen} className='img' alt={item.nombre} /><br></br>
															{item.nombre}
														</td>

														<td>{item.descripcion}</td>
														<td>{item.talle}</td>
														<td>${item.precio} x {item.cantidad}<br></br>
															${(item.precio * item.cantidad).toFixed(2)}
														</td>
														<td>
															<button className="btn btn-outline-secondary btn-sm" onClick={() => quitarDelcarro(item)}>Eliminar</button>
															
														</td>
													</tr>
												))}
											<tr>
											{/* */}
												<td colspan="6"  className='td-total'>
												{/* .toFixed(2) */}
													Total: <strong>${cart && totalPagar > 0 && totalPagar}</strong>
												</td>
											</tr>
										</tbody>
									</table>
									<div className='w-100 text-center'>
										<button className="btn btn-outline-secondary btn-sm" onClick={() => clearCart([])}>Limpiar Carro</button>
									</div>
								</div>
								:
									<div className='card text-center p-5 m-5 text-dark'>
										<p>
										<ShoppingCartOutlinedIcon /> No hay elementos agregados al carrito.<br></br>
										</p>
										<Link to='/' className='btn btn-outline-secondary m-auto mt-5 text-decoration-none'><StorefrontIcon></StorefrontIcon> Explorar tienda</Link>
									</div>
							}
						</div>
					</div>
				</div>
			
		</>
	)
}
