/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
          <div className="footerCont">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> 
                    <p>info@websleak.com</p>
                    <p>sales@websleak.com</p>
                  </li>
                  <li>
                    <span>Phone : </span>
                    <p>
                    (+91) 8121885150
                    </p>
                    <p>
                    (+91) 7995590234
                    </p>
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="https://www.facebook.com/Websleak-103188939027080" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/websleak/" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/websleak" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.pinterest.com/websleak/" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="https://www.behance.net/websleak" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>Sign up for more updates!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            {/* <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="#0">
                  <img src="/img/insta/1.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/insta/2.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/insta/3.jpg" alt="" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="copyrights text-center">
          <span>
            <p>
            © 2022, Websleak. Made with passion by 
            <a href="#0"> Websleak</a>.
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
