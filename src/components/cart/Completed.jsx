//@ts-check
import React from 'react'

export default function Completed({idOrden}) {
    return (
        <>

            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-10 col-sm-12 offset-md-1">
                        <h2 className='text-light'>Compra Finalizada</h2>
                        <p>Tu orden es: {idOrden}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
