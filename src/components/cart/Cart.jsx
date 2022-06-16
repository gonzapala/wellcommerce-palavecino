//@ts-check
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../contextos/CartContext';
import '../cart/Cart.css';
import Loader from '../shared/Loader';
import CartTable from './CartTable';
export default function Cart() {
	const { cart, calcularTotal, quitarDelcarro, clearCart } = useContext(cartContext);
	const [totalPagar, setTotalPagar] = useState(0);
	const [loading, setLoading] = useState(false);
	const [id, setId] = useState("");


	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setTotalPagar(calcularTotal());
			setLoading(false);
		}, 500);

	}, [])

	useEffect(() => {
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
									<CartTable canEdit={{canEdit: true}}></CartTable>
									<table>
										<tbody>
											<tr>
												<td colspan="4" className='td-total'>
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
