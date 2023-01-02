import React from "react";
import { Link } from "react-router-dom";

function HeaderMenuItems() {
  return (
    <>
      <li className="menu-item current-menu-ancestor current-menu-parent">
        <Link to="/">
          <span>Home</span>
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/about">
          <span>About us</span>
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/farm">
          <span>Farm</span>
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/shop">
          <span>Products</span>
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/recipes">
          <span>Recipes</span>
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/contacts">
          <span>Contacts</span>
        </Link>
      </li>
    </>
  );
}

export default HeaderMenuItems;
