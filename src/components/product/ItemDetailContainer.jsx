//@ts-check
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import Loader from '../shared/Loader';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

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

    // uso en lugar de fetch
    // const getItem = new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res(products.find(item => item.id === Number(id)));
    //     }, 1);
    // });

    // getItem
    //     .then((result) => {
    //         // if(!result.cantidad){
    //         //     result.cantidad = 0;
    //         // }
    //         setItem(result);
    //         // console.log('getItem: ', result);
    //     })
    //     .catch((error) => {
    //         setError(error);
    //     })
    //     .finally(() => {
    //         setLoading(false);
    //     });

    //se ejecuta cuando se monta el componente
    useEffect(() => {
        // fetchItem();

        const myDocumento = doc(db, "productos", id);

        getDoc(myDocumento).then((producto) => {
          console.log(producto.id);
          console.log(producto.data());
    
          setItem({ id: producto.id, ...producto.data() });
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
