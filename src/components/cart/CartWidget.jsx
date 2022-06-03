import React, { useContext } from "react";
import "./CartWidget.css";
import {contextoGeneral} from '../../contextos/Context'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { cart } = useContext(contextoGeneral);
  return (
    <>
    <Link className="button cart-button" to='/cart'>
        {cart.length}
        {cart.length > 0 && <ShoppingCartIcon />}
        {cart.length === 0 && <ShoppingCartOutlinedIcon />}
    </Link>
    </>
  );
}
