//@ts-check
import React, { useState } from 'react'
import ItemCount from './ItemCount';
import './Item.css'
import { Link } from 'react-router-dom';

export default function Item({ item, countItem }) {

    const [count, setCount] = useState(0)

    function onAdd(cant) {
        console.log('onAdd ', cant)
        setCount(cant);
        countItem(cant);
    }

    return (
        <>
            {/* {item} */}
            <div className="card mb-3">
                <div className="card-body text-center p-0 pb-3">
                    <div className="img-container">
                        <p className="badge bg-secondary disponibles">Solo quedan {item.stock} disponibles</p>
                        <img src={item.imagen}
                            className='w-100' alt={item.nombre} />
                    </div>
                    <div className="details">
                        <p className='pt-3'>
                            {item.nombre} <span className="badge rounded-pill text-bg-light	">Talle {item.talle}</span>
                        </p>
                        <p>{item.descripcion}</p>
                        <h4 className=''>${item.precio}</h4>
                        <Link to={`/item/${item.id}`} className='btn btn-sm btn-primary'>Ver Detalles</Link>

                        {/* <ItemCount stock={item.stock} initial="1" onAdd={onAdd} /> */}
                        <p className="text-secondary">
                            <span className={`badge rounded-pill ${count > 0 ? "bg-success" : "bg-secondary"}`}>
                                {count}
                            </span>
                            &nbsp; agregados</p>
                    </div>
                </div>
            </div>

        </>
    )
}
