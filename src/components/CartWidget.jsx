import React from "react";
import "./CartWidget.css";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartWidget({ cant }) {
  const c = cant;
  return (
    <>
      <a className="button cart-button" href="www.google.com">
        {c}
        {c > 0 && <ShoppingCartIcon />}
        {c === 0 && <ShoppingCartOutlinedIcon />}
      </a>
    </>
  );
}
