import React, { Component } from "react";

class Statistical extends Component {
  render() {
    return (
      <section
        className="ftco-counter ftco-bg-dark img"
        id="section-counter"
        style={{ backgroundImage: "url(images/bg_2.jpg)", width: "100%" }}
        data-stellar-background-ratio="0.5">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon">
                        <img
                          src="../images/coffeebeans.png"
                          style={{ width: "70px" }}
                        />
                      </div>
                      <strong className="number" data-number={100}>
                        0
                      </strong>
                      <span>Coffee Branches</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon">
                        <img
                          src="../images/coffeebeans.png"
                          style={{ width: "70px" }}
                        />
                      </div>
                      <strong className="number" data-number={85}>
                        0
                      </strong>
                      <span>Number of Awards</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon">
                        <img
                          src="../images/coffeebeans.png"
                          style={{ width: "70px" }}
                        />
                      </div>
                      <strong className="number" data-number={10567}>
                        0
                      </strong>
                      <span>Happy Customer</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <div className="icon">
                        <img
                          src="../images/coffeebeans.png"
                          style={{ width: "70px" }}
                        />
                      </div>
                      <strong className="number" data-number={900}>
                        0
                      </strong>
                      <span>Staff</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Statistical;
