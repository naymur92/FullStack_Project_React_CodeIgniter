import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { FRONT_API_PATH } from '../FRONT_API_PATH';
import useLocalStorage from '../hooks/useLocalStorage';

function Checkout() {
  const [cartItems, setCartItems, onAdd, onRemove, onEmpty, itemsPrice, loginInfo, setLoginInfo] =
    useOutletContext();
  const navigate = useNavigate();
  const [pendingCheckout, setPendingCheckout] = useLocalStorage('pendingcheckout', {
    status: 'pending',
  });

  const authenticate = () => {
    if (!loginInfo?.loginStatus) {
      navigate('/login');
    }
    // console.log(loginInfo);
  };

  useEffect(() => {
    document.getElementsByClassName('checkout')[0].scrollIntoView();
    if (cartItems.length === 0) {
      navigate('/shop');
    }
    authenticate();

    const cont = document.getElementsByTagName('body')[0];
    cont.className =
      'page contactspg body_style_wide body_filled article_style_stretch layout_single-standard template_single-standard scheme_original top_panel_show top_panel_above sidebar_hide sidebar_outer_hide vc_responsive';

    return () => {
      cont.className = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Shipping Charge
  const [shipping, setShipping] = useState({
    country: 'Bangladesh',
    area: '(none)',
    zipcode: '(none)',
    address: '(none)',
    phone: '',
  });
  const onChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    // console.log(shipping);
    // console.log(cartItems);
    // localStorage.removeItem('pendingcheckout');
    await axios
      .post(`${FRONT_API_PATH}/new_order.php`, {
        userid: loginInfo.id,
        products: cartItems,
        total: itemsPrice,
        address: shipping,
        payment: { method: document.getElementById('pmt_method').value },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          setCartItems([]);
          localStorage.removeItem('pendingcheckout');
          navigate('/shop');
        }
        alert(res.data.msg);
        // console.log(res.data);
      });
  };
  return (
    <>
      <div className="top_panel_title top_panel_style_1 title_present breadcrumbs_present scheme_original">
        <div className="bg_cust_1 top_panel_title_inner top_panel_inner_style_1 title_present_inner breadcrumbs_present_inner">
          <div className="content_wrap">
            <h1 className="page_title">Checkout</h1>
            <div className="breadcrumbs">
              <Link className="breadcrumbs_item home" to="/">
                Home
              </Link>
              <span className="breadcrumbs_delimiter" />
              <span className="breadcrumbs_item current">Checkout Page</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page_content_wrap page_paddings_no">
        <div className="content_wrap">
          <div className="content">
            <article className="post_item post_item_single post_featured_default post_format_standard page type-page hentry my-3">
              <div className="checkout shop-cart padding-tb">
                <div className="container">
                  <div className="section-wrapper">
                    <div className="cart-top">
                      <table>
                        <thead>
                          <tr>
                            <th style={{ textAlign: 'left' }}>Product</th>
                            <th style={{ textAlign: 'left' }}>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            <tr key={item.id}>
                              <td className="product-item">
                                <div className="p-content">
                                  <Link to={`/shop/view-product/${item.id}`}>
                                    {item.product_name}
                                  </Link>
                                </div>
                              </td>
                              <td className="price">
                                &#2547; {Number(item.product_price).toFixed(2)}
                              </td>
                              <td className="text-center">{item.qty}</td>
                              <td className="price">
                                &#2547; {Number(item.qty * item.product_price).toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="cart-bottom">
                      <div className="shiping-box">
                        <form className="calculate-shiping" onSubmit={handleCheckout}>
                          <div className="row">
                            <div className="col-md-6 col-12">
                              <h4>Set Delivery Location</h4>
                              <div className="outline-select">
                                <select name="country" className="form-control">
                                  <option value="bangladesh" selected>
                                    Bangladesh
                                  </option>
                                </select>
                                <span className="select-icon">
                                  <i className="fa fa-caret-down" />
                                </span>
                              </div>
                              <div className="outline-select shipping-select">
                                <select name="area" onChange={onChange} className="form-control">
                                  <option value="" selected disabled>
                                    Select Area
                                  </option>
                                  <option value="dhaka">Dhaka</option>
                                  <option value="outside">Outside Dhaka</option>
                                </select>
                                <span className="select-icon">
                                  <i className="fa fa-caret-down" />
                                </span>
                              </div>
                              <input
                                type="text"
                                name="zipcode"
                                onChange={onChange}
                                placeholder="Postcode/ZIP"
                                style={{
                                  border: '1px solid #f0f0f0',
                                  borderRadius: '0',
                                  padding: '10px 20px',
                                }}
                                className="form-control cart-page-input-text"
                              />

                              <textarea
                                name="address"
                                onChange={onChange}
                                placeholder="Enter Address"
                                className="form-control"
                                style={{
                                  border: '1px solid #f0f0f0',
                                  borderRadius: '0',
                                  padding: '10px 20px',
                                  height: '100px',
                                }}
                                required
                              />
                              <input
                                type="text"
                                name="phone"
                                onChange={onChange}
                                placeholder="Enter Phone Number"
                                className="form-control my-3"
                                style={{
                                  border: '1px solid #f0f0f0',
                                  borderRadius: '0',
                                  padding: '10px 20px',
                                }}
                                required
                              />
                            </div>
                            <div className="col-md-6 col-12">
                              <div className="cart-overview">
                                <h4>Cart Totals</h4>
                                <ul className="p-2">
                                  <li>
                                    <span className="pull-left">Total:</span>
                                    <p className="pull-right price">
                                      &#2547; {itemsPrice.toFixed(2)}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                              <div className="row">
                                <div className="col-6 form-group mt-2">
                                  <label htmlFor="pmt_method">
                                    <strong>Payment Method:</strong>
                                  </label>
                                  <select name="pmtmethod" id="pmt_method" className="form-control">
                                    <option value="cashondelivery" selected>
                                      CashOnDelivery
                                    </option>
                                  </select>
                                </div>
                                <div className="col-6">
                                  <button type="submit" className="lab-btn mt-5">
                                    <span>Confirm Booking</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default Checkout;
