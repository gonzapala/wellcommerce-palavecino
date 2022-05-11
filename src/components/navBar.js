import React, { Component } from 'react';
import logo from '../logo.svg';
import './navBar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div>
                    <a className="item logo-content" href="#">
                        <img src={logo} className="logo" alt="logo" /> 
                        <span> Mini Market</span>
                    </a>
                </div>
                <ul className="menu">
                    <li className="item"><a href="#">Inicio</a></li>
                    <li className="item"><a href="#">Carrito</a></li>
                    <li className="item"><a href="#">Promos</a></li>
                    <li className="item"><a href="#">Contacto</a></li>
                    {/* <li className="item button secondary"><a href="#">Sign Up</a></li> */}
                    {/* <li className="toggle"><a href="#"><i className="fas fa-bars"></i></a></li> */}
                </ul>
                <a className="item button" href="#">Ingresar</a>
            </nav>
        )
    }
}