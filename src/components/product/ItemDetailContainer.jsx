//@ts-check
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import Loader from '../shared/Loader';
import { products } from '../../data/data.js';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState({})

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function fetchItem() {
        setLoading(true);
        setError("");

    }

    // uso en lugar de fetch
    const getItem = new Promise((res, rej) => {
        setTimeout(() => {
            res(products.find(item => item.id === Number(id)));
        }, 2000);
    });

    getItem
        .then((result) => {
            setItem(result);
            // console.log('getItem: ', result);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });

    //se ejecuta cuando se monta el componente
    useEffect(() => {
        fetchItem();
    }, []);


    return (
        <>
            {id}
            {loading ? <Loader /> :
                item &&
                <ItemDetail item={item} />
            }
            {error && <p>"Error al cargar producto, vuelva a intentar."</p>}
        </>
    )
}
