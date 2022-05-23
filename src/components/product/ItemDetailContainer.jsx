//@ts-check
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import Loader from '../shared/Loader';
import { products } from '../data/data.js';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState({
        id: null,
        nombre: '',
        descripcion: '',
        precio: null,
        stock: null,
        talle: '',
        imagen: ''
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
                res(find(id));
            }, 2000);
        });
        console.log(getItem);

        getItem
        .then((result) => {
            setItem({
                id: result.id,
                nombre: result.nombre,
                descripcion: result.descripcion,
                precio: result.precio,
                stock: result.stock,
                talle: result.talle,
                imagen: result.pictureUrl
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
