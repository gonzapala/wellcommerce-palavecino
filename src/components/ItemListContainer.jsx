//@ts-check
import React, { useContext, useEffect, useState } from 'react'

import ItemList from './ItemList';

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Loader from './shared/Loader';
import { products } from '../data/data.js'
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
	const {id} = useParams();
	
	const [listado, setListado] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	// const {darkmode} = useContext(contextoGeneral)

	function fetchListado() {
		setLoading(true);
		console.log(loading)
		setError("");
	}

	function filter(id){
		let productos;
		if (id) {
			productos = products.filter(item => item.categoria === Number(id))
		}else{
			productos = products
		}
		return productos
	}

	// obtener datos locales
	const trearListado = new Promise((res, rej) => {
		setTimeout(() => {
			res(
				filter(id)
			);
		}, 2000);
	});
	console.log(trearListado);

	trearListado
		.then((result) => {
			if (result) {
				setListado(result);
				console.log(result)
			} else {
				throw new Error('Ocurrió un error.')
			}
		})
		.catch((error) => {
			setError(error);
		})
		.finally(() => {
			setLoading(false);
			console.log(loading)
		});

	//se ejecuta cuando se monta el componente
	useEffect(() => {
		fetchListado();
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
			<div className="container" style={{ padding: 50 }}>
				{loading ? <Loader /> :
					listado &&
					<ItemList
						items={listado}
						countItems={countItems}
					/>
				}
				{error && <p>"Error al cargar listado"</p>}
				<hr />
				<div className="text-center">
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
			</div>
		</>
	)
}

