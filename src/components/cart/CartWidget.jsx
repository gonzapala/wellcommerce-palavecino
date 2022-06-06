//@ts-check
import React, { useContext } from "react";
import "./CartWidget.css";
import {cartContext} from '../../contextos/CartContext'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { cantidadItems } = useContext(cartContext);
  return (
    <>
    <Link className={`cart-button badge rounded-pill ${cantidadItems > 0 ? "bg-primary" : "bg-secondary"}`} to='/cart'>
        {cantidadItems > 0 && <ShoppingCartIcon />}
        {cantidadItems === 0 && <ShoppingCartOutlinedIcon />}
        {cantidadItems}
    </Link>
    </>
  );
}
