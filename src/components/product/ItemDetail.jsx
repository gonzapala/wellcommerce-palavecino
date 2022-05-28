//@ts-check
import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Image from 'material-ui-image'


export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)
    const [agregado, setAgregado] = useState(false);

    function onAdd(cant) {
        console.log('onAdd ', cant)
        setCount(cant);
        // countItem(cant);
        setAgregado(true);
    }

    function handleRemove() {
        setCount(0)
        onAdd(0);
        setAgregado(false);
    }
    return (
        <div className="item-detail card col-8 offset-2 mt-5">
            <div className="row">
                <div className="col-7">
                    <div className="img-container">
                        <img src={item.imagen} className='w-100' alt={item.nombre} />
                    </div>
                </div>
                <div className="col-5">
                    <div className="details">
                        <p className="badge bg-secondary">Solo quedan {item.stock} disponibles</p>
                        <h5 className='pt-3'>
                            {item.nombre}
                        </h5>
                        <p>{item.descripcion}</p>
                        <p><span className="badge rounded-pill text-bg-light">Talle {item.talle}</span></p>

                        <h4 className=''><strong>$ {item.precio}</strong></h4>
                        {
                            !agregado ?
                                <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
                                :
                                <div>
                                    <p className="text-secondary">
                                        <span className={`badge rounded-pill ${count > 0 ? "bg-success" : "bg-secondary"}`}>
                                            {count}
                                        </span>
                                        &nbsp; agregados al carrito.
                                    </p>
                                    <Link to="/cart" className="btn btn-primary">Finalizar Compra</Link>
                                    <button className="btn btn-outline-secondary" onClick={() => handleRemove()}> Quitar </button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
