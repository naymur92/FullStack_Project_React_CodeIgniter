import React from "react";

function Shop() {
  return (
    <>
      <div className="top_panel_title top_panel_style_1 title_present breadcrumbs_present scheme_original">
        <div className="bg_cust_1 top_panel_title_inner top_panel_inner_style_1 title_present_inner breadcrumbs_present_inner">
          <div className="content_wrap">
            <h1 className="page_title">Shop</h1>
            <div className="breadcrumbs">
              <a className="breadcrumbs_item home" href="index.html">
                Home
              </a>
              <span className="breadcrumbs_delimiter"></span>
              <span className="breadcrumbs_item current">Shop</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page_content_wrap page_paddings_yes">
        <div className="content_wrap row">
          <div className="col-3">
            <div className="sidebar widget_area scheme_light">
              <div className="sidebar_inner widget_area_inner">
                <aside id="" className="widget widget_shopping_cart">
                  <h4 className="widget_title">Your Cart</h4>
                  <div className="widget_shopping_cart_content">
                    <p className="">No products in the cart.</p>
                  </div>
                </aside>
                <aside className="widget widget_product_categories">
                  <h4 className="widget_title">Categories</h4>
                  <ul className="product-categories">
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
                <aside className="widget widget_product_tag_cloud">
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
          <div className="col-9">
            <div className="">
              <div className="shop_mode_thumbs">
                <div className="row my-2">
                  <form className="d-flex justify-content-end" method="get">
                    <select name="orderby" className="orderby">
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date" selected="selected">
                        Sort by newness
                      </option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                    <input type="hidden" name="q" value="shop.html" />
                  </form>
                </div>

                <ul className="row">
                  <div className="col-4">
                    <li className="product has-post-thumbnail">
                      <div className="post_item_wrap">
                        <div className="post_featured">
                          <div className="post_thumb">
                            <a
                              className="hover_icon hover_icon_link"
                              href="single-product.html"
                            >
                              <img
                                src="/assets/images/2000x2000.png"
                                className="attachment-shop_catalog size-shop_catalog"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="post_content">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="single-product.html">Pecorino Romano</a>
                          </h2>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              18.90
                            </span>{" "}
                            &ndash;
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              38.00
                            </span>
                          </span>
                          <a
                            rel="nofollow"
                            href="single-product.html"
                            data-quantity="1"
                            data-product_id="471"
                            data-product_sku=""
                            className="button add_to_cart_button"
                          >
                            Select options
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="col-4">
                    <li className="product has-post-thumbnail">
                      <div className="post_item_wrap">
                        <div className="post_featured">
                          <div className="post_thumb">
                            <a
                              className="hover_icon hover_icon_link"
                              href="single-product.html"
                            >
                              <img
                                src="/assets/images/2000x2000.png"
                                className="attachment-shop_catalog size-shop_catalog"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="post_content">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="single-product.html">Evaporated Milk</a>
                          </h2>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              4.90
                            </span>{" "}
                            &ndash;
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              8.99
                            </span>
                          </span>
                          <a
                            rel="nofollow"
                            href="single-product.html"
                            data-quantity="1"
                            data-product_id="458"
                            data-product_sku=""
                            className="button add_to_cart_button"
                          >
                            Select options
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="col-4">
                    <li className="product has-post-thumbnail">
                      <div className="post_item_wrap">
                        <div className="post_featured">
                          <div className="post_thumb">
                            <a
                              className="hover_icon hover_icon_link"
                              href="single-product.html"
                            >
                              <img
                                src="/assets/images/2000x2000.png"
                                className="attachment-shop_catalog size-shop_catalog"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="post_content">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="single-product.html">Farm Sour Cream</a>
                          </h2>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              12.50
                            </span>{" "}
                            &ndash;
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              29.00
                            </span>
                          </span>
                          <a
                            rel="nofollow"
                            href="single-product.html"
                            data-quantity="1"
                            data-product_id="448"
                            data-product_sku=""
                            className="button add_to_cart_button"
                          >
                            Select options
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="col-4">
                    <li className="product has-post-thumbnail">
                      <div className="post_item_wrap">
                        <div className="post_featured">
                          <div className="post_thumb">
                            <a
                              className="hover_icon hover_icon_link"
                              href="single-product.html"
                            >
                              <img
                                src="/assets/images/2000x2000.png"
                                className="attachment-shop_catalog size-shop_catalog"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="post_content">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="single-product.html">Farm Sour Cream</a>
                          </h2>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              12.50
                            </span>{" "}
                            &ndash;
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              29.00
                            </span>
                          </span>
                          <a
                            rel="nofollow"
                            href="single-product.html"
                            data-quantity="1"
                            data-product_id="448"
                            data-product_sku=""
                            className="button add_to_cart_button"
                          >
                            Select options
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="col-4">
                    <li className="product has-post-thumbnail">
                      <div className="post_item_wrap">
                        <div className="post_featured">
                          <div className="post_thumb">
                            <a
                              className="hover_icon hover_icon_link"
                              href="single-product.html"
                            >
                              <img
                                src="/assets/images/2000x2000.png"
                                className="attachment-shop_catalog size-shop_catalog"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="post_content">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="single-product.html">Farm Sour Cream</a>
                          </h2>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              12.50
                            </span>{" "}
                            &ndash;
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              29.00
                            </span>
                          </span>
                          <a
                            rel="nofollow"
                            href="single-product.html"
                            data-quantity="1"
                            data-product_id="448"
                            data-product_sku=""
                            className="button add_to_cart_button"
                          >
                            Select options
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="col-4">
                    <li className="product has-post-thumbnail">
                      <div className="post_item_wrap">
                        <div className="post_featured">
                          <div className="post_thumb">
                            <a
                              className="hover_icon hover_icon_link"
                              href="single-product.html"
                            >
                              <img
                                src="/assets/images/2000x2000.png"
                                className="attachment-shop_catalog size-shop_catalog"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="post_content">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="single-product.html">Farm Sour Cream</a>
                          </h2>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              12.50
                            </span>{" "}
                            &ndash;
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              29.00
                            </span>
                          </span>
                          <a
                            rel="nofollow"
                            href="single-product.html"
                            data-quantity="1"
                            data-product_id="448"
                            data-product_sku=""
                            className="button add_to_cart_button"
                          >
                            Select options
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="col-4">
                    <li className="product has-post-thumbnail">
                      <div className="post_item_wrap">
                        <div className="post_featured">
                          <div className="post_thumb">
                            <a
                              className="hover_icon hover_icon_link"
                              href="single-product.html"
                            >
                              <img
                                src="/assets/images/2000x2000.png"
                                className="attachment-shop_catalog size-shop_catalog"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="post_content">
                          <h2 className="woocommerce-loop-product__title">
                            <a href="single-product.html">Farm Sour Cream</a>
                          </h2>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              12.50
                            </span>{" "}
                            &ndash;
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                &#36;
                              </span>
                              29.00
                            </span>
                          </span>
                          <a
                            rel="nofollow"
                            href="single-product.html"
                            data-quantity="1"
                            data-product_id="448"
                            data-product_sku=""
                            className="button add_to_cart_button"
                          >
                            Select options
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
