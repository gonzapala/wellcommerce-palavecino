//@ts-check
import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

export default function Item({ item }) {
    return (
        <>
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
                    </div>
                </div>
            </div>

        </>
    )
}
