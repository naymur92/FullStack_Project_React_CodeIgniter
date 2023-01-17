import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breakfast from '../components/Breakfast';
import Clients from '../components/Clients';
import Products from '../components/HomeComponents/Products';
import Team from '../components/Team';

function Farm() {
  useEffect(() => {
    const cont = document.getElementsByTagName('body')[0];
    cont.className =
      'page farmpg body_style_wide body_filled article_style_stretch layout_single-standard template_single-standard scheme_original top_panel_show top_panel_above sidebar_hide sidebar_outer_hide vc_responsive';

    return () => {
      cont.className = '';
    };
  }, []);

  return (
    <>
      <div className="top_panel_title top_panel_style_1 title_present breadcrumbs_present scheme_original">
        <div className="bg_cust_1 top_panel_title_inner top_panel_inner_style_1 title_present_inner breadcrumbs_present_inner">
          <div className="content_wrap">
            <h1 className="page_title">Farm</h1>
            <div className="breadcrumbs">
              <Link className="breadcrumbs_item home" to="/">
                Home
              </Link>
              <span className="breadcrumbs_delimiter" />
              <span className="breadcrumbs_item current">Farm</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page_content_wrap page_paddings_no">
        <div className="content_wrap">
          <div className="content">
            <article className="post_item post_item_single post_featured_default post_format_standard page type-page hentry">
              <section className="post_content">
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  className="vc_row wpb_row vc_row-fluid vc_custom_1475054487397 inverse_colors"
                >
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner vc_custom_1475060512699">
                      <div className="wpb_wrapper">
                        <div
                          className="sc_section section_style_white_text c_white"
                          data-animation="animated fadeInUp normal"
                        >
                          <div className="sc_section_inner">
                            <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                              Capabilities
                              <span />
                            </h2>
                            <div className="sc_section_content_wrap">
                              <div id="sc_services_438_wrap" className="sc_services_wrap">
                                <div
                                  id="sc_services_438"
                                  className="sc_services sc_services_style_services-5 sc_services_type_icons margin_bottom_large"
                                >
                                  <div className="sc_service_container sc_align_">
                                    <div className="sc_services_image">
                                      <img src="/assets/images/big_cow.png" alt="" />
                                    </div>
                                    <div className="sc_columns columns_wrap">
                                      <div className="column-1_2 column_padding_bottom">
                                        <div
                                          id="sc_services_438_1"
                                          className="sc_services_item sc_services_item_1 odd first"
                                        >
                                          <a href="single-post.html">
                                            <span className="sc_icon icon-book-open" />
                                          </a>
                                          <div className="sc_services_item_content">
                                            <h4 className="sc_services_item_title">
                                              <a href="single-post.html">Animal Welfare</a>
                                            </h4>
                                            <div className="sc_services_item_description">
                                              <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Praesent vestibulum molestie.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="column-1_2 column_padding_bottom">
                                        <div
                                          id="sc_services_438_2"
                                          className="sc_services_item sc_services_item_2 even"
                                        >
                                          <a href="single-post.html">
                                            <span className="sc_icon icon-book-open" />
                                          </a>
                                          <div className="sc_services_item_content">
                                            <h4 className="sc_services_item_title">
                                              <a href="single-post.html">Herd Management</a>
                                            </h4>
                                            <div className="sc_services_item_description">
                                              <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Praesent vestibulum molestie.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="column-1_2 column_padding_bottom">
                                        <div
                                          id="sc_services_438_3"
                                          className="sc_services_item sc_services_item_3 odd"
                                        >
                                          <a href="single-post.html">
                                            <span className="sc_icon icon-book-open" />
                                          </a>
                                          <div className="sc_services_item_content">
                                            <h4 className="sc_services_item_title">
                                              <a href="single-post.html">Automated Milking</a>
                                            </h4>
                                            <div className="sc_services_item_description">
                                              <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Praesent vestibulum molestie.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="column-1_2 column_padding_bottom">
                                        <div
                                          id="sc_services_438_4"
                                          className="sc_services_item sc_services_item_4 even"
                                        >
                                          <a href="single-post.html">
                                            <span className="sc_icon icon-book-open" />
                                          </a>
                                          <div className="sc_services_item_content">
                                            <h4 className="sc_services_item_title">
                                              <a href="single-post.html">Milk Preservation</a>
                                            </h4>
                                            <div className="sc_services_item_description">
                                              <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit. Praesent vestibulum molestie.
                                              </p>
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
                </div>
                <div className="vc_row-full-width" />
                <Products />

                <Breakfast />

                <Team />
                <div className="vc_row-full-width" />

                <Clients />
                <div className="vc_row-full-width" />
              </section>
            </article>
            <section className="related_wrap related_wrap_empty" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Farm;
