import React from 'react';
import { Link } from 'react-router-dom';

function Feature() {
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      className="vc_row wpb_row vc_row-fluid vc_custom_1475048754773 inverse_colors"
    >
      <div className="wpb_column vc_column_container vc_col-sm-1">
        <div className="vc_column-inner ">
          <div className="wpb_wrapper" />
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-4">
        <div className="vc_column-inner vc_custom_1475049444491">
          <div className="wpb_wrapper">
            <figure
              className="sc_image sc_image_shape_square margin_top_huge"
              data-animation="animated fadeInLeft normal"
            >
              <img src="/assets/images/image1_1.webp" alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-1">
        <div className="vc_column-inner ">
          <div className="wpb_wrapper" />
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-6">
        <div className="vc_column-inner vc_custom_1475049863739">
          <div className="wpb_wrapper">
            <div
              className="sc_section sc_section_block "
              data-animation="animated fadeInRight normal"
            >
              <div className="sc_section_inner">
                <div className="sc_section_content_wrap">
                  <div className="sc_section margin_bottom_tiny- alignleft">
                    <div className="sc_section_inner">
                      <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                        Featured Recipe
                        <span />
                      </h2>
                      <div className="sc_section_content_wrap" />
                    </div>
                  </div>
                  <div className="sc_section margin_bottom_huge section_style_call_section">
                    <div className="sc_section_inner">
                      <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                        The Only Ice Cream Recipe You&apos;ll Ever Need
                      </h2>
                      <div className="sc_section_descr sc_item_descr">
                        Although any mammal can produce milk, commercial dairy farms are typically
                        one-species enterprises. In developed countries, dairy farms typically
                        consist of high producing dairy cows. Other species used in commercial dairy
                        farming include goats, sheep, and camels. Donkeys in Italy.
                      </div>
                      <div className="sc_section_content_wrap">
                        <Link
                          to="/recipes"
                          className="sc_button sc_button_square sc_button_style_border sc_button_size_small"
                        >
                          read more
                        </Link>
                      </div>
                    </div>
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

export default Feature;
