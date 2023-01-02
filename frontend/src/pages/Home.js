import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/HomeComponents/Slider";

function Home() {
  return (
    <div className="index home page body_style_wide body_filled article_style_stretch layout_single-standard template_single-standard scheme_original top_panel_show top_panel_above sidebar_hide sidebar_outer_hide vc_responsive">
      <Slider />
      <div className="page_content_wrap page_paddings_no">
        <div className="content_wrap">
          <div className="content">
            <article className="post_item post_item_single post_featured_default post_format_standard page type-page hentry">
              <section className="post_content">
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
                              Welcome To Our Farm!<span></span>
                            </h2>
                            <div className="sc_section_content_wrap">
                              <div className="sc_section sc_section_block margin_bottom_large aligncenter mw800">
                                <div className="sc_section_inner">
                                  <div className="sc_section_content_wrap">
                                    <span className="sc_highlight fst_1">
                                      Here you will find a wide range of healthy
                                      and fresh dairy products that were proudly
                                      produced at our farm by our farmers and
                                      cows. Welcome to Jacksons!
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="vc_empty_space h_6r">
                                <span className="vc_empty_space_inner"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_row-full-width"></div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper">
                        <div
                          className="sc_section aligncenter"
                          data-animation="animated fadeInUp normal"
                        >
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
                        <div
                          id="sc_services_918_wrap"
                          className="sc_services_wrap"
                        >
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
                                    <div
                                      className="post_thumb"
                                      data-image=""
                                      data-title="Our Dairy Farm"
                                    >
                                      <Link
                                        className="hover_icon hover_icon_link"
                                        to="/about"
                                      >
                                        <img
                                          alt=""
                                          src="/assets/images/service3-370x300.jpg"
                                        />
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
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Praesent vestibulum molestie lacus.
                                            Aenean nonummy hendrerit mauris.
                                            Phasellus porta.
                                          </p>
                                        </div>
                                      </div>
                                      <a
                                        href="about-2.html"
                                        className="sc_button sc_button_square sc_button_style_filled sc_button_size_small"
                                      >
                                        discover history
                                      </a>
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
                                    <div
                                      className="post_thumb"
                                      data-image=""
                                      data-title="Meet Our Cows"
                                    >
                                      <a
                                        className="hover_icon hover_icon_link"
                                        href="farm.html"
                                      >
                                        <img
                                          alt=""
                                          src="/assets/images/service2-370x300.jpg"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="sc_services_item_content">
                                    <h4 className="sc_services_item_title">
                                      <a href="farm.html">Meet Our Cows</a>
                                    </h4>
                                    <div className="sc_services_item_description">
                                      <div className="wpb_text_column wpb_content_element ">
                                        <div className="wpb_wrapper">
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Praesent vestibulum molestie lacus.
                                            Aenean nonummy hendrerit mauris.
                                            Phasellus porta.
                                          </p>
                                        </div>
                                      </div>
                                      <a
                                        href="farm.html"
                                        className="sc_button sc_button_square sc_button_style_filled sc_button_size_small"
                                      >
                                        view cows
                                      </a>
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
                                    <div
                                      className="post_thumb"
                                      data-image=""
                                      data-title="Our Organic Food"
                                    >
                                      <a
                                        className="hover_icon hover_icon_link"
                                        href="shop.html"
                                      >
                                        <img
                                          alt=""
                                          src="/assets/images/service1-370x300.jpg"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="sc_services_item_content">
                                    <h4 className="sc_services_item_title">
                                      <a href="shop.html">Our Organic Food</a>
                                    </h4>
                                    <div className="sc_services_item_description">
                                      <div className="wpb_text_column wpb_content_element ">
                                        <div className="wpb_wrapper">
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Praesent vestibulum molestie lacus.
                                            Aenean nonummy hendrerit mauris.
                                            Phasellus porta.
                                          </p>
                                        </div>
                                      </div>
                                      <a
                                        href="shop.html"
                                        className="sc_button sc_button_square sc_button_style_filled sc_button_size_small"
                                      >
                                        shop now
                                      </a>
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
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  className="vc_row wpb_row vc_row-fluid vc_custom_1475148381788 inverse_colors"
                >
                  <div className="wpb_column vc_column_container vc_col-sm-6">
                    <div className="vc_column-inner vc_custom_1475235191339">
                      <div className="wpb_wrapper">
                        <div
                          className="sc_section sc_section_block "
                          data-animation="animated fadeInLeft normal"
                        >
                          <div className="sc_section_inner">
                            <div className="sc_section_content_wrap">
                              <div
                                className="sc_section margin_bottom_tiny- alignleft"
                                style={{ width: "100%" }}
                              >
                                <div className="sc_section_inner">
                                  <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                                    What's Fresh<span></span>
                                  </h2>
                                  <div className="sc_section_content_wrap"></div>
                                </div>
                              </div>
                              <div className="sc_section margin_bottom_huge section_style_call_section">
                                <div className="sc_section_inner">
                                  <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                                    From Our Family
                                    <br />
                                    to Yours
                                  </h2>
                                  <div className="sc_section_descr sc_item_descr">
                                    Although any mammal can produce milk,
                                    commercial dairy farms are typically
                                    one-species enterprises. In developed
                                    countries, dairy farms typically consist of
                                    high producing dairy cows. Other species
                                    used in commercial dairy farming include
                                    goats, sheep, and camels. Donkeys in Italy.
                                  </div>
                                  <div className="sc_section_content_wrap">
                                    <a
                                      href="farm.html"
                                      className="sc_button sc_button_square sc_button_style_border sc_button_size_small"
                                    >
                                      read more
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wpb_column vc_column_container vc_col-sm-5">
                    <div className="vc_column-inner vc_custom_1475235352066">
                      <div className="wpb_wrapper">
                        <figure
                          className="sc_image  sc_image_shape_square margin_top_huge"
                          data-animation="animated fadeInRight normal"
                        >
                          <img src="/assets/images/girl.webp" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="wpb_column vc_column_container vc_col-sm-1">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper"></div>
                    </div>
                  </div>
                </div>
                <div className="vc_row-full-width"></div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper">
                        <div
                          className="sc_section sc_section_block margin_top_huge margin_bottom_null aligncenter"
                          data-animation="animated fadeInUp normal"
                        >
                          <div className="sc_section_inner">
                            <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                              About Us<span></span>
                            </h2>
                            <div className="sc_section_content_wrap">
                              <div className="sc_promo sc_promo_size_large">
                                <div className="sc_promo_inner">
                                  <div className="sc_promo_image"></div>
                                  <div className="sc_promo_block sc_align_left">
                                    <div className="sc_promo_block_inner">
                                      <div className="sc_promo_content">
                                        <div
                                          id="sc_tabs_215"
                                          className="sc_tabs sc_tabs_style_1"
                                          data-active="0"
                                        >
                                          <ul className="sc_tabs_titles">
                                            <li className="sc_tabs_title">
                                              <a
                                                href="#sc_tab_315_1_19"
                                                className="theme_button"
                                                id="sc_tab_315_1_19_tab"
                                              >
                                                1974
                                              </a>
                                            </li>
                                            <li className="sc_tabs_title">
                                              <a
                                                href="#sc_tab_315_2_67"
                                                className="theme_button"
                                                id="sc_tab_315_2_67_tab"
                                              >
                                                1980
                                              </a>
                                            </li>
                                            <li className="sc_tabs_title">
                                              <a
                                                href="#sc_tab_473_0"
                                                className="theme_button"
                                                id="sc_tab_473_0_tab"
                                              >
                                                1992
                                              </a>
                                            </li>
                                            <li className="sc_tabs_title">
                                              <a
                                                href="#sc_tab_649_10"
                                                className="theme_button"
                                                id="sc_tab_649_10_tab"
                                              >
                                                2004
                                              </a>
                                            </li>
                                            <li className="sc_tabs_title">
                                              <a
                                                href="#sc_tab_625_4"
                                                className="theme_button"
                                                id="sc_tab_625_4_tab"
                                              >
                                                2012
                                              </a>
                                            </li>
                                          </ul>
                                          <div
                                            id="sc_tab_315_1_19"
                                            className="sc_tabs_content odd first"
                                          >
                                            <div className="sc_section aligncenter">
                                              <div className="sc_section_inner">
                                                <div className="sc_section_content_wrap">
                                                  <h4 className="sc_title sc_title_regular cmrg_1">
                                                    Our Story
                                                  </h4>
                                                  <div className="wpb_text_column wpb_content_element ">
                                                    <div className="wpb_wrapper">
                                                      <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit.
                                                        Praesent vestibulum
                                                        molestie lacus. Aenean
                                                        nonummy hendrerit
                                                        mauris. Phasellus porta.
                                                        Fusce suscipit varius
                                                        mi. Cum sociis natoque
                                                        penatibus et magnis dis
                                                        parturient montes.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            id="sc_tab_315_2_67"
                                            className="sc_tabs_content even"
                                          >
                                            <div className="sc_section aligncenter">
                                              <div className="sc_section_inner">
                                                <div className="sc_section_content_wrap">
                                                  <h4 className="sc_title sc_title_regular cmrg_1">
                                                    Starting a Farm
                                                  </h4>
                                                  <div className="wpb_text_column wpb_content_element ">
                                                    <div className="wpb_wrapper">
                                                      <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit.
                                                        Praesent vestibulum
                                                        molestie lacus. Aenean
                                                        nonummy hendrerit
                                                        mauris. Phasellus porta.
                                                        Fusce suscipit varius
                                                        mi. Cum sociis natoque
                                                        penatibus et magnis dis
                                                        parturient montes.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            id="sc_tab_473_0"
                                            className="sc_tabs_content odd"
                                          >
                                            <div className="sc_section aligncenter">
                                              <div className="sc_section_inner">
                                                <div className="sc_section_content_wrap">
                                                  <h4 className="sc_title sc_title_regular cmrg_1">
                                                    The Best Milk in the State
                                                  </h4>
                                                  <div className="wpb_text_column wpb_content_element ">
                                                    <div className="wpb_wrapper">
                                                      <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit.
                                                        Praesent vestibulum
                                                        molestie lacus. Aenean
                                                        nonummy hendrerit
                                                        mauris. Phasellus porta.
                                                        Fusce suscipit varius
                                                        mi. Cum sociis natoque
                                                        penatibus et magnis dis
                                                        parturient montes.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            id="sc_tab_649_10"
                                            className="sc_tabs_content even"
                                          >
                                            <div className="sc_section aligncenter">
                                              <div className="sc_section_inner">
                                                <div className="sc_section_content_wrap">
                                                  <h4 className="sc_title sc_title_regular cmrg_1">
                                                    Store Opening
                                                  </h4>
                                                  <div className="wpb_text_column wpb_content_element ">
                                                    <div className="wpb_wrapper">
                                                      <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit.
                                                        Praesent vestibulum
                                                        molestie lacus. Aenean
                                                        nonummy hendrerit
                                                        mauris. Phasellus porta.
                                                        Fusce suscipit varius
                                                        mi. Cum sociis natoque
                                                        penatibus et magnis dis
                                                        parturient montes.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            id="sc_tab_625_4"
                                            className="sc_tabs_content odd"
                                          >
                                            <div className="sc_section aligncenter">
                                              <div className="sc_section_inner">
                                                <div className="sc_section_content_wrap">
                                                  <h4 className="sc_title sc_title_regular cmrg_1">
                                                    Online Shop and Shipment
                                                  </h4>
                                                  <div className="wpb_text_column wpb_content_element ">
                                                    <div className="wpb_wrapper">
                                                      <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit.
                                                        Praesent vestibulum
                                                        molestie lacus. Aenean
                                                        nonummy hendrerit
                                                        mauris. Phasellus porta.
                                                        Fusce suscipit varius
                                                        mi. Cum sociis natoque
                                                        penatibus et magnis dis
                                                        parturient montes.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="vc_empty_space h_11r">
                                          <span className="vc_empty_space_inner"></span>
                                        </div>
                                        <a
                                          href="#"
                                          className="sc_button sc_button_square sc_button_style_filled sc_button_size_small"
                                        >
                                          read more
                                        </a>
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
                </div>
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
                              Products<span></span>
                            </h2>
                            <div className="sc_section_content_wrap">
                              <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_4">
                                <div className="column-1_4 sc_column_item sc_column_item_1 odd first">
                                  <figure className="sc_image  sc_image_shape_round">
                                    <img
                                      src="/assets/images/img_milk.jpg"
                                      alt=""
                                    />
                                  </figure>
                                  <h4 className="sc_title sc_title_regular cmrg_2">
                                    <a href="#">Milk</a>
                                  </h4>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        Dairy farming&#8217;s been part of
                                        agriculture for thousands of years.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="column-1_4 sc_column_item sc_column_item_2 even">
                                  <figure className="sc_image  sc_image_shape_round">
                                    <img
                                      src="/assets/images/img_cheese.webp"
                                      alt=""
                                    />
                                  </figure>
                                  <h4 className="sc_title sc_title_regular cmrg_2">
                                    <a href="#">Cheese</a>
                                  </h4>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        Dairy farming&#8217;s been part of
                                        agriculture for thousands of years.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="column-1_4 sc_column_item sc_column_item_3 odd">
                                  <figure className="sc_image  sc_image_shape_round">
                                    <img
                                      src="/assets/images/img_butter.jpg"
                                      alt=""
                                    />
                                  </figure>
                                  <h4 className="sc_title sc_title_regular cmrg_2">
                                    <a href="#">Butter</a>
                                  </h4>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        Dairy farming&#8217;s been part of
                                        agriculture for thousands of years.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="column-1_4 sc_column_item sc_column_item_4 even">
                                  <figure className="sc_image  sc_image_shape_round">
                                    <img
                                      src="/assets/images/img_cream.webp"
                                      alt=""
                                    />
                                  </figure>
                                  <h4 className="sc_title sc_title_regular cmrg_2">
                                    <a href="#">Cream</a>
                                  </h4>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        Dairy farming&#8217;s been part of
                                        agriculture for thousands of years.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="sc_section_button sc_item_button">
                              <a
                                href="shop.html"
                                className="sc_button sc_button_square sc_button_style_filled sc_button_size_large"
                              >
                                view all products
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  className="vc_row wpb_row vc_row-fluid vc_custom_1475048754773 inverse_colors"
                >
                  <div className="wpb_column vc_column_container vc_col-sm-1">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper"></div>
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
                      <div className="wpb_wrapper"></div>
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
                                    Featured Recipe<span></span>
                                  </h2>
                                  <div className="sc_section_content_wrap"></div>
                                </div>
                              </div>
                              <div className="sc_section margin_bottom_huge section_style_call_section">
                                <div className="sc_section_inner">
                                  <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                                    The Only Ice Cream Recipe You'll Ever Need
                                  </h2>
                                  <div className="sc_section_descr sc_item_descr">
                                    Although any mammal can produce milk,
                                    commercial dairy farms are typically
                                    one-species enterprises. In developed
                                    countries, dairy farms typically consist of
                                    high producing dairy cows. Other species
                                    used in commercial dairy farming include
                                    goats, sheep, and camels. Donkeys in Italy.
                                  </div>
                                  <div className="sc_section_content_wrap">
                                    <a
                                      href="single-post.html"
                                      className="sc_button sc_button_square sc_button_style_border sc_button_size_small"
                                    >
                                      read more
                                    </a>
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
                <div className="vc_row-full-width"></div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper">
                        <div
                          className="sc_section margin_top_huge"
                          data-animation="animated fadeInUp normal"
                        >
                          <div className="sc_section_inner">
                            <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                              Our Shop<span></span>
                            </h2>
                            <div className="sc_section_content_wrap">
                              <div className="woocommerce columns-4">
                                <ul className="products">
                                  <li className="product has-post-thumbnail first instock purchasable">
                                    <div className="post_item_wrap">
                                      <div className="post_featured">
                                        <div className="post_thumb">
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-product.html"
                                          >
                                            <img
                                              src="/assets/images/product-1-300x300.jpg"
                                              className="attachment-shop_catalog size-shop_catalog"
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content">
                                        <h2 className="woocommerce-loop-product__title">
                                          Pecorino Romano
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
                                  <li className="product has-post-thumbnail instock purchasable">
                                    <div className="post_item_wrap">
                                      <div className="post_featured">
                                        <div className="post_thumb">
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-product.html"
                                          >
                                            <img
                                              src="/assets/images/product-2-300x300.jpg"
                                              className="attachment-shop_catalog size-shop_catalog"
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content">
                                        <h2 className="woocommerce-loop-product__title">
                                          Evaporated Milk
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
                                  <li className="product has-post-thumbnail instock purchasable">
                                    <div className="post_item_wrap">
                                      <div className="post_featured">
                                        <div className="post_thumb">
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-product.html"
                                          >
                                            <img
                                              src="/assets/images/product-3-300x300.jpg"
                                              className="attachment-shop_catalog size-shop_catalog"
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content">
                                        <h2 className="woocommerce-loop-product__title">
                                          Farm Sour Cream
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
                                  <li className="product has-post-thumbnail last instock purchasable">
                                    <div className="post_item_wrap">
                                      <div className="post_featured">
                                        <div className="post_thumb">
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-product.html"
                                          >
                                            <img
                                              src="/assets/images/product-4-300x300.jpg"
                                              className="attachment-shop_catalog size-shop_catalog"
                                              alt=""
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content">
                                        <h2 className="woocommerce-loop-product__title">
                                          Ricotta Salata
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper">
                        <div
                          className="columns_wrap sc_columns columns_nofluid sc_columns_count_12 margin_top_small margin_bottom_huge"
                          data-animation="animated fadeInUp normal"
                        >
                          <div className="column-7_12 sc_column_item sc_column_item_1 odd first span_7">
                            <div className="sc_intro intro_1">
                              <div className="sc_intro_inner  sc_intro_style_2">
                                <div className="sc_intro_content">
                                  <h2 className="sc_intro_title">
                                    Breakfast Ideas
                                  </h2>
                                  <div className="sc_intro_descr">
                                    Heat up your mornings with a bowl of warm
                                    cereal. Whether you prefer oatmeal, farina,
                                    or any other kind of porridge, make your
                                    instant version a bit creamier!
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="column-5_12 sc_column_item sc_column_item_8 even span_5">
                            <div className="sc_intro intro_2">
                              <div className="sc_intro_inner  sc_intro_style_2">
                                <div className="sc_intro_content">
                                  <h2 className="sc_intro_title">Ice Cream</h2>
                                  <div className="sc_intro_descr">
                                    Try our low fat, fruitty, caramel, vanilla
                                    and chocolate ice cream all made by our best
                                    farm cooks!
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
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  className="vc_row wpb_row vc_row-fluid vc_custom_1475061036330 inverse_colors"
                >
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner vc_custom_1475062560306">
                      <div className="wpb_wrapper">
                        <div
                          className="sc_section margin_top_huge"
                          data-animation="animated fadeInUp normal"
                        >
                          <div className="sc_section_inner">
                            <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                              Team<span></span>
                            </h2>
                            <div className="sc_section_content_wrap">
                              <div
                                id="sc_team_973_wrap"
                                className="sc_team_wrap"
                              >
                                <div
                                  id="sc_team_973"
                                  className="sc_team sc_team_style_team-3 margin_bottom_large"
                                >
                                  <div className="sc_columns columns_wrap">
                                    <div className="column-1_4 column_padding_bottom">
                                      <div
                                        id="sc_team_973_1"
                                        className="sc_team_item sc_team_item_1 odd first"
                                      >
                                        <div className="sc_team_item_avatar">
                                          <img
                                            alt=""
                                            src="/assets/images/team-2-370x370.jpg"
                                          />
                                          <div className="sc_team_item_hover">
                                            <div className="sc_team_item_socials">
                                              <div className="sc_socials sc_socials_type_icons sc_socials_shape_round sc_socials_size_tiny">
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_twitter"
                                                  >
                                                    <span className="icon-twitter"></span>
                                                  </a>
                                                </div>
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_facebook"
                                                  >
                                                    <span className="icon-facebook"></span>
                                                  </a>
                                                </div>
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_linkedin"
                                                  >
                                                    <span className="icon-linkedin"></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="sc_team_item_info">
                                          <h4 className="sc_team_item_title">
                                            <a href="single-team.html">
                                              Bobby Young
                                            </a>
                                          </h4>
                                          <div className="sc_team_item_position">
                                            A Tractor Driver
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column-1_4 column_padding_bottom">
                                      <div
                                        id="sc_team_973_2"
                                        className="sc_team_item sc_team_item_2 even"
                                      >
                                        <div className="sc_team_item_avatar">
                                          <img
                                            alt=""
                                            src="/assets/images/team-4-370x370.jpg"
                                          />
                                          <div className="sc_team_item_hover">
                                            <div className="sc_team_item_socials">
                                              <div className="sc_socials sc_socials_type_icons sc_socials_shape_round sc_socials_size_tiny">
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_twitter"
                                                  >
                                                    <span className="icon-twitter"></span>
                                                  </a>
                                                </div>
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_facebook"
                                                  >
                                                    <span className="icon-facebook"></span>
                                                  </a>
                                                </div>
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_gplus-1"
                                                  >
                                                    <span className="icon-gplus-1"></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="sc_team_item_info">
                                          <h4 className="sc_team_item_title">
                                            <a href="single-team.html">
                                              Jose Morrison
                                            </a>
                                          </h4>
                                          <div className="sc_team_item_position">
                                            A Business Owner
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column-1_4 column_padding_bottom">
                                      <div
                                        id="sc_team_973_3"
                                        className="sc_team_item sc_team_item_3 odd"
                                      >
                                        <div className="sc_team_item_avatar">
                                          <img
                                            alt=""
                                            src="/assets/images/team-3-370x370.jpg"
                                          />
                                          <div className="sc_team_item_hover">
                                            <div className="sc_team_item_socials">
                                              <div className="sc_socials sc_socials_type_icons sc_socials_shape_round sc_socials_size_tiny">
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_twitter"
                                                  >
                                                    <span className="icon-twitter"></span>
                                                  </a>
                                                </div>
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_facebook"
                                                  >
                                                    <span className="icon-facebook"></span>
                                                  </a>
                                                </div>
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_gplus-1"
                                                  >
                                                    <span className="icon-gplus-1"></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="sc_team_item_info">
                                          <h4 className="sc_team_item_title">
                                            <a href="single-team.html">
                                              Laura Smith
                                            </a>
                                          </h4>
                                          <div className="sc_team_item_position">
                                            A Chief Accountant
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column-1_4 column_padding_bottom">
                                      <div
                                        id="sc_team_973_4"
                                        className="sc_team_item sc_team_item_4 even"
                                      >
                                        <div className="sc_team_item_avatar">
                                          <img
                                            alt=""
                                            src="/assets/images/team-1-370x370.jpg"
                                          />
                                          <div className="sc_team_item_hover">
                                            <div className="sc_team_item_socials">
                                              <div className="sc_socials sc_socials_type_icons sc_socials_shape_round sc_socials_size_tiny">
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_twitter"
                                                  >
                                                    <span className="icon-twitter"></span>
                                                  </a>
                                                </div>
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_facebook"
                                                  >
                                                    <span className="icon-facebook"></span>
                                                  </a>
                                                </div>
                                                <div className="sc_socials_item">
                                                  <a
                                                    href="#"
                                                    target="_blank"
                                                    className="social_icons social_linkedin"
                                                  >
                                                    <span className="icon-linkedin"></span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="sc_team_item_info">
                                          <h4 className="sc_team_item_title">
                                            <a href="single-team.html">
                                              Tyler Holland
                                            </a>
                                          </h4>
                                          <div className="sc_team_item_position">
                                            Our Only Marketer
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
                    </div>
                  </div>
                </div>
                <div className="vc_row-full-width"></div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper">
                        <div
                          className="sc_section margin_top_huge margin_bottom_huge"
                          data-animation="animated fadeInUp normal"
                        >
                          <div className="sc_section_inner">
                            <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                              Blog<span></span>
                            </h2>
                            <div className="sc_section_content_wrap">
                              <div
                                id="sc_blogger_608"
                                className="sc_blogger layout_classic_3 template_masonry  sc_blogger_horizontal"
                              >
                                <div className="isotope_wrap" data-columns="3">
                                  <div className="isotope_item isotope_item_classic isotope_item_classic_3 isotope_column_3">
                                    <div className="post_item post_item_classic post_item_classic_3 post_format_standard odd">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/post-6.jpg"
                                          data-title="It Was Delicious"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img
                                              alt=""
                                              src="/assets/images/post-6-370x300.jpg"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a
                                              href="single-post.html"
                                              className="post_info_date"
                                            >
                                              August 23, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">
                                            It Was Delicious
                                          </a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Praesent vestibulum molestie lacus.
                                            Aenean nonummy hendrerit mauris.
                                            Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info">
                                          <span className="post_info_item icon-user-1 post_info_posted_by">
                                            <a
                                              href="classic.html"
                                              className="post_info_author"
                                            >
                                              Philip James
                                            </a>
                                          </span>
                                          <span className="post_info_item post_info_counters">
                                            <a
                                              className="post_counters_item post_counters_views icon-eye-1"
                                              title="Views - 272"
                                              href="single-post.html"
                                            >
                                              <span className="post_counters_number">
                                                272
                                              </span>
                                            </a>
                                            <a
                                              className="post_counters_item post_counters_comments icon-comment-1"
                                              title="Comments - 0"
                                              href="single-post.html#respond"
                                            >
                                              <span className="post_counters_number">
                                                0
                                              </span>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_classic isotope_item_classic_3 isotope_column_3">
                                    <div className="post_item post_item_classic post_item_classic_3 post_format_standard even">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/post-5.jpg"
                                          data-title="A Better Cream Life"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img
                                              alt=""
                                              src="/assets/images/post-5-370x300.jpg"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a
                                              href="single-post.html"
                                              className="post_info_date"
                                            >
                                              August 14, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">
                                            A Better Cream Life
                                          </a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Praesent vestibulum molestie lacus.
                                            Aenean nonummy hendrerit mauris.
                                            Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info">
                                          <span className="post_info_item icon-user-1 post_info_posted_by">
                                            <a
                                              href="classic.html"
                                              className="post_info_author"
                                            >
                                              Philip James
                                            </a>
                                          </span>
                                          <span className="post_info_item post_info_counters">
                                            <a
                                              className="post_counters_item post_counters_views icon-eye-1"
                                              title="Views - 263"
                                              href="single-post.html"
                                            >
                                              <span className="post_counters_number">
                                                263
                                              </span>
                                            </a>
                                            <a
                                              className="post_counters_item post_counters_comments icon-comment-1"
                                              title="Comments - 0"
                                              href="single-post.html#respond"
                                            >
                                              <span className="post_counters_number">
                                                0
                                              </span>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_classic isotope_item_classic_3 isotope_column_3">
                                    <div className="post_item post_item_classic post_item_classic_3 post_format_standard odd last">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/2000x1600.png"
                                          data-title="Butter of a Dream"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img
                                              alt=""
                                              src="/assets/images/post-4-370x300.jpg"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a
                                              href="single-post.html"
                                              className="post_info_date"
                                            >
                                              August 5, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">
                                            Butter of a Dream
                                          </a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit.
                                            Praesent vestibulum molestie lacus.
                                            Aenean nonummy hendrerit mauris.
                                            Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info">
                                          <span className="post_info_item icon-user-1 post_info_posted_by">
                                            <a
                                              href="classic.html"
                                              className="post_info_author"
                                            >
                                              Philip James
                                            </a>
                                          </span>
                                          <span className="post_info_item post_info_counters">
                                            <a
                                              className="post_counters_item post_counters_views icon-eye-1"
                                              title="Views - 265"
                                              href="single-post.html"
                                            >
                                              <span className="post_counters_number">
                                                265
                                              </span>
                                            </a>
                                            <a
                                              className="post_counters_item post_counters_comments icon-comment-1"
                                              title="Comments - 0"
                                              href="single-post.html#respond"
                                            >
                                              <span className="post_counters_number">
                                                0
                                              </span>
                                            </a>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="sc_section_button sc_item_button">
                              <a
                                href="masonry-2-columns.html"
                                className="sc_button sc_button_square sc_button_style_filled sc_button_size_large"
                              >
                                Read all posts
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  className="vc_row wpb_row vc_row-fluid vc_custom_1475050026958"
                >
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner vc_custom_1475227276833">
                      <div className="wpb_wrapper">
                        <div
                          id="sc_clients_966_wrap"
                          className="sc_clients_wrap"
                        >
                          <div
                            id="sc_clients_966"
                            className="sc_clients sc_clients_style_clients-1 "
                            data-animation="animated fadeIn normal"
                          >
                            <div
                              className="sc_slider_swiper swiper-slider-container sc_slider_nopagination sc_slider_nocontrols"
                              data-interval="7779"
                              data-slides-per-view="5"
                              data-slides-min-width="100"
                            >
                              <div className="slides swiper-wrapper">
                                <div
                                  className="swiper-slide"
                                  data-style="width:100%;"
                                >
                                  <div
                                    id="sc_clients_966_1"
                                    className="sc_clients_item sc_clients_item_1 odd first"
                                  >
                                    <div className="sc_client_image">
                                      <img
                                        alt=""
                                        src="/assets/images/5-1.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="swiper-slide"
                                  data-style="width:100%;"
                                >
                                  <div
                                    id="sc_clients_966_2"
                                    className="sc_clients_item sc_clients_item_2 even"
                                  >
                                    <div className="sc_client_image">
                                      <img
                                        alt=""
                                        src="/assets/images/3-1.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="swiper-slide"
                                  data-style="width:100%;"
                                >
                                  <div
                                    id="sc_clients_966_3"
                                    className="sc_clients_item sc_clients_item_3 odd"
                                  >
                                    <div className="sc_client_image">
                                      <img
                                        alt=""
                                        src="/assets/images/2-1.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="swiper-slide"
                                  data-style="width:100%;"
                                >
                                  <div
                                    id="sc_clients_966_4"
                                    className="sc_clients_item sc_clients_item_4 even"
                                  >
                                    <div className="sc_client_image">
                                      <img
                                        alt=""
                                        src="/assets/images/1-1.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="swiper-slide"
                                  data-style="width:100%;"
                                >
                                  <div
                                    id="sc_clients_966_5"
                                    className="sc_clients_item sc_clients_item_5 odd"
                                  >
                                    <div className="sc_client_image">
                                      <img
                                        alt=""
                                        src="/assets/images/4-1.png"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="sc_slider_controls_wrap">
                                <a className="sc_slider_prev" href="#"></a>
                                <a className="sc_slider_next" href="#"></a>
                              </div>
                              <div className="sc_slider_pagination_wrap"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_row-full-width"></div>
              </section>
            </article>
            <section className="related_wrap related_wrap_empty"></section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
