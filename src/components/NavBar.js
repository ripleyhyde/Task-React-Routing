import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product-list">Product List</Link>
      <Link to="/detail">Detail</Link>
    </div>
  );
}

export default NavBar;
