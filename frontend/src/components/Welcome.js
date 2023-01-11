import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        className="vc_row wpb_row vc_row-fluid vc_custom_1475063547001"
      >
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div
                className="sc_section margin_bottom_small section_style_dark_text"
                data-animation="animated fadeInUp normal"
              >
                <div className="sc_section_inner">
                  <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                    Welcome To Our Farm!
                    <span />
                  </h2>
                  <div className="sc_section_content_wrap">
                    <div className="sc_section sc_section_block margin_bottom_large aligncenter mw800">
                      <div className="sc_section_inner">
                        <div className="sc_section_content_wrap">
                          <span className="sc_highlight fst_1">
                            Here you will find a wide range of healthy and fresh dairy products that
                            were proudly produced at our farm by our farmers and cows. Welcome to
                            Jacksons!
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="vc_empty_space h_6r">
                      <span className="vc_empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vc_row-full-width" />
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="sc_section aligncenter" data-animation="animated fadeInUp normal">
                <div className="sc_section_inner">
                  <div className="sc_section_content_wrap">
                    <figure className="sc_image sc_image_shape_square margin_top_huge-">
                      <img src="/assets/images/big-cow.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner vc_custom_1475066123130">
            <div className="wpb_wrapper">
              <div id="sc_services_918_wrap" className="sc_services_wrap">
                <div
                  id="sc_services_918"
                  className="sc_services sc_services_style_services-1 sc_services_type_images  margin_top_large margin_bottom_large fwidth"
                  data-animation="animated fadeInUp normal"
                >
                  <div className="sc_columns columns_wrap">
                    <div className="column-1_3 column_padding_bottom">
                      <div
                        id="sc_services_918_1"
                        className="sc_services_item sc_services_item_1 odd first"
                      >
                        <div className="sc_services_item_featured post_featured">
                          <div className="post_thumb" data-image="" data-title="Our Dairy Farm">
                            <Link className="hover_icon hover_icon_link" to="/about">
                              <img alt="" src="/assets/images/service3-370x300.jpg" />
                            </Link>
                          </div>
                        </div>
                        <div className="sc_services_item_content">
                          <h4 className="sc_services_item_title">
                            <Link to="/about">Our Dairy Farm</Link>
                          </h4>
                          <div className="sc_services_item_description">
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
                                  vestibulum molestie lacus. Aenean nonummy hendrerit mauris.
                                  Phasellus porta.
                                </p>
                              </div>
                            </div>
                            <Link
                              to="/about"
                              className="sc_button sc_button_square sc_button_style_filled sc_button_size_small"
                            >
                              discover history
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column-1_3 column_padding_bottom">
                      <div
                        id="sc_services_918_2"
                        className="sc_services_item sc_services_item_2 even"
                      >
                        <div className="sc_services_item_featured post_featured">
                          <div className="post_thumb" data-image="" data-title="Meet Our Cows">
                            <Link className="hover_icon hover_icon_link" to="/farm">
                              <img alt="" src="/assets/images/service2-370x300.jpg" />
                            </Link>
                          </div>
                        </div>
                        <div className="sc_services_item_content">
                          <h4 className="sc_services_item_title">
                            <Link to="/farm">Meet Our Cows</Link>
                          </h4>
                          <div className="sc_services_item_description">
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
                                  vestibulum molestie lacus. Aenean nonummy hendrerit mauris.
                                  Phasellus porta.
                                </p>
                              </div>
                            </div>
                            <Link
                              to="/farm"
                              className="sc_button sc_button_square sc_button_style_filled sc_button_size_small"
                            >
                              view cows
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column-1_3 column_padding_bottom">
                      <div
                        id="sc_services_918_3"
                        className="sc_services_item sc_services_item_3 odd"
                      >
                        <div className="sc_services_item_featured post_featured">
                          <div className="post_thumb" data-image="" data-title="Our Organic Food">
                            <Link className="hover_icon hover_icon_link" to="/shop">
                              <img alt="" src="/assets/images/service1-370x300.jpg" />
                            </Link>
                          </div>
                        </div>
                        <div className="sc_services_item_content">
                          <h4 className="sc_services_item_title">
                            <Link to="/shop">Our Organic Food</Link>
                          </h4>
                          <div className="sc_services_item_description">
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
                                  vestibulum molestie lacus. Aenean nonummy hendrerit mauris.
                                  Phasellus porta.
                                </p>
                              </div>
                            </div>
                            <Link
                              to="/shop"
                              className="sc_button sc_button_square sc_button_style_filled sc_button_size_small"
                            >
                              shop now
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
      </div>
    </>
  );
}

export default Welcome;
