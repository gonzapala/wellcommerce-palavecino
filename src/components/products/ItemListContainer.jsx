//@ts-check
import { useEffect, useState } from 'react';

import ItemList from './ItemList';

import Loader from '../shared/Loader';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where
} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Categories from '../filters/Categories';
import './ItemListContainer.css';

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

	useEffect(() => {
		fetchListado();
		let misDocumentos;
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
				setListado(docs.map((item) => ({ id: item.id, ...item.data() })));
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

