//@ts-check
import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Loader from './shared/Loader';
// import { products } from './data/data.js'

export default function ItemListContainer() {
	const [listado, setListado] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");


	function fetchListado() {
		setLoading(true);
		setError("");

		fetch("https://gestory-api.herokuapp.com/api/catalogo/products/35")
			.then((res) => res.json())
			.then((res) => {
				if (res) {
					setListado(res);
					console.log(res)
				} else {
					throw new Error('Ocurrió un error.')
				}
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	//se ejecuta cuando se monta el componente
	useEffect(() => {

		fetchListado();

		// obtener datos locales
		// const trearListado = new Promise((res, rej) => {
		// 	setTimeout(() => {
		// 		res(products);
		// 	}, 2000);
		// });
		// console.log(trearListado);

		// trearListado
		// 	.then((result) => {
		// 		setListado(result);
		// 	})
		// 	.catch((error) => {
		// 		setError(error);
		// 	})
		// 	.finally(() => {
		// 		setLoading(false);
		// 	});

	}, []);


	const [cart, setCart] = useState(0)
	function countItems(cant) {
		setCart(Number(cart) + Number(cant));
		//setear elementos del carrito
		//setear count de cada producto seleccionado
		//restar si decremento o elimino el elemento del carrito
	}

	const cleanCart = () => {
		setCart(0)
	}




	return (
		<>
			<h1>Wellcommerce</h1>
			<div className="container" style={{ padding: 50 }}>

				<div className='text-right d-none'>
					<button className='btn btn-sm btn-outline-primary pull-right' onClick={() => fetchListado()}>
						{loading ? "Loading..." : "Refresh"}
					</button>
					{error && "Error al cargar listado"}
				</div>

				{loading ? <Loader /> :
					listado &&
					<ItemList
						items={listado}
						countItems={countItems}
					/>
				}

				{error && <p>"Error al cargar listado"</p>}


				<hr />
				<p className="text-secondary">
					<span className={`badge rounded-pill ${cart > 0 ? "bg-success" : "bg-secondary"}`}>
						{cart > 0 && <ShoppingCartIcon />}
						{cart === 0 && <ShoppingCartOutlinedIcon />}
						{cart}
					</span>
					&nbsp; prendas en el carrito
				</p>
				<button className="btn btn-sm btn-outline-info"
					onClick={cleanCart}> Vaciar Carrito </button>
			</div>
		</>
	)
}

