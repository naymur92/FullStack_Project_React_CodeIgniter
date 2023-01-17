import React from 'react';
import { Link } from 'react-router-dom';
import { API_PATH } from '../API_PATH';
import HeaderMenuItems from './HeaderMenuItems';

function Header(props) {
  const { cartItems, onEmpty, itemsPrice } = props;
  return (
    <>
      <header className="top_panel_wrap top_panel_style_4 scheme_original">
        <div className="top_panel_wrap_inner top_panel_inner_style_4 top_panel_position_above">
          <div className="top_panel_middle">
            <div className="content_wrap">
              <div className="contact_logo">
                <div className="logo">
                  <a href="/">
                    <img
                      src="/assets/images/logo.png"
                      className="logo_main"
                      alt=""
                      width="239"
                      height="59"
                    />
                    <img
                      src="/assets/images/logo.png"
                      className="logo_fixed"
                      alt=""
                      width="239"
                      height="59"
                    />
                  </a>
                </div>
              </div>
              <div className="float-end d-flex justify-content-between align-items-center">
                <div className="contact_field contact_cart">
                  <a href="#" className="top_panel_cart_button">
                    <span className="contact_icon icon-1 position-relative" />
                    <span className="position-relative top-0 start-20 translate-middle badge rounded-pill bg-danger">
                      {cartItems.length}
                    </span>
                  </a>
                  <ul className="widget_area sidebar_cart sidebar" style={{ minWidth: '350px' }}>
                    <li>
                      <div className="widget woocommerce widget_shopping_cart">
                        {cartItems?.length === 0 ? (
                          <div className="hide_cart_widget_if_empty">
                            <div className="widget_shopping_cart_content">
                              <p className="woocommerce-mini-cart__empty-message">
                                No products in the cart.
                              </p>
                            </div>
                          </div>
                        ) : (
                          <>
                            <h4 className="m-0 text-center">Cart Items</h4>
                            {cartItems.map((item) => (
                              <div className="cart-item" key={item.id}>
                                <div className="cart-img">
                                  <Link to={`/shop/view-product/${item.id}`}>
                                    <img
                                      src={`${API_PATH}/assets/images/products/${item.product_image}`}
                                      style={{ height: '65px' }}
                                      alt="cart-thumb"
                                    />
                                  </Link>
                                </div>
                                <div className="cart-des">
                                  <Link to={`/shop/view-product/${item.id}`}>
                                    {item.product_name}
                                  </Link>
                                  <p>
                                    &#2547; {Number(item.product_price).toFixed(2)} x {item.qty} =
                                    &#2547; {Number(item.qty * item.product_price).toFixed(2)}
                                  </p>
                                </div>
                                <div className="cart-btn">
                                  <a onClick={() => onEmpty(item)} role="button">
                                    <i className="fa fa-times text-danger" />
                                  </a>
                                </div>
                              </div>
                            ))}
                            <div className="cart-bottom">
                              <div className="cart-subtotal">
                                <p className="mx-4">
                                  Total:{' '}
                                  <b className="float-end">&#2547; {itemsPrice.toFixed(2)}</b>
                                </p>
                              </div>
                              <div className="cart-action">
                                <Link to="/cart" className="btn btn-primary text-white mx-2">
                                  <span>View Cart</span>
                                </Link>
                                <Link
                                  to="/checkout"
                                  className="btn btn-success mx-2 text-white float-end"
                                >
                                  <span>Check Out</span>
                                </Link>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="user_field">
                  <a href="#" className="top_panel_user_button text-warning mt-1">
                    <i className="fa-solid fa-user mt-1" style={{ fontSize: '1.6em' }} />
                  </a>
                  <ul
                    className="widget_area sidebar_cart sidebar mt-4 text-center"
                    style={{ marginRight: '5px' }}
                  >
                    <li>
                      <h4 style={{ margin: '0' }}>Users Section</h4>
                    </li>
                    <li className="d-flex justify-content-between">
                      <Link to="/login" className="btn btn-success text-white my-1">
                        Login
                      </Link>
                      <Link to="/register" className="btn btn-warning text-white my-1">
                        Register
                      </Link>
                    </li>
                    <li>Hello</li>
                    <li>
                      <button className="btn btn-danger my-1">Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu_main_wrap">
                <nav className="menu_main_nav_area menu_hover_fade">
                  <ul id="menu_main" className="menu_main_nav">
                    <HeaderMenuItems />
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header_mobile">
        <div className="content_wrap">
          <div className="menu_button icon-menu" />
          <div className="logo">
            <a href="index.html">
              <img
                src="/assets/images/logo.png"
                className="logo_main"
                alt=""
                width="239"
                height="59"
              />
            </a>
          </div>
        </div>
        <div className="side_wrap">
          <div className="close">Close</div>
          <div className="panel_top">
            <nav className="menu_main_nav_area">
              <ul id="menu_mobile" className="menu_main_nav">
                <HeaderMenuItems />
              </ul>
            </nav>
          </div>
          <div className="panel_bottom" />
        </div>
        <div className="mask" />
      </div>
    </>
  );
}

export default Header;
