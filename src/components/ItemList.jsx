//@ts-check
import React from 'react'
import Item from'./Item';

export default function ItemList({ items }) {
    const listado = items;

    return (
        <>
            {listado &&
                listado.map((item, i) => (
                    <div className='col-3' key={i}>
                        <Item item={item} ></Item>
                    </div>
                ))}
        </>
    )
}
