// esto es un componente basado en clases no funcional como el component App
import React, { Component } from 'react';
import './NavBar.css';
import logo from '../logo.svg';

import CartWidget from './CartWidget';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div>
                    <a className="item logo-container" href="www.google.com">
                        <img src={logo} className="logo" alt="logo" /> 
                        <span> Mini Market</span>
                    </a>
                </div>
                <ul className="menu">
                    <li className="item"><a href="www.google.com">Inicio</a></li>
                    <li className="item"><a href="www.google.com">Carrito</a></li>
                    <li className="item"><a href="www.google.com">Promos</a></li>
                    <li className="item"><a href="www.google.com">Contacto</a></li>
                    {/* <li className="item button secondary"><a href="www.google.com">Sign Up</a></li> */}
                    {/* <li className="toggle"><a href="www.google.com"><i className="fas fa-bars"></i></a></li> */}
                </ul>
                <div className="d-flex buttons-container">
                    <CartWidget cant={5}/>
                    <a className="item button" href="www.google.com">Ingresar</a>
                </div>
            </nav>
        )
    }
}