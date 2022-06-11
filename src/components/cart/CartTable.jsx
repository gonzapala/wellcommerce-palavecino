//@ts-check
import { useContext} from 'react';
import { cartContext } from '../../contextos/CartContext';
import '../cart/Cart.css';

export default function CartTable({canEdit}) {
    const { cart, quitarDelcarro } = useContext(cartContext);
    return (
        <>
            <table className="table table-responsive">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>

                <tbody>
                    {cart &&
                        cart.map((item, i) => (

                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>
                                    <img src={item.imagen} className='img' alt={item.nombre} /><br></br>
                                </td>

                                <td>
                                    {item.nombre}<br></br>
                                    {item.descripcion}<br></br>
                                    <small>Talle: {item.talle}</small><br></br>
                                    { canEdit.canEdit && 
                                        <button className="btn btn-outline-secondary btn-sm" onClick={() => quitarDelcarro(item)}>Eliminar</button>
                                    }
                                </td>
                                <td>
                                    {item.cantidad > 1 ? item.cantidad + ' Unidades' : item.cantidad + ' Unidad'}<br></br>
                                    {item.descuento ?
                                        <>
                                            <span className={`${item.descuento ? "text-line-through" : ""}`}>${item.precio}</span>&nbsp;
                                            {item.descuento && <span className={`${item.descuento ? "" : ""}`}>${item.precio - (item.precio * (item.descuento / 100))}</span>}
                                            <br />
                                            <span>Precio: </span>${((item.precio - (item.precio * (item.descuento / 100))) * item.cantidad).toFixed(2)}
                                        </>
                                        :
                                        <>
                                            <span>Precio: </span>${(item.precio * item.cantidad).toFixed(2)}
                                        </>
                                    }
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    )
}
