import React from 'react';
import { API_PATH } from '../API_PATH';
import HeaderMenuItems from './HeaderMenuItems';

function Header() {
  return (
    <>
      <header className="top_panel_wrap top_panel_style_4 scheme_original">
        <div className="top_panel_wrap_inner top_panel_inner_style_4 top_panel_position_above">
          <div className="top_panel_middle">
            <div className="content_wrap">
              <div className="contact_logo">
                <div className="logo">
                  <a href="/">
                    <img src="/assets/images/logo.png" className="logo_main" alt="" width="239" height="59" />
                    <img src="/assets/images/logo.png" className="logo_fixed" alt="" width="239" height="59" />
                  </a>
                </div>
              </div>
              <div className="float-end d-flex justify-content-between align-items-center">
                <div className="contact_field contact_cart">
                  <a href="#" className="top_panel_cart_button" data-items="0" data-summa="&#036;0.00">
                    <span className="contact_icon icon-1" />
                    <span className="contact_label contact_cart_label">cart:</span>
                    <span className="contact_cart_totals">
                      <span className="cart_items">0 Items</span>
                      <span className="cart_summa">&#36;0.00</span>
                    </span>
                  </a>
                  <ul className="widget_area sidebar_cart sidebar">
                    <li>
                      <div className="widget woocommerce widget_shopping_cart">
                        <div className="hide_cart_widget_if_empty">
                          <div className="widget_shopping_cart_content">
                            <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="user_field">
                  <a href="#" className="top_panel_user_button text-warning mt-1">
                    <i className="fa-solid fa-user fa-2x" />
                  </a>
                  <ul className="widget_area sidebar_cart sidebar mt-4" style={{ marginRight: '5px' }}>
                    <li>Hello</li>
                    <li>
                      <a href={`${API_PATH}`}>Login</a>
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
              <img src="/assets/images/logo.png" className="logo_main" alt="" width="239" height="59" />
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
