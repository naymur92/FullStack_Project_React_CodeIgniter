import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { API_PATH } from '../API_PATH';
import { FRONT_API_PATH } from '../FRONT_API_PATH';

function Login() {
  const [cartItems, onAdd, onRemove, onEmpty, itemsPrice, loginInfo, setLoginInfo] =
    useOutletContext();
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const authenticate = () => {
    if (loginInfo?.loginStatus) {
      navigate('/');
    }
    // console.log(loginInfo);
  };

  const onChangeValue = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    // console.log(userInfo);

    await axios.get(`${FRONT_API_PATH}/login.php`, { params: userInfo }).then((res) => {
      if (res.data.success) {
        setLoginInfo({ ...res.data.logininfo, loginStatus: true });
        navigate('/');
      }
      alert(res.data.msg);
      // console.log(res.data);
    });
  };
  useEffect(() => {
    const cont = document.getElementsByTagName('body')[0];
    authenticate();

    cont.className =
      'page contactspg body_style_wide body_filled article_style_stretch layout_single-standard template_single-standard scheme_original top_panel_show top_panel_above sidebar_hide sidebar_outer_hide vc_responsive';

    return () => {
      cont.className = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <form onSubmit={submitForm}>
                      <div className="card-body">
                        <div className="form-group my-2">
                          <label htmlFor="_email">
                            <strong>Email:</strong>
                          </label>
                          <input
                            type="email"
                            id="_email"
                            name="email"
                            onChange={onChangeValue}
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
                            onChange={onChangeValue}
                            className="form-control"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <div>
                          <span>
                            Not a member? <Link to="/register">Register Here</Link>
                          </span>{' '}
                          <br />
                          <span>
                            Login as admin? <a href={`${API_PATH}`}>Admin Login</a>
                          </span>
                        </div>
                        <input
                          type="submit"
                          name="submit"
                          value="Login"
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

export default Login;
