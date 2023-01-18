import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { API_PATH } from '../API_PATH';

function Shop() {
  const [products, setProducts] = useState([]);
  const [cartItems, onAdd, onRemove, onEmpty, itemsPrice] = useOutletContext();

  const getProducts = async () => {
    await axios.get(`${API_PATH}/prodlists`).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getProducts();
    const cont = document.getElementsByTagName('body')[0];
    cont.className =
      'archive shoppg post-type-archive post-type-archive-product woocommerce woocommerce-page body_style_wide body_filled article_style_stretch layout_excerpt template_excerpt scheme_original top_panel_show top_panel_above sidebar_show sidebar_left sidebar_outer_hide vc_responsive';

    return () => {
      cont.className = '';
    };
  }, []);

  return (
    <>
      <div className="top_panel_title top_panel_style_1 title_present breadcrumbs_present scheme_original">
        <div className="bg_cust_1 top_panel_title_inner top_panel_inner_style_1 title_present_inner breadcrumbs_present_inner">
          <div className="content_wrap">
            <h1 className="page_title">Shop</h1>
            <div className="breadcrumbs">
              <a className="breadcrumbs_item home" href="/">
                Home
              </a>
              <span className="breadcrumbs_delimiter" />
              <span className="breadcrumbs_item current">Shop</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page_content_wrap page_paddings_yes">
        <div className="content_wrap">
          <div className="content">
            <div className="list_products shop_mode_thumbs">
              <nav className="woocommerce-breadcrumb">
                <a href="index.html">Home</a>&nbsp;&#47;&nbsp;Shop
              </nav>
              <header className="woocommerce-products-header" />
              <p className="woocommerce-result-count">Showing all 9 results</p>
              <form className="woocommerce-ordering" method="get">
                <select name="orderby" className="orderby">
                  {/* <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option> */}
                  <option value="date" selected="selected">
                    Sort by newness
                  </option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
                <input type="hidden" name="q" value="shop.html" />
              </form>
              <ul className="products">
                {products?.map((product) => (
                  <li
                    key={product.id}
                    className="product has-post-thumbnail column-1_3 instock purchasable"
                  >
                    <div className="post_item_wrap">
                      <div className="post_featured">
                        <div className="post_thumb">
                          <a className="hover_icon hover_icon_link" href="single-product.html">
                            <img
                              src={`${API_PATH}/assets/images/products/${product.product_image}`}
                              className="attachment-shop_catalog size-shop_catalog"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="post_content">
                        <h2 className="woocommerce-loop-product__title">
                          <a href="single-product.html">{product.product_name}</a>
                        </h2>
                        <span className="price">
                          &#2547;
                          {Number(product.product_price).toFixed(2)}
                        </span>
                        <a
                          role="button"
                          onClick={() => onAdd(product)}
                          className="button add_to_cart_button"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sidebar widget_area scheme_light" role="complementary">
            <div className="sidebar_inner widget_area_inner">
              <aside
                id="woocommerce_widget_cart-2"
                className="widget woocommerce widget_shopping_cart"
              >
                <h4 className="widget_title">Your Cart</h4>
                <div className="widget_shopping_cart_content">
                  {cartItems?.length === 0 ? (
                    <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                  ) : (
                    <>
                      <p>
                        <strong>Total Items: </strong>
                        {cartItems.length}
                      </p>
                      <p>
                        <strong>Total Quantity: </strong>
                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                      </p>
                      <p>
                        <strong>Total Price: </strong>{' '}
                        <span className="price"> &#2547; {itemsPrice.toFixed(2)}</span>
                      </p>
                      <Link to="/cart" className="btn btn-warning text-white">
                        Show Cart
                      </Link>
                    </>
                  )}
                </div>
              </aside>
              {/* <aside
                id="woocommerce_price_filter-2"
                className="widget woocommerce widget_price_filter"
              >
                <h4 className="widget_title">Price Filter</h4>
                <form method="get" action="shop.html">
                  <div className="price_slider_wrapper">
                    <div className="price_slider" />
                    <div className="price_slider_amount">
                      <input
                        type="text"
                        id="min_price"
                        name="min_price"
                        value=""
                        data-min="4"
                        placeholder="Min price"
                      />
                      <input
                        type="text"
                        id="max_price"
                        name="max_price"
                        value=""
                        data-max="136"
                        placeholder="Max price"
                      />
                      <button type="submit" className="button">
                        Filter
                      </button>
                      <div className="price_label">
                        Price:
                        <span className="from" /> &mdash;
                        <span className="to" />
                      </div>
                      <input type="hidden" name="q" value="shop.html" />
                      <div className="clear" />
                    </div>
                  </div>
                </form>
              </aside> */}
              <aside className="widget woocommerce widget_product_categories">
                <h4 className="widget_title">Categories</h4>
                <ul className="product-categories">
                  <li className="cat-item">
                    <a href="#">All</a>
                  </li>
                  <li className="cat-item">
                    <a href="#">Butter</a>
                  </li>
                  <li className="cat-item">
                    <a href="#">Cheese</a>
                  </li>
                  <li className="cat-item">
                    <a href="#">Ice Cream</a>
                  </li>
                  <li className="cat-item">
                    <a href="#">Milk</a>
                  </li>
                  <li className="cat-item">
                    <a href="#">Yoghurt</a>
                  </li>
                </ul>
              </aside>
              <aside className="widget woocommerce widget_product_tag_cloud">
                <h4 className="widget_title">Tags</h4>
                <div className="tagcloud">
                  <a href="#" aria-label="buttery (3 products)">
                    buttery
                  </a>
                  <a href="#" aria-label="cheese (3 products)">
                    cheese
                  </a>
                  <a href="#" aria-label="cream (7 products)">
                    cream
                  </a>
                  <a href="#" aria-label="italian (7 products)">
                    italian
                  </a>
                  <a href="#" aria-label="organic (3 products)">
                    organic
                  </a>
                  <a href="#" aria-label="taste (3 products)">
                    taste
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
