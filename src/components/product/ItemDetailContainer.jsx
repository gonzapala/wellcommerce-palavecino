//@ts-check
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import Loader from '../shared/Loader';
import { products } from '../data/data.js';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer({ itemId }) {
    const {id} = useParams();
    const [item, setItem] = useState({
        id: null,
        title: '',
        description: '',
        price: null,
        stock: null,
        talle: '',
        pictureUrl: ''
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function find(id) {
        return products.find(item => item.id === id)
    }

    function fetchItem() {
        setLoading(true);
        setError("");
      
    }
    //se ejecuta cuando se monta el componente
    useEffect(() => {
        // uso en lugar de fetch
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(find(itemId));
            }, 2000);
        });
        console.log(getItem);

        getItem
        .then((result) => {
            setItem({
                id: result.id,
                title: result.title,
                description: result.description,
                price: result.price,
                stock: result.stock,
                talle: result.talle,
                pictureUrl: result.pictureUrl
            });
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });

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
