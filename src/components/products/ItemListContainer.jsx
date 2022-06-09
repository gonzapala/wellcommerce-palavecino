//@ts-check
import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';

import Loader from '../shared/Loader';
// import { categorias } from '../data/data.js'
import { useParams } from 'react-router-dom';
import Categories from '../filters/Categories'

import {
	collection,
	getDocs,
	addDoc,
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

	function add(){
		addDoc(collection(db, "productos"), {
			nombre: 'Jean Azul',
			descripcion: 'Jean Azul 100% algodón.',
			precio: 5600,
			stock: 7,
			talle: 'S',
			imagen: 'https://outlet.penguinargentina.com/uploads/picture/image/26989/FQNHB020489-2.jpg',
			categoria_key: 'jeans'
	});}

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
				// where("precio", ">", 4)
			);
		}
	

		getDocs(misDocumentos).then(({ docs }) => {
			if (docs) {
				setListado(docs.map((item) => ({ id: item.id, ...item.data() })));
				console.log('documents: ', listado)
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
						<button className="btn btn-outline-secondary btn-sm d-none"  onClick={() => add()}>Agregar</button>
					</div>
				</div>
				{error && <p>"Error al cargar listado"</p>}
			</div>
		</>
	)
}

