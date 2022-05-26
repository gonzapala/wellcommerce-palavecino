//@ts-check
import React from 'react'
import './Loader.css';
export default function loader() {
  return (
    <>
    <div className='text-center'>
    <div className="lds-grid m-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <br></br>Cargando...
    </div>
    </>
  )
}
