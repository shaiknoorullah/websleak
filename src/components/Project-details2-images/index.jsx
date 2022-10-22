/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetails2Images = () => {
  return (
    <div className="imagesSection">
      <section className="projdtal">
        <h2 style={{ display: "none" }}> &nbsp; </h2>
        <div className="container-fluid">
          <div className="justified-gallery">
            <div className="row">
              <div className="col-md-3 pr-0">
                <a href="/img/profecientNow/mobilehome.png">
                  <img alt="" src="/img/profecientNow/mobilehome.png" />
                </a>
              </div>
              <div className="col-md-3 pr-0">
                <a href="/img/profecientNow/proficientsquare.png">
                  <img alt="" src="/img/profecientNow/proficientsquare.png" />
                </a>
              </div>

              <div className="col-md-3 pr-0">
                <a href="/img/profecientNow/proficientweb.png">
                  <img alt="" src="/img/profecientNow/proficientweb.png" />
                </a>
              </div>
              <div className="col-md-3 pr-0">
                <a href="/img/profecientNow/desktopdashboard.png">
                  <img alt="" src="/img/profecientNow/desktopdashboard.png" />
                </a>
              </div>
              <div className="col-12">
                <a
                  className="bigImage"
                  href="/img/profecientNow/proficientwide.png"
                >
                  <img
                    alt=""
                    src="/img/profecientNow/proficientwide.png"
                    className="big-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails2Images;
