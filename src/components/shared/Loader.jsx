//@ts-check
import React from 'react'
import './Loader.css';
export default function loader() {
  return (
    <>
    <div className="lds-grid m-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <br></br>Cargando...
    </>
  )
}
