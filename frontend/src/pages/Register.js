import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_PATH } from '../API_PATH';

function Register() {
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
            <h1 className="page_title">Login</h1>
            <div className="breadcrumbs">
              <Link className="breadcrumbs_item home" to="/">
                Home
              </Link>
              <span className="breadcrumbs_delimiter" />
              <span className="breadcrumbs_item current">Login</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page_content_wrap page_paddings_no">
        <div className="content_wrap">
          <div className="content">
            <article className="post_item post_item_single post_featured_default post_format_standard page type-page hentry my-3">
              <div className="row justify-content-center">
                <div className="col-6">
                  <div className="card" style={{ border: '0px' }}>
                    <div className="card-header">
                      <h4 className="text-center">Login Form</h4>
                    </div>
                    <form action="">
                      <div className="card-body">
                        <div className="form-group my-2">
                          <label htmlFor="_name">
                            <strong>Name:</strong>
                          </label>
                          <input
                            type="text"
                            id="_name"
                            name="name"
                            className="form-control"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div className="form-group my-2">
                          <label htmlFor="_email">
                            <strong>Email:</strong>
                          </label>
                          <input
                            type="email"
                            id="_email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="form-group my-2">
                          <label htmlFor="_pass">
                            <strong>Password:</strong>
                          </label>
                          <input
                            type="password"
                            id="_pass"
                            name="password"
                            className="form-control"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <div>
                          <span>
                            Already a member? <Link to="/login">Login Here</Link>
                          </span>{' '}
                          <br />
                          <span>
                            Login as admin? <a href={`${API_PATH}`}>Admin Login</a>
                          </span>
                        </div>
                        <input
                          type="submit"
                          name="submit"
                          value="Register"
                          className="btn btn-success"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </article>
            <section className="related_wrap related_wrap_empty" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
