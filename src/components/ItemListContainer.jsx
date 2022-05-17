//@ts-check
import React, { useState } from 'react'

import ItemList from './ItemList';

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export default function ItemListContainer() {
	let products = [
		{
			id: 1,
			name: 'Remera Roja',
			text: 'Remera Roja 100% algodón. ',
			stock: 10,
			count: 0,
			talle: 'M',
          	img: 'https://static.dafiti.com.ar/p/shaffe-co-2290-970609-1-product.jpg',
			price: 1280.25
		},
		{
			id: 2,
			name: 'Remera negra',
			text: 'Remera negra 100% algodón.',
			stock: 15,
			count: 0,
			talle: 'S',
			img: 'https://static.dafiti.com.ar/p/shaffe-co-4256-500609-1-product.jpg',
        	price: 1289.99
		}
	];
	const [cart, setCart] = useState(0)
	function countItems(cant) {
		setCart(Number(cart) + Number(cant));
		//setear elementos del carrito
		//setear count de cada producto seleccionado
		//restar si decremento o elimino el elemento del carrito
	}

	return (
		<div className="container" style={{ padding: 50 }}>
			
			<ItemList 
				items={products}
				countItems={countItems}
			/>

			<hr />
			<p className="text-secondary">
				<span className={`badge rounded-pill ${cart > 0 ? "bg-success" : "bg-secondary"}`}>
					{cart > 0 && <ShoppingCartIcon />}
					{cart === 0 && <ShoppingCartOutlinedIcon />}
					{cart}
				</span>
				&nbsp; prendas en el carrito</p>
		</div>
	)
}
