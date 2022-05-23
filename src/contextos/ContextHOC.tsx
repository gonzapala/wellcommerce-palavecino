//@ts-check
import React, { createContext, useState } from 'react'

export const contextoGeneral = createContext(undefined);

function ContextHOC({ children }) {
    const [darkmode, setDarkmode] = useState();
    const [cart, setCart] = useState();
    function cambiarDarkmode(params) {

    }
    function agregarAlcarro(params) {

    }
    return (
        <>
            <contextoGeneral.Provider value={{ darkmode, cambiarDarkmode }}>
                {children}
            </contextoGeneral.Provider>
        </>
    )
}

export default ContextHOC;

// import React from 'react'

// function contextHoc() {
//   return (
//     <div>contextHoc</div>
//   )
// }

// export default contextHoc