//@ts-check
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from '../../contextos/CartContext';
import '../cart/Cart.css';
import Loader from '../shared/Loader';
import CartTable from './CartTable';
import './Checkout.css';
import './switch.css';

export default function Checkout() {
    const db = getFirestore();
    const navigate = useNavigate();
    const { cart, calcularTotal } = useContext(cartContext);
    const [totalPagar, setTotalPagar] = useState(0);
    const [loading, setLoading] = useState(false);
    const [envio, setEnvio] = useState(false);
    const [form, setForm] = useState({ name: '', phone: null, email: '', payment: 1, adress: '' });
    const [formOk, setFormOk] = useState({ state: true, message: '' });
    const [formasPago] = useState(
        [
            {
                value: 1,
                nombre: 'Efectivo'
            },
            {
                value: 2,
                nombre: 'Tarjeta de Crédito'
            },
            {
                value: 3,
                nombre: 'Tarjeta de Débito'
            }
        ]
    );

    function finalizarCompra() {
        if (!validarCampos()) return;

        const orden = {
            buyer: {
                ...form
            },
            order: [...cart],
            total: totalPagar,
        }

        const orders = collection(db, "ordenes");
        addDoc(orders, orden)
            .then(({ id }) => {
                navigate("/completed/" + id);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function handdleSwitch() {
        setEnvio(!envio);
    }

    function validarCampos() {
        console.log(form);
        if (form.name.length < 3) {
            setFormOk({ state: false, message: "El nombre debe contar con más de 3 letras." });
            return false
        }
        if (form.phone === null || form.phone === '') {
            setFormOk({ state: false, message: "Debe ingresar un número de teléfono válido." });
            return false
        }
        const email = form.email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        // console.log(email);
        if (email === null) {
            setFormOk({ state: false, message: "Debe ingresar un correo electrónico válido." });
            return false
        }
        if (envio && form.adress === '') {
            setFormOk({ state: false, message: "Debe ingresar una dirección válida." });
            return false
        }

        setFormOk({ state: true, message: "" });
        return true;
    }

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setForm(prevState => ({
            ...prevState,    // keep all other key-value pairs
            [name]: value       // update the value of specific key
        }));



    }
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setTotalPagar(calcularTotal());
            setLoading(false);
        }, 500);

    }, [])

    useEffect(() => {
        setTotalPagar(calcularTotal());
    }, [cart])

    return (
        <>

            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-10 col-sm-12 offset-md-1">
                        <h2 className='text-light'>Resumen de la compra</h2>
                        {loading ?
                            <>
                                <Loader />
                            </>
                            :
                            cart.length > 0 ?
                                <div className="card p-3">
                                    <CartTable canEdit={{ canEdit: false }}></CartTable>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td colspan="4" className='td-total'>
                                                    <div className="alert alert-success" role="alert">
                                                        Total: <strong>${cart && totalPagar > 0 && totalPagar}</strong>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <form className='p-3'>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h4>Información del Cliente</h4>
                                                <div className="form-text mb-3">* Campos Requeridos</div>
                                                {!formOk.state &&
                                                    <div className="alert alert-warning" role="alert">
                                                        {formOk.message}
                                                    </div>
                                                }
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Nombre y Apellido *</label>
                                                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" required
                                                        name="name" value={form.name} onChange={(e) => handleInputChange(e)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="phone" className="form-label">Teléfono *</label>
                                                    <input type="number" className="form-control" id="phone" aria-describedby="emailHelp" required
                                                        name="phone" value={form.phone} onChange={(e) => handleInputChange(e)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email *</label>
                                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required
                                                        name="email" value={form.email} onChange={(e) => handleInputChange(e)} />
                                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-4">
                                                    <h4>Métodos de Pago y Envío</h4>
                                                    <div className='form-floating'>
                                                        <select className='form-select' id="floatingSelect" aria-label="Seleccione forma de pago"
                                                            name="payment" onChange={(e) => handleInputChange(e)}>
                                                            {formasPago?.length > 0 &&
                                                                formasPago.map((item) => <option key={item.value} value={item.value}
                                                                    selected={form.payment === item.value ? 'selected' : ''}>{item.nombre}</option>)}
                                                        </select>
                                                        <label htmlFor="floatingSelect">Seleccione forma de pago</label>
                                                    </div>
                                                </div>
                                                <div className="mb-3">

                                                    <div className="btn-container mb-3">
                                                        <DirectionsRunIcon></DirectionsRunIcon>&nbsp;
                                                        <label className="switch btn-color-mode-switch">
                                                            <input type="checkbox" name="color_mode" id="color_mode" value="1" />
                                                            <label htmlFor="color_mode" data-on="Envío a domicilio" data-off="Retiro del Local" className="btn-color-mode-switch-inner"
                                                                onClick={() => handdleSwitch()}></label>
                                                        </label>
                                                        &nbsp;
                                                        <LocalShippingIcon></LocalShippingIcon>
                                                    </div>
                                                    {
                                                        envio ?
                                                            <div className="mb-3" >
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Dirección de Envío</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                                    placeholder='Ingrese dirección a donde se enviará el pedido.' required
                                                                    name="adress" value={form.adress} onChange={(e) => handleInputChange(e)} />
                                                            </div>
                                                            :
                                                            <div className="mb-3" >
                                                                <label htmlFor="exampleInputEmail1" className="form-label">Dirección de Retiro</label>
                                                                <br></br>
                                                                <a href="https://goo.gl/maps/EANrcLLw1QPk9Ye58" target="_blank"><LocationOnIcon></LocationOnIcon> La Plata 852, Santiago del Estero</a>
                                                                <br></br>
                                                                <small id="emailHelp" className="form-text">(Click para ver en maps)</small>
                                                            </div>
                                                    }
                                                </div>

                                            </div>


                                        </div>
                                    </form>
                                    <div className='w-100 text-center'>
                                        <button className="btn btn-primary btn-sm" onClick={() => finalizarCompra()}
                                        >Concretar Compra</button>
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
