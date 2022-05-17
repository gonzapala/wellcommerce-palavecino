//@ts-check
import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function ItemListContainer() {
	const [listado, setListado] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	function fetchListado() {
		setLoading(true);
		setError("");
	}

	const products = [
		{
			id: 1,
			title: 'Remera Roja',
			description: 'Remera Roja 100% algodón. ',
			price: 1280.25,
			stock: 10,
			talle: 'M',
			pictureUrl: 'https://static.dafiti.com.ar/p/shaffe-co-2290-970609-1-product.jpg',
		},
		{
			id: 2,
			title: 'Remera negra',
			description: 'Remera negra 100% algodón.',
			price: 1289.99,
			stock: 15,
			talle: 'S',
			pictureUrl: 'https://static.dafiti.com.ar/p/shaffe-co-4256-500609-1-product.jpg',
		},
		{
			id: 2,
			title: 'Remera Blanca',
			description: 'Remera Blanca 100% algodón.',
			price: 1289.99,
			stock: 2,
			talle: 'S',
			pictureUrl: 'https://static.dafiti.com.ar/p/vinson-3430-394413-1-product.jpg',
		},
		{
			id: 2,
			title: 'Remera Azul',
			description: 'Remera Azul 100% algodón.',
			price: 1289.99,
			stock: 7,
			talle: 'S',
			pictureUrl: 'https://static.dafiti.com.ar/p/vinson-7929-494413-1-product.jpg',
		},
	];

	const trearListado = new Promise((res, rej) => {
		setTimeout(() => {
			res(products);
		}, 2000);
	});
	console.log(trearListado);

	trearListado
		.then((result) => {
			setListado(result);
		})
		.catch((error) => {
			setError(error);
		})
		.finally(() => {
			setLoading(false);
		});

	//esto es cuando arranca el componente
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
		<div className="container" style={{ padding: 50 }}>

			<div className='text-right d-none'>
				<button className='btn btn-sm btn-outline-primary pull-right' onClick={() => fetchListado()}>
				{loading ? "Loading..." : "Refresh"}
				</button>
				{error && "Error al cargar listado"}
			</div>

			{loading ? "Loading..." : 
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
	)
}

