import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_PATH } from '../../API_PATH';

function Category() {
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    await axios.get(`${API_PATH}/catlists`).then((res) => {
      setCategories(res.data);
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
            <div
              className="sc_section sc_section_block margin_top_huge margin_bottom_huge aligncenter"
              data-animation="animated fadeInUp normal"
            >
              <div className="sc_section_inner">
                <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                  Product Categories
                  <span />
                </h2>
                <div className="sc_section_content_wrap">
                  <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_4">
                    {categories.slice(0, 4).map((cat) => (
                      <div className="column-1_4 sc_column_item">
                        <figure className="sc_image  sc_image_shape_round">
                          <img
                            src={`${API_PATH}/assets/images/categories/${cat.category_image}`}
                            alt=""
                          />
                        </figure>
                        <h4 className="sc_title sc_title_regular cmrg_2">
                          <Link to="/shop">{cat.category_name}</Link>
                        </h4>
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <p>{cat.category_desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sc_section_button sc_item_button">
                  <Link
                    to="/shop"
                    className="sc_button sc_button_square sc_button_style_filled sc_button_size_large"
                  >
                    view all products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
