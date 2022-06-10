//@ts-check
import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

export default function Item({ item }) {
       
    return (
        <>
            <div className="card item mb-3">
                <div className="card-body text-center p-0 pb-3">
                    <div className="img-container">
                        <p className="badge bg-secondary disponibles">Solo quedan {item.stock} disponibles</p>
                        <img src={item.imagen}
                            className='w-100' alt={item.nombre} />
                        { item.descuento && <span className="badge bg-warning descuento">-{item.descuento}%</span> } 
                    </div>
                    <div className="details">
                        <p className='pt-3'>
                            {item.nombre} <span className="badge rounded-pill text-bg-light	">Talle {item.talle}</span>
                        </p>
                        <p className='descipcion'>{item.descripcion}</p>

                        <h5 className='precio'>
                                <span className={`${item.descuento ? "text-line-through" : ""}`}>${item.precio}</span>&nbsp;
                                { item.descuento &&  <span className={`${item.descuento ? "" : ""}`}>${item.precio - (item.precio * (item.descuento / 100))}</span>}
                        </h5>
                        <Link to={`/item/${item.nombre.replaceAll(' ', "-").toLowerCase()}/${item.id}`} className='btn btn-primary w80'>Ver Detalles</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
