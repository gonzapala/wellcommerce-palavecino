//@ts-check
import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';

import Loader from './shared/Loader';
import { products } from '../data/data.js'
// import { categorias } from '../data/data.js'
import { useParams } from 'react-router-dom';
import Categories from './filters/Categories'

export default function ItemListContainer() {
	const { categoria } = useParams();


	const [listado, setListado] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	function fetchListado() {
		setLoading(true);
		setError("");
	}

	function filter(cat) {
		let productos;
		if (cat) {
			productos = products.filter(item => item.categoria === Number(cat))
		} else {
			productos = products
		}
		return productos
	}


	//se ejecuta cuando se monta el componente
	useEffect(() => {

		fetchListado();

		// obtener datos locales
		const trearProductos = new Promise((res, rej) => {
			setTimeout(() => {
				res(
					filter(categoria)
				);
			}, 1);
		});
		trearProductos
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
			});
	}, [categoria]);

	return (
		<>
			<div className="container-fluid mb-3" style={{ padding: 50 }}>
				<div className="row">
					<div className="col-sm-2">
						<Categories></Categories>
					</div>
					<div className="col-sm-10">
						<div className="row">
							{loading ? <Loader /> :
								listado &&
								<ItemList
									items={listado}
								/>
							}
						</div>
					</div>
				</div>
				{error && <p>"Error al cargar listado"</p>}
			</div>
		</>
	)
}

