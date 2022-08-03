import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fai">
      <>
        <Link to="/">
          <h3>Home</h3>
        </Link>

        <Link to="/products">
          <h3>Product</h3>
        </Link>

        <Link to="/cart">
          <h3>Cart</h3>
        </Link>

        <Link to="/card">
          <h3>Card</h3>
        </Link>

        <Link to="/signin">
          <h3>Sign-in</h3>
        </Link>

        <Link to="/signout">
          <h3>Sign-out</h3>
        </Link>
      </>
    </div>
  );
}
