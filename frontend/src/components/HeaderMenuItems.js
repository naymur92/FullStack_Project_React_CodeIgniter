import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function HeaderMenuItems() {
  // Add active class
  const location = useLocation();
  const isActive = (path) => {
    if (path == window.location.pathname) {
      return 'current-menu-ancestor';
    }
    return null;
  };
  return (
    <>
      <li className={`menu-item ${isActive('/')}`}>
        <Link to="/">
          <span>Home</span>
        </Link>
      </li>
      <li className={`menu-item ${isActive('/about')}`}>
        <Link to="/about">
          <span>About us</span>
        </Link>
      </li>
      <li className={`menu-item ${isActive('/farm')}`}>
        <Link to="/farm">
          <span>Farm</span>
        </Link>
      </li>
      <li className={`menu-item ${isActive('/shop')}`}>
        <Link to="/shop">
          <span>Products</span>
        </Link>
      </li>
      <li className={`menu-item ${isActive('/recipes')}`}>
        <Link to="/recipes">
          <span>Recipes</span>
        </Link>
      </li>
      <li className={`menu-item ${isActive('/contacts')}`}>
        <Link to="/contacts">
          <span>Contacts</span>
        </Link>
      </li>
    </>
  );
}

export default HeaderMenuItems;
