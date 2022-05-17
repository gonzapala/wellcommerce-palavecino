//@ts-check
import React, { useState } from 'react'
import ItemCount from './ItemCount';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ItemListContainer() {
// let products = [
    //   {
    //     id: 1001,
    //     name: 'Prod 1',
    //     text: 'Text ',
    //     stock: 10
          // img: 'https://static.dafiti.com.ar/p/shaffe-co-4256-500609-1-product.jpg'
    //     // price: 1280,25
    //   },
    //   {
    //     id: 1001,
    //     name: 'Prod 1',
    //     text: 'Text ',
    // img: 'https://static.dafiti.com.ar/p/shaffe-co-2290-970609-1-product.jpg'
    //     // price: 1280,25
    //     stock: 20
    //   }
    // ];
  const [cart, setCart] = useState(0)
  
  function onAdd(cant){
    console.log('onAdd ', cant)
    setCart(cant);
  }
 
  return (
    <div style={{padding: 50}}>
        <ItemCount stock="5" initial="1" onAdd={onAdd} />
		<hr />
        <p className="text-secondary">
			
          	<span className={`badge rounded-pill ${ cart > 0 ? "bg-success" : "bg-secondary"}`}>
				{cart > 0 && <ShoppingCartIcon />}
				{cart === 0 && <ShoppingCartOutlinedIcon />}
			  	{cart}
			</span> 
			&nbsp; prendas en el carrito</p>
    </div>
  )
}
