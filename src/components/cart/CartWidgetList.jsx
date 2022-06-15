//@ts-check
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../contextos/CartContext';
import './CartWidgetList.css';

export default function CartWidgetList() {
    const { cart, calcularTotal } = useContext(cartContext);
    useEffect(() => {

    }, [cart])

    return (
        <>
            <ul className={`cartWidgetList ${cart.length === 0 ? "d-none" : ""}`}>
                {cart &&
                    cart.map((item, i) => (
                        <>
                            <li key={i} className="cart-item d-flex">
                                <img src={item.imagen} className='img me-2' alt={item.nombre} />
                                <div>
                                    {item.nombre}<br></br>
                                    <small>Talle: {item.talle}</small><br></br>
                                    <small>Cantidad: {item.cantidad}</small><br></br>
                                    <strong className='mt-1'>${item.precio}</strong>
                                </div>
                            </li>

                        </>
                    ))}
                <li className='text-right'>
                    Total:
                    <strong>${calcularTotal()}</strong>
                </li>
                <li>
                    <Link to='/cart' className='btn btn-sm btn-primary w-100 m-0 p-1'>Ir al Carrito</Link>
                </li>
            </ul>
        </>
    )
}
