//@ts-check
import React from 'react'
import Item from'./Item';

export default function ItemList({ items }) {
    const listado = items;

    return (
        <>
            {/* {listado?.length > 0 &&
                listado.map((item) => <p key={item.id}>{JSON.stringify(item)}</p>)} */}
            {listado &&
                listado.length === 0 ? <p className="text-light text-center">No se encontró ningún producto.</p> :
                listado.map((item) => (
                    <div className='col-sm-3' key={item.id}>
                        <Item item={item} ></Item>
                    </div>
                ))}
        </>
    )
}
