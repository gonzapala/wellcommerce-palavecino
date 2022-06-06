//@ts-check
import React, { createContext, useState } from 'react'

export const cartContext = createContext(undefined);

export default function CartContext({ children }) {
    const [cart, setCart] = useState([]);

    function agregarAlcarro(item, cant) { 
        console.log(item)
        const found = cart.find(element => element.id === item.id);
        if(found){
            found.cantidad = Number(found.cantidad) + Number(cant);
            console.log('found.cantidad ', found.cantidad)
        }else{
            item.cantidad = cant;
            setCart([...cart, item]);
        }
        // console.log('luego de agregar ', cart)
    }

    function calcularTotal(){
        let total = 0;
        cart.forEach(item => {
			total = total + (item.precio * item.cantidad)
		});
        return total.toFixed(2)
    }

    function quitarDelcarro(id) {
        const index = cart.findIndex(element => element.id === id);
        // console.log('id ', id, cart, 'index ', index)
        if(index !== -1){
            quitarIndex(index);
        }
    }

    function quitarIndex(index) {
            console.log('splice: ', cart.splice(index, 1))
            setCart([...cart]);
            // console.log('luego de eliminar: ', cart)

            //setCart(cart); // si hago esto el carro queda con un elemento menos, pero no cambia el context, por lo tanto no se rerenderiza el componente Cart ni widgetCartList (no sé por qué sucede)
            //creo que es porque setCart recibe un array, pero al mandarle de esa manera no acrualiza el valor, o no lo toma bien.
    }

    function clearCart(){
        setCart([]);
    }
    return (
        <>
            <cartContext.Provider value={{ cart, agregarAlcarro, calcularTotal, quitarDelcarro, clearCart }}>
                {children}
            </cartContext.Provider>
        </>
    )
}
