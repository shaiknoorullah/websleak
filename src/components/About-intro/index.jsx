import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className=" about row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We develop interactive digital experience for small and big brands alike,
                  build authentic product identities and much more. We specialize
                  in creating outstanding user experiences for both mobile and desktop.
                  We also specialize in creating highly interactive web experiences using technologies
                  such as WebGL.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
