import React from "react";

function Shop() {
  return (
    <div className="archive shoppg post-type-archive post-type-archive-product woocommerce woocommerce-page body_style_wide body_filled article_style_stretch layout_excerpt template_excerpt scheme_original top_panel_show top_panel_above sidebar_show sidebar_left sidebar_outer_hide vc_responsive">
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
        <div className="content_wrap">
          <div className="content">
            <div className="list_products shop_mode_thumbs">
              <nav className="woocommerce-breadcrumb">
                <a href="index.html">Home</a>&nbsp;&#47;&nbsp;Shop
              </nav>
              <header className="woocommerce-products-header"></header>
              <div className="mode_buttons">
                <form action="#" method="post">
                  <a
                    href="shop.html"
                    className="woocommerce_thumbs icon-th"
                    title="Show products as thumbs"
                  ></a>
                  <a
                    href="shop-list.html"
                    className="woocommerce_list icon-th-list"
                    title="Show products as list"
                  ></a>
                </form>
              </div>
              <p className="woocommerce-result-count">Showing all 9 results</p>
              <form className="woocommerce-ordering" method="get">
                <select name="orderby" className="orderby">
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date" selected="selected">
                    Sort by newness
                  </option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
                <input type="hidden" name="q" value="shop.html" />
              </form>
              <ul className="products">
                <li className="product has-post-thumbnail column-1_3 first instock purchasable">
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
                <li className="product has-post-thumbnail column-1_3 instock purchasable">
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
                <li className="product has-post-thumbnail column-1_3 last instock purchasable">
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
                <li className="product has-post-thumbnail column-1_3 first instock purchasable">
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
                        <a href="single-product.html">Ricotta Salata</a>
                      </h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          15.99
                        </span>{" "}
                        &ndash;
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          68.99
                        </span>
                      </span>
                      <a
                        rel="nofollow"
                        href="single-product.html"
                        data-quantity="1"
                        data-product_id="438"
                        data-product_sku=""
                        className="button add_to_cart_button"
                      >
                        Select options
                      </a>
                    </div>
                  </div>
                </li>
                <li className="product has-post-thumbnail column-1_3 instock purchasable">
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
                        <a href="single-product.html">Fromage a Raclette</a>
                      </h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          31.50
                        </span>{" "}
                        &ndash;
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          99.90
                        </span>
                      </span>
                      <a
                        rel="nofollow"
                        href="single-product.html"
                        data-quantity="1"
                        data-product_id="426"
                        data-product_sku=""
                        className="button add_to_cart_button"
                      >
                        Select options
                      </a>
                    </div>
                  </div>
                </li>
                <li className="product has-post-thumbnail product_cat-yoghurt  column-1_3 last instock purchasable">
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
                        <a href="single-product.html">Parmesan Cheese</a>
                      </h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          18.00
                        </span>{" "}
                        &ndash;
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          82.00
                        </span>
                      </span>
                      <a
                        rel="nofollow"
                        href="single-product.html"
                        data-quantity="1"
                        data-product_id="412"
                        data-product_sku=""
                        className="button add_to_cart_button"
                      >
                        Select options
                      </a>
                    </div>
                  </div>
                </li>
                <li className="product has-post-thumbnail column-1_3 first instock purchasable">
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
                        <a href="single-product.html">Brie Cheese</a>
                      </h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          25.50
                        </span>{" "}
                        &ndash;
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          110.90
                        </span>
                      </span>
                      <a
                        rel="nofollow"
                        href="single-product.html"
                        data-quantity="1"
                        data-product_id="402"
                        data-product_sku=""
                        className="button add_to_cart_button"
                      >
                        Select options
                      </a>
                    </div>
                  </div>
                </li>
                <li className="product has-post-thumbnail column-1_3 instock purchasable">
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
                        <a href="single-product.html">Camembert Cheese</a>
                      </h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          46.99
                        </span>{" "}
                        &ndash;
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          135.99
                        </span>
                      </span>
                      <a
                        rel="nofollow"
                        href="single-product.html"
                        data-quantity="1"
                        data-product_id="387"
                        data-product_sku=""
                        className="button add_to_cart_button"
                      >
                        Select options
                      </a>
                    </div>
                  </div>
                </li>
                <li className="product has-post-thumbnail column-1_3 last instock purchasable">
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
                        <a href="single-product.html">Tested Raw Milk</a>
                      </h2>
                      <span className="price">
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          23.00
                        </span>{" "}
                        &ndash;
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          29.50
                        </span>
                      </span>
                      <a
                        rel="nofollow"
                        href="single-product.html"
                        data-quantity="1"
                        data-product_id="364"
                        data-product_sku=""
                        className="button add_to_cart_button"
                      >
                        Select options
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="sidebar widget_area scheme_light"
            role="complementary"
          >
            <div className="sidebar_inner widget_area_inner">
              <aside
                id="woocommerce_widget_cart-2"
                className="widget woocommerce widget_shopping_cart"
              >
                <h4 className="widget_title">Your Cart</h4>
                <div className="widget_shopping_cart_content">
                  <p className="woocommerce-mini-cart__empty-message">
                    No products in the cart.
                  </p>
                </div>
              </aside>
              <aside
                id="woocommerce_price_filter-2"
                className="widget woocommerce widget_price_filter"
              >
                <h4 className="widget_title">Price Filter</h4>
                <form method="get" action="shop.html">
                  <div className="price_slider_wrapper">
                    <div className="price_slider"></div>
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
                        <span className="from"></span> &mdash;
                        <span className="to"></span>
                      </div>
                      <input type="hidden" name="q" value="shop.html" />
                      <div className="clear"></div>
                    </div>
                  </div>
                </form>
              </aside>
              <aside className="widget woocommerce widget_product_categories">
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
    </div>
  );
}

export default Shop;
