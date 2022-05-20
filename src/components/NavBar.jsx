// esto es un componente basado en clases no funcional como el component App
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        <span> Wellcommerce</span>
                    </a>
                </div>
                <ul className="menu">
                    <li className="item"><Link to="/">Inicio</Link></li>
                    <li className="item"><Link to="/home">Home</Link></li>
                    <li className="item"><Link to="/home">Home</Link></li>
                    <li className="item"><Link to="/home">Home</Link></li>
                </ul>
                <div className="d-flex buttons-container">
                    <CartWidget cant={5}/>
                    <a className="item button" href="www.google.com">Ingresar</a>
                </div>
            </nav>
        )
    }
}