import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_PATH } from '../../API_PATH';

function Products({ onAdd }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios.get(`${API_PATH}/prodlists`).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="vc_row wpb_row vc_row-fluid">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner ">
          <div className="wpb_wrapper">
            <div className="sc_section margin_top_huge" data-animation="animated fadeInUp normal">
              <div className="sc_section_inner">
                <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                  Our Shop
                  <span />
                </h2>
                <div className="sc_section_content_wrap">
                  <div className="woocommerce columns-4">
                    <ul className="products">
                      {products.slice(0, 4).map((product) => (
                        <li className="product has-post-thumbnail instock purchasable">
                          <div className="post_item_wrap">
                            <div className="post_featured">
                              <div className="post_thumb">
                                <a
                                  className="hover_icon hover_icon_link"
                                  href="single-product.html"
                                >
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
                                {product.product_name}
                              </h2>
                              <span className="price">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">&#2547; </span>
                                  {Number(product.product_price).toFixed(2)}
                                </span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
