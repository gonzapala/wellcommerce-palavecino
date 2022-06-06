//@ts-check
import React, { useContext } from "react";
import "./CartWidget.css";
import {cartContext} from '../../contextos/CartContext'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { cart } = useContext(cartContext);
  return (
    <>
    <Link className={`cart-button badge rounded-pill ${cart.length > 0 ? "bg-primary" : "bg-secondary"}`} to='/cart'>
        {cart.length > 0 && <ShoppingCartIcon />}
        {cart.length === 0 && <ShoppingCartOutlinedIcon />}
        {cart.length}
    </Link>
    </>
  );
}
