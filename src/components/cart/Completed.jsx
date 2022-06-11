//@ts-check
import React from 'react'
import {useParams} from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Completed() {
    const { id } = useParams();
    console.log(id)
    return (
        <>

            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-10 col-sm-12 offset-md-1">
                        <div className='card text-center p-5 m-5 text-dark'>
                        <h2 className='text-dark'><CheckCircleIcon></CheckCircleIcon> Compra Finalizada</h2>
                        <p className='my-3'>Tu número <del></del> orden es: {id}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
