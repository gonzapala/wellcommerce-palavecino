//@ts-check
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../contextos/CartContext';
import Loader from '../shared/Loader';
import '../cart/Cart.css';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './Checkout.css';
import './switch.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function Checkout() {
    const { cart, calcularTotal } = useContext(cartContext);
    const [totalPagar, setTotalPagar] = useState(0);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [envio, setEnvio] = useState(false);

    const db = getFirestore();

    function finalizarCompra() {
        const orden = {
            buyer: {
                name: "jaun",
                phone: "565655",
                email: "asasa@asas.com",
            },
            order: [...cart],
            total: totalPagar,
        }
        const orders = collection(db, "ordenes");
        addDoc(orders, orden).then(({ id }) => setId(id));
    }
    useEffect(() => {
        setLoading(true);
        // console.log('cart al montar component: ', cart)
        setTimeout(() => {
            setTotalPagar(calcularTotal());
            setLoading(false);
        }, 500);

    }, [])

    useEffect(() => {
        // console.log('cambio de cart')
        setTotalPagar(calcularTotal());
    }, [cart])

    return (
        <>

            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-10 col-sm-12 offset-md-1">
                        <h2 className='text-light'>Carrito de Compras</h2>
                        {loading ?
                            <>
                                <Loader />
                                <div>{!id ? "generando pedido..." : "tu orden es: " + id}</div>
                            </>
                            :
                            cart.length > 0 ?
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <form className='p-3'>
                                                <h4>Información del Cliente</h4>
                                                <div id="emailHelp" className="form-text mb-3">* Campos Requeridos</div>
                                                <div className="mb-3">
                                                    <label for="nombre" className="form-label">Nombre y Apellido *</label>
                                                    <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="telefono" className="form-label">Teléfono *</label>
                                                    <input type="number" className="form-control" id="telefono" aria-describedby="emailHelp" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="email" className="form-label">Email *</label>
                                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-sm-6">
                                            <form className='p-3'>
                                                <div className="mb-3">
                                                    <h4>Métodos de Pago y Envío</h4>
                                                    <div className='form-floating'>
                                                        <select className='form-select' id="floatingSelect" aria-label="Seleccione forma de pago">
                                                            <option value="1" selected>Efectivo</option>
                                                            <option value="2">Tarjeta de Crédito</option>
                                                            <option value="3">Débito</option>
                                                        </select>
                                                        <label for="floatingSelect">Seleccione forma de pago</label>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                 
                                                    <div className="btn-container">
                                                        <DirectionsRunIcon></DirectionsRunIcon>&nbsp;
                                                        <label className="switch btn-color-mode-switch">
                                                            <input type="checkbox" name="color_mode" id="color_mode" value="1" />
                                                            <label for="color_mode" data-on="Envío a domicilio" data-off="Retiro del Local" className="btn-color-mode-switch-inner"></label>
                                                        </label>
                                                        &nbsp;
                                                        <LocalShippingIcon></LocalShippingIcon>
                                                    </div>
                                                    {
                                                        envio &&
                                                        <div className="mb-3" >
                                                            <label for="exampleInputEmail1" className="form-label">Dirección de Envío</label>
                                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                        </div>
                                                    }
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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
                                            <tr>
                                                {/* */}
                                                <td colspan="4" className='td-total'>
                                                    {/* .toFixed(2) */}
                                                    Total: <strong>${cart && totalPagar > 0 && totalPagar}</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className='w-100 text-center'>
                                        <button className="btn btn-primary btn-sm" onClick={() => finalizarCompra()}>Finalizar Compra</button>

                                        <div>{!id ? "generando pedido..." : "tu orden es: " + id}</div>
                                    </div>
                                </div>
                                :
                                <div className='card text-center p-5 m-5 text-dark'>
                                    <p>
                                        <ShoppingCartOutlinedIcon /> No hay elementos agregados al carrito.<br></br>
                                    </p>
                                    <Link to='/' className='btn btn-outline-secondary m-auto mt-5 text-decoration-none'><StorefrontIcon></StorefrontIcon> Explorar tienda</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
