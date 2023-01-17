import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breakfast from '../components/Breakfast';
import Clients from '../components/Clients';
import Feature from '../components/Feature';
import About from '../components/HomeComponents/About';
import Blog from '../components/HomeComponents/Blog';
import Category from '../components/HomeComponents/Category';
import Products from '../components/HomeComponents/Products';
import Slider from '../components/HomeComponents/Slider';
import Team from '../components/Team';
import Welcome from '../components/Welcome';

function Home() {
  useEffect(() => {
    const cont = document.getElementById('body');
    cont.className =
      'index home page body_style_wide body_filled article_style_stretch layout_single-standard template_single-standard scheme_original top_panel_show top_panel_above sidebar_hide sidebar_outer_hide vc_responsive';
    return () => {
      cont.className = '';
    };
  }, []);

  return (
    <>
      <Slider />
      <div className="page_content_wrap page_paddings_no">
        <div className="content_wrap">
          <div className="content">
            <article className="post_item post_item_single post_featured_default post_format_standard page type-page hentry">
              <section className="post_content">
                {/* Welcome area */}
                <Welcome />

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
                                style={{ width: '100%' }}
                              >
                                <div className="sc_section_inner">
                                  <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                                    What&apos;s Fresh
                                    <span />
                                  </h2>
                                  <div className="sc_section_content_wrap" />
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
                                    Although any mammal can produce milk, commercial dairy farms are
                                    typically one-species enterprises. In developed countries, dairy
                                    farms typically consist of high producing dairy cows. Other
                                    species used in commercial dairy farming include goats, sheep,
                                    and camels. Donkeys in Italy.
                                  </div>
                                  <div className="sc_section_content_wrap">
                                    <Link
                                      to="/farm"
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
                      <div className="wpb_wrapper" />
                    </div>
                  </div>
                </div>
                <div className="vc_row-full-width" />

                {/* About */}
                <About />

                {/* Category area */}
                <Category />

                {/* Feature area */}
                <Feature />

                <div className="vc_row-full-width" />
                {/* Products arewa */}
                <Products />

                {/* Breakfast Cream */}
                <Breakfast />

                {/* Team Area */}
                <Team />

                <div className="vc_row-full-width" />

                {/* Blog Area */}
                <Blog />

                {/* Clients Area */}
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

export default Home;
