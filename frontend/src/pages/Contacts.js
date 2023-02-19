import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contacts() {
  useEffect(() => {
    const cont = document.getElementsByTagName('body')[0];
    cont.className =
      'page contactspg body_style_wide body_filled article_style_stretch layout_single-standard template_single-standard scheme_original top_panel_show top_panel_above sidebar_hide sidebar_outer_hide vc_responsive';

    return () => {
      cont.className = '';
    };
  }, []);

  return (
    <>
      <div className="top_panel_title top_panel_style_1 title_present breadcrumbs_present scheme_original">
        <div className="bg_cust_1 top_panel_title_inner top_panel_inner_style_1 title_present_inner breadcrumbs_present_inner">
          <div className="content_wrap">
            <h1 className="page_title">Contacts</h1>
            <div className="breadcrumbs">
              <Link className="breadcrumbs_item home" to="/">
                Home
              </Link>
              <span className="breadcrumbs_delimiter" />
              <span className="breadcrumbs_item current">Contacts</span>
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
                  data-vc-stretch-content="true"
                  className="vc_row wpb_row vc_row-fluid vc_row-no-padding"
                >
                  <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                      <div className="wpb_wrapper">
                        <div id="sc_googlemap_571_wrap" className="sc_googlemap_wrap">
                          <div
                            id="sc_googlemap_571"
                            className="sc_googlemap"
                            data-zoom="16"
                            data-style="greyscale"
                          >
                            <div
                              id="sc_googlemap_571_1"
                              className="sc_googlemap_marker"
                              data-title=""
                              data-description=""
                              data-address="Rome"
                              data-latlng=""
                              data-point="/assets/images/google_marker.png"
                            >
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.148925397306!2d90.4119560955531!3d23.73675578012559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b95414452061%3A0x28d19c7d55f7059!2sBangladesh%20Scouts%20Dhaka%20Metropolitan!5e0!3m2!1sen!2sbd!4v1673953135296!5m2!1sen!2sbd"
                                width="1500"
                                height="600"
                                style={{ border: '0px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="address"
                              />
                            </div>
                          </div>
                          <div className="sc_googlemap_content">
                            <div id="sc_form_282_wrap" className="sc_form_wrap">
                              <div id="sc_form_282" className="sc_form sc_form_style_form_1">
                                <h2 className="sc_form_title sc_item_title sc_item_title_without_descr">
                                  Contact Us
                                </h2>
                                <form
                                  id="sc_form_282_form"
                                  className="sc_input_hover_default"
                                  data-formtype="form_1"
                                  method="post"
                                  action="includes/sendmail.php"
                                >
                                  <div className="sc_form_info">
                                    <div className="sc_form_item sc_form_field label_over">
                                      <input
                                        id="sc_form_username"
                                        type="text"
                                        name="username"
                                        placeholder="Name *"
                                        aria-required="true"
                                      />
                                    </div>
                                    <div className="sc_form_item sc_form_field label_over">
                                      <input
                                        id="sc_form_email"
                                        type="text"
                                        name="email"
                                        placeholder="E-mail *"
                                        aria-required="true"
                                      />
                                    </div>
                                  </div>
                                  <div className="sc_form_item sc_form_message">
                                    <textarea
                                      id="sc_form_message"
                                      name="message"
                                      placeholder="Message"
                                      aria-required="true"
                                    />
                                  </div>
                                  <div className="sc_form_item sc_form_button">
                                    <button>Send Message</button>
                                  </div>
                                  <div className="result sc_infobox" />
                                </form>
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
                        <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_3 margin_top_huge margin_bottom_huge">
                          <div className="column-1_3 sc_column_item sc_column_item_1 odd first centext">
                            <div className="sc_section section_style_bordered_section">
                              <div className="sc_section_inner">
                                <div className="sc_section_content_wrap">
                                  <h4 className="sc_title sc_title_regular sc_align_center">
                                    Address
                                  </h4>
                                  <span className="sc_highlight">Alamdanga-7210, Chuadanga</span>
                                  <div className="vc_empty_space h_42e">
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="column-1_3 sc_column_item sc_column_item_2 even centext">
                            <div className="sc_section section_style_bordered_section">
                              <div className="sc_section_inner">
                                <div className="sc_section_content_wrap">
                                  <h4 className="sc_title sc_title_regular sc_align_center">
                                    Phone
                                  </h4>
                                  <span className="sc_highlight">+880-1737-036324</span>
                                  <div className="vc_empty_space h_42e">
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="column-1_3 sc_column_item sc_column_item_3 odd centext">
                            <div className="sc_section section_style_bordered_section">
                              <div className="sc_section_inner">
                                <div className="sc_section_content_wrap">
                                  <h4 className="sc_title sc_title_regular sc_align_center">
                                    Email
                                  </h4>
                                  <span className="sc_highlight">info@dairyfarm.com</span>
                                  <div className="vc_empty_space h_42e">
                                    <span className="vc_empty_space_inner" />
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
              </section>
            </article>
            <section className="related_wrap related_wrap_empty" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
