//@ts-check
import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';

import Loader from '../shared/Loader';
// import { categorias } from '../data/data.js'
import { useParams } from 'react-router-dom';
import Categories from '../filters/Categories'
import './ItemListContainer.css'
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

export default function ItemListContainer() {
	const { categoria } = useParams();

	const db = getFirestore();

	const [listado, setListado] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	function fetchListado() {
		setLoading(true);
		setError("");
	}

	function showListado(){
		console.log('Listado: ', listado)
	}

	//se ejecuta cuando se monta el componente
	useEffect(() => {
		fetchListado();
		let misDocumentos;
		console.log('categoria ', categoria)
		if (categoria === undefined) {
			misDocumentos = query(
				collection(db, "productos")
			);
		} else {
			misDocumentos = query(
				collection(db, "productos"),
				where("categoria_key", "==", categoria),
			);
		}

			
		getDocs(misDocumentos).then(({ docs }) => {
			if (docs) {
				console.log('documents: ', docs)
				// docs.sort((item) => item.categoria_key)
				setListado(docs.map((item) => ({ id: item.id, ...item.data() })));
				console.log('Listado: ', listado)
				showListado();
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
			<div className="container-fluid page mb-3 pt-5">
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

