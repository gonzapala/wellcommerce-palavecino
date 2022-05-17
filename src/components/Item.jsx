//@ts-check
import React, { useState } from 'react'
import ItemCount from './ItemCount';
import './Item.css'

export default function Item({item, countItem}) {
    
    const [count, setCount] = useState(0)

	function onAdd(cant) {
		console.log('onAdd ', cant)
		setCount(cant);
        countItem(cant);
	}


    return (
    <>
        <div  className="col-3">
            <div className="card">
                <div className="card-body p-0 pb-3">
                    <div className="img-container">
                        <p className="badge bg-secondary disponibles">Solo quedan {item.stock} disponibles</p>
                        <img src={item.img} className='w-100' alt={item.text} />
                    </div>
                    <div className="details">
                        <p className='p-3'>
                            {item.name} <span className="badge rounded-pill text-bg-light	">Talle {item.talle}</span>
                            <br></br>
                        </p>
                        <a className='btn btn-sm btn-primary'>Ver Detalle</a>
                        <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
                        <p className="text-secondary">
                            <span className={`badge rounded-pill ${count > 0 ? "bg-success" : "bg-secondary"}`}>
                                {count}
                            </span>
                            &nbsp; agregados</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
