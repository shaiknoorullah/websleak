import React from "react";
import { Formik, Form, Field } from "formik";

const ContactWithMap = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    alert(JSON.stringify(values, null, 2));
                    // show message

                    messageRef.current.innerText =
                      "Thank You! Your Message has been successfully sent. We will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <button type="submit" className="btn-curve btn-lit">
                          <span>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <h3 className="custom-font wow" data-splitting>
                  Let&apos;s Talk.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">info@websleak.com</a>
                  </h5>
                  <h5>
                  <a href="#0">sales@websleak.com</a>
                  </h5>
                  <br></br>
                  <h5>+91 8121885150</h5>
                  <h5>+91 7995590234</h5>
                </div>
                {/* <h3 className="custom-font wow" data-splitting>
                  Visit Us.
                </h3>
                <div className="item">
                  <h6>
                    295 Witting Streets Suite 666,
                    <br />
                    Melbourne, Australia
                  </h6>
                </div> */}
                <div className="social mt-50">
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
      </section>
      {/* <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.687203718404!2d-0.14297520856388865!3d51.502466162777694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1644772966009!5m2!1sen!2seg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
              © 2022, Websleak. Made with passion by 
              <a href="#0">Websleak</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
