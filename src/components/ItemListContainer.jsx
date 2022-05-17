//@ts-check
import React from 'react'
import ItemCount from './ItemCount';

export default function ItemListContainer() {
  let products = [
    {
      id: 1001,
      name: 'Prod 1',
      text: 'Text ',
      stock: 10
      // price: 1280,25
    },
    {
      id: 1001,
      name: 'Prod 1',
      text: 'Text ',
      // price: 1280,25
      stock: 20
    }
  ];
 
  return (
    <div style={{padding: 50}}>
        <ItemCount stock="5" initial="1"/>
    </div>
  )
}
