//@ts-check
import React, { createContext, useState } from 'react'

export const contextoGeneral = createContext(undefined);

function Context({ children }) {
    const [cart, setCart] = useState([
        {
            id: 1,
            nombre: 'Remera Roja',
            descripcion: 'Remera Roja 100% algodón. ',
            precio: 1280.25,
            stock: 10,
            talle: 'M',
            imagen: 'https://static.dafiti.com.ar/p/shaffe-co-2290-970609-1-product.jpg',
            categoria: 1,
            cantidad: 2
        },
        {
            id: 2,
            nombre: 'Remera negra',
            descripcion: 'Remera negra 100% algodón.',
            precio: 1289.99,
            stock: 15,
            talle: 'S',
            imagen: 'https://static.dafiti.com.ar/p/shaffe-co-4256-500609-1-product.jpg',
            categoria: 1,
            cantidad: 2
        }
      ]);
    function agregarAlcarro(params) {

    }
    return (
        <>
            <contextoGeneral.Provider value={{ cart }}>
                {children}
            </contextoGeneral.Provider>
        </>
    )
}

export default Context;