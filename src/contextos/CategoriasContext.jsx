//@ts-check
import React, { createContext, useEffect, useState } from 'react'
import {getFirestore, collection, getDocs, query} from 'firebase/firestore';

export const categoriasContext = createContext(undefined);

export default function CategoriasContext({ children }) {
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState("");

    const db = getFirestore();

    
  useEffect(() => {
    const queryFirestore = query(
        collection(db, "categorias")
    );

    getDocs(queryFirestore).then(({ docs }) => {
        if (docs) {
            setCategorias(docs.map((item) => ({ id: item.id, ...item.data() })));
            console.log('categoriasContext: ', categorias)
        } else {
            throw new Error('Ocurrió un error.')
        }
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
        });

  }, []);
   
    return (
        <>
            <categoriasContext.Provider value={{ categorias }}>
                {children}
            </categoriasContext.Provider>
        </>
    )
}
