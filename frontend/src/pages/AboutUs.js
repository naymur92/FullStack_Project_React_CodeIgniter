import React, { useEffect } from 'react';
import Clients from '../components/Clients';
import Feature from '../components/Feature';
import Welcome from '../components/Welcome';

function AboutUs() {
  useEffect(() => {
    const cont = document.getElementsByTagName('body')[0];
    cont.className =
      'page ab1 body_style_wide body_filled article_style_stretch layout_single-standard template_single-standard scheme_original top_panel_show top_panel_above sidebar_hide sidebar_outer_hide vc_responsive';

    return () => {
      cont.className = '';
    };
  }, []);

  return (
    <>
      <div className="top_panel_title top_panel_style_1 title_present breadcrumbs_present scheme_original">
        <div className="bg_cust_1 top_panel_title_inner top_panel_inner_style_1 title_present_inner breadcrumbs_present_inner">
          <div className="content_wrap">
            <h1 className="page_title">About</h1>
            <div className="breadcrumbs">
              <a className="breadcrumbs_item home" href="/">
                Home
              </a>
              <span className="breadcrumbs_delimiter" />
              <span className="breadcrumbs_item current">About</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page_content_wrap page_paddings_no">
        <div className="content_wrap">
          <div className="content">
            <article className="post_item post_item_single post_featured_default post_format_standard page type-page hentry">
              <section className="post_content">
                <Welcome />

                <Feature />
                <div className="vc_row-full-width" />

                <Clients />
                <div className="vc_row-full-width" />
              </section>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
