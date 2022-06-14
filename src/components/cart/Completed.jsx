//@ts-check
import React, { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { cartContext } from '../../contextos/CartContext';
import {getFirestore, updateDoc, doc} from 'firebase/firestore';
export default function Completed() {
    const { id } = useParams();
    const { cart, clearCart } = useContext(cartContext)
    const db = getFirestore();

    function updateStock(){
        cart.forEach(element => {
            const myProdcut = {
                stock: element.stock-element.cantidad,
            };
            const myDocumento = doc(db, "productos", element.id);
            console.log(element.id, myProdcut)
            updateDoc(myDocumento, myProdcut)
            .then(() => console.log("salio todo bien"))
            .catch((e) => {
                console.log("salio todo mal", e);
            });
        });
        
    }

    useEffect(() => {
        console.log(id)
        if(id){
            updateStock();
            clearCart();
        }
    }, [])
    
    return (
        <>

            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-10 col-sm-12 offset-md-1">
                        <div className='card text-center p-5 m-5 text-dark'>
                        <h2 className='text-dark'><CheckCircleIcon></CheckCircleIcon> Compra Finalizada</h2>
                        <p className='my-3'>Tu número <del></del> orden es: {id}</p>
                        <p className='my-3'>¡Gracias por elegirnos!</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
