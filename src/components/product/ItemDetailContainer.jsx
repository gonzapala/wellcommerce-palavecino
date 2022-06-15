//@ts-check
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../shared/Loader';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const { id } = useParams();
    const db = getFirestore();

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function fetchItem() {
        setLoading(true);
        setError("");
    }

    useEffect(() => {
        fetchItem();

        const queryFirestore = doc(db, "productos", id);

        getDoc(queryFirestore).then((producto) => {
            if (producto) {
				setItem({ id: producto.id, ...producto.data() });
				// console.log('document: ', item)
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

    }, []);


    return (
        <>
            {loading ? <Loader /> :
                item &&
                <ItemDetail item={item} />
            }
            {error && <p>"Error al cargar producto, vuelva a intentar."</p>}
        </>
    )
}
