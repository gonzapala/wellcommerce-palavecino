//@ts-check
import React, { createContext, useState } from 'react'

export const cartContext = createContext(undefined);

export default function CartContext({ children }) {
    const [cart, setCart] = useState([]);
    const [cantidadItems, setCantidadItems] = useState(0);

    function agregarAlcarro(item, cant) { 
        const found = cart.find(element => element.id === item.id);
        if(found){
            found.cantidad = Number(found.cantidad) + Number(cant);
        }else{
            item.cantidad = cant;
            setCart([...cart, item]);
        }
        setCantidadItems(Number(cantidadItems) + Number(cant));
    }

    function calcularTotal(){
        let total = 0;
        cart.forEach(item => {
			total = total + (item.precio * item.cantidad)
		});
        return total.toFixed(2)
    }

    function quitarDelcarro(item) {
        const index = cart.findIndex(element => element.id === item.id);
        if(index !== -1){
            quitarIndex(index);
            setCantidadItems(Number(cantidadItems) - Number(item.cantidad));
            item.cantidad = 0;
        }
    }

    function quitarIndex(index) {
            cart.splice(index, 1)
            setCart([...cart]);
            //setCart(cart); // si hago esto el carro queda con un elemento menos, pero no cambia el context, por lo tanto no se rerenderiza el componente Cart ni widgetCartList (no sé por qué sucede)
            //creo que es porque setCart recibe un array, pero al mandarle de esa manera no acrualiza el valor, o no lo toma bien.
    }

    function clearCart(){
        setCart([]);
        setCantidadItems(0);
    }
    return (
        <>
            <cartContext.Provider value={{ cart, cantidadItems, agregarAlcarro, calcularTotal, quitarDelcarro, clearCart }}>
                {children}
            </cartContext.Provider>
        </>
    )
}
