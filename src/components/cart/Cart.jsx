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
	const [id, setId] = useState("");


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
						<div className="col-md-10 col-sm-12 offset-md-1">
							<h2 className='text-light'>Carrito de Compras</h2>
							{loading ? <Loader /> :
								cart.length > 0 ? 
								<div className="card">
									<table className="table table-responsive">
										<thead className='table-dark'>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Nombre</th>
												<th scope="col">Descripción</th>
												<th scope="col">Precio</th>
											</tr>
										</thead>

										<tbody>
											{cart &&
												cart.map((item, i) => (
													
													<tr key={i}>
														<th scope="row">{i + 1}</th>
														<td>
															<img src={item.imagen} className='img' alt={item.nombre} /><br></br>
														</td>

														<td>
															{item.nombre}<br></br>
															{item.descripcion}<br></br>
															<small>Talle: {item.talle}</small><br></br>
															<button className="btn btn-outline-secondary btn-sm" onClick={() => quitarDelcarro(item)}>Eliminar</button>
														</td>
														<td>
														{ item.cantidad > 1 ? item.cantidad + ' Unidades' : item.cantidad + ' Unidad'}<br></br>
														{ item.descuento ? 
															<>
																<span className={`${item.descuento ? "text-line-through" : ""}`}>${item.precio}</span>&nbsp;
                            									{ item.descuento &&  <span className={`${item.descuento ? "" : ""}`}>${item.precio - (item.precio * (item.descuento / 100))}</span>}    
																<br />
																<span>Precio: </span>${( (item.precio - (item.precio * (item.descuento / 100))) * item.cantidad).toFixed(2)}	
															</>
															:
															<>
																<span>Precio: </span>${(item.precio * item.cantidad).toFixed(2)}
															</>
														} 
														</td>
													</tr>
												))}
											<tr>
											{/* */}
												<td colspan="4"  className='td-total'>
												{/* .toFixed(2) */}
													Total: <strong>${cart && totalPagar > 0 && totalPagar}</strong>
												</td>
											</tr>
										</tbody>
									</table>
									<div className='w-100 text-center'>
										<button className="btn btn-outline-secondary btn-sm" onClick={() => clearCart([])}>Limpiar Carro</button>
										<Link to='/checkout' className="btn btn-primary btn-sm">Finalizar Compra</Link>
										
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
