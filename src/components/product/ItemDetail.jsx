//@ts-check
import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount';
// import Image from 'material-ui-image'


export default function ItemDetail({ item }) {

    function onAdd(cant) {
        // console.log('onAdd ', cant)
        // setCount(cant);
        // countItem(cant);
    }
    return (
        <div className="item-detail card col-8 offset-2 mt-5">
            <div className="row">
                <div className="col-7">
                    <div className="img-container">
                        <img src={item.pictureUrl} className='w-100' alt={item.description} />
                    </div>
                </div>
                <div className="col-5">
                    <div className="details">
                        <p className="badge bg-secondary">Solo quedan {item.stock} disponibles</p>
                        <h5 className='pt-3'>
                            {item.title}
                        </h5>
                        <p>{item.description}</p>
                        <p><span className="badge rounded-pill text-bg-light">Talle {item.talle}</span></p>

                        <h4 className=''><strong>$ {item.price}</strong></h4>
                        <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
                        {/* <p className="text-secondary">
                        <span className={`badge rounded-pill ${count > 0 ? "bg-success" : "bg-secondary"}`}>
                            {count}
                        </span>
                        &nbsp; agregados</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
