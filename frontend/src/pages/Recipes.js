import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Clients from '../components/Clients';
import Feature from '../components/Feature';

function Recipes() {
  useEffect(() => {
    const cont = document.getElementsByTagName('body')[0];
    cont.className =
      'page recipespg body_style_wide body_filled article_style_stretch layout_single-standard template_single-standard scheme_original top_panel_show top_panel_above sidebar_hide sidebar_outer_hide vc_responsive';

    return () => {
      cont.className = '';
    };
  }, []);

  return (
    <>
      <div className="top_panel_title top_panel_style_1 title_present breadcrumbs_present scheme_original">
        <div className="bg_cust_1 top_panel_title_inner top_panel_inner_style_1 title_present_inner breadcrumbs_present_inner">
          <div className="content_wrap">
            <h1 className="page_title">Recipes</h1>
            <div className="breadcrumbs">
              <Link className="breadcrumbs_item home" to="/">
                Home
              </Link>
              <span className="breadcrumbs_delimiter" />
              <span className="breadcrumbs_item current">Recipes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page_content_wrap page_paddings_no">
        <div className="content_wrap">
          <div className="content">
            <article className="post_item post_item_single post_featured_default post_format_standard page type-page hentry">
              <section className="post_content">
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper">
                        <div
                          className="sc_section margin_bottom_large"
                          data-animation="animated fadeInUp normal"
                        >
                          <div className="sc_section_inner">
                            <h2 className="sc_section_title sc_item_title sc_item_title_without_descr">
                              Latest Recipes
                              <span />
                            </h2>
                            <div className="sc_section_content_wrap">
                              <div
                                id="sc_blogger_642"
                                className="sc_blogger layout_recipes_3 template_recipes margin_bottom_tiny sc_blogger_horizontal"
                              >
                                <div className="isotope_wrap" data-columns="3">
                                  <div className="isotope_item isotope_item_recipes isotope_item_recipes_3 isotope_column_3">
                                    <div className="post_item post_item_recipes post_item_recipes_3 post_format_standard odd">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/post-6.jpg"
                                          data-title="Cranberry Homecheese"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img alt="" src="/assets/images/2000x1600.png" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a href="single-post.html" className="post_info_date">
                                              September 29, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">Cranberry Homecheese</a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Praesent vestibulum molestie lacus. Aenean nonummy
                                            hendrerit mauris. Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info_recipes">
                                          <span className="recipes-item icon-food-1">
                                            4 ingridient
                                          </span>
                                          <span className="recipes-item icon-clock-1">30 min</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_recipes isotope_item_recipes_3 isotope_column_3">
                                    <div className="post_item post_item_recipes post_item_recipes_3 post_format_standard even">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/recipe-1.jpg"
                                          data-title="Waffles with Cream"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img alt="" src="/assets/images/2000x1600.png" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a href="single-post.html" className="post_info_date">
                                              September 29, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">Waffles with Cream</a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Praesent vestibulum molestie lacus. Aenean nonummy
                                            hendrerit mauris. Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info_recipes">
                                          <span className="recipes-item icon-food-1">
                                            4 ingridient
                                          </span>
                                          <span className="recipes-item icon-clock-1">40 min</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_recipes isotope_item_recipes_3 isotope_column_3">
                                    <div className="post_item post_item_recipes post_item_recipes_3 post_format_standard odd">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/recipe-2.jpg"
                                          data-title="Milk &#038; Sugar Cereal"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img alt="" src="/assets/images/2000x1600.png" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a href="single-post.html" className="post_info_date">
                                              September 29, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">Milk &#038; Sugar Cereal</a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Praesent vestibulum molestie lacus. Aenean nonummy
                                            hendrerit mauris. Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info_recipes">
                                          <span className="recipes-item icon-food-1">
                                            4 ingridient
                                          </span>
                                          <span className="recipes-item icon-clock-1">10 min</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_recipes isotope_item_recipes_3 isotope_column_3">
                                    <div className="post_item post_item_recipes post_item_recipes_3 post_format_standard even">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/recipe-3.jpg"
                                          data-title="Creamy Granola"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img alt="" src="/assets/images/2000x1600.png" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a href="single-post.html" className="post_info_date">
                                              September 29, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">Creamy Granola</a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Praesent vestibulum molestie lacus. Aenean nonummy
                                            hendrerit mauris. Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info_recipes">
                                          <span className="recipes-item icon-food-1">
                                            4 ingridient
                                          </span>
                                          <span className="recipes-item icon-clock-1">50 min</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_recipes isotope_item_recipes_3 isotope_column_3">
                                    <div className="post_item post_item_recipes post_item_recipes_3 post_format_standard odd">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/recipe-4.jpg"
                                          data-title="Corn Waffles in Raw Milk"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img alt="" src="/assets/images/2000x1600.png" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a href="single-post.html" className="post_info_date">
                                              September 29, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">Corn Waffles in Raw Milk</a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Praesent vestibulum molestie lacus. Aenean nonummy
                                            hendrerit mauris. Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info_recipes">
                                          <span className="recipes-item icon-food-1">
                                            4 ingridient
                                          </span>
                                          <span className="recipes-item icon-clock-1">15 min</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_recipes isotope_item_recipes_3 isotope_column_3">
                                    <div className="post_item post_item_recipes post_item_recipes_3 post_format_standard even">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/recipe-5.jpg"
                                          data-title="Vanilla Ice Cream"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img alt="" src="/assets/images/2000x1600.png" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a href="single-post.html" className="post_info_date">
                                              September 29, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">Vanilla Ice Cream</a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Praesent vestibulum molestie lacus. Aenean nonummy
                                            hendrerit mauris. Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info_recipes">
                                          <span className="recipes-item icon-food-1">
                                            4 ingridient
                                          </span>
                                          <span className="recipes-item icon-clock-1">90 min</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_recipes isotope_item_recipes_3 isotope_column_3">
                                    <div className="post_item post_item_recipes post_item_recipes_3 post_format_standard odd">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/recipe-6.jpg"
                                          data-title="Blueberry Cream Ice"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img alt="" src="/assets/images/2000x1600.png" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a href="single-post.html" className="post_info_date">
                                              September 29, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">Blueberry Cream Ice</a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Praesent vestibulum molestie lacus. Aenean nonummy
                                            hendrerit mauris. Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info_recipes">
                                          <span className="recipes-item icon-food-1">
                                            4 ingridient
                                          </span>
                                          <span className="recipes-item icon-clock-1">55 min</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_recipes isotope_item_recipes_3 isotope_column_3">
                                    <div className="post_item post_item_recipes post_item_recipes_3 post_format_standard even">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/recipe-7.jpg"
                                          data-title="Marinated Beef Steak"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img alt="" src="/assets/images/2000x1600.png" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a href="single-post.html" className="post_info_date">
                                              September 29, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">Marinated Beef Steak</a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Praesent vestibulum molestie lacus. Aenean nonummy
                                            hendrerit mauris. Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info_recipes">
                                          <span className="recipes-item icon-food-1">
                                            4 ingridient
                                          </span>
                                          <span className="recipes-item icon-clock-1">45 min</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="isotope_item isotope_item_recipes isotope_item_recipes_3 isotope_column_3">
                                    <div className="post_item post_item_recipes post_item_recipes_3 post_format_standard odd last">
                                      <div className="post_featured">
                                        <div
                                          className="post_thumb"
                                          data-image="images/recipe-8.jpg"
                                          data-title="Fried Bacon &#038; Eggs"
                                        >
                                          <a
                                            className="hover_icon hover_icon_link"
                                            href="single-post.html"
                                          >
                                            <img alt="" src="/assets/images/2000x1600.png" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="post_content isotope_item_content">
                                        <div className="post_info">
                                          <span className="post_info_item post_info_posted">
                                            <a href="single-post.html" className="post_info_date">
                                              September 29, 2016
                                            </a>
                                          </span>
                                        </div>
                                        <h4 className="post_title">
                                          <a href="single-post.html">Fried Bacon &#038; Eggs</a>
                                        </h4>
                                        <div className="post_descr">
                                          <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Praesent vestibulum molestie lacus. Aenean nonummy
                                            hendrerit mauris. Phasellus porta.
                                          </p>
                                        </div>
                                        <div className="post_info_recipes">
                                          <span className="recipes-item icon-food-1">
                                            4 ingridient
                                          </span>
                                          <span className="recipes-item icon-clock-1">22 min</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="vc_empty_space h_1p">
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Feature />
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

export default Recipes;
