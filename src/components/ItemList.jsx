//@ts-check
import React from 'react'
import Item from'./Item';

export default function ItemList({ items, countItems }) {
    const listado = items;
    function countItem(a){
        console.log('countItem: ', a)
        countItems(a);
    }
    return (
        <>
            <div className="row">
            {listado &&
                listado.map((item, i) => (
                    <div className='col-3' key={i}>
                        <Item item={item} countItem={countItem}></Item>
                    </div>
                ))}
            </div>
        </>
    )
}
