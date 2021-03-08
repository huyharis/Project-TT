import React, { Component } from "react";
class Menu extends Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 id="menu" className="section-heading text-center">
              kataleya food menu
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div>
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="#tab-0" data-toggle="tab">
                    coffee
                  </a>
                </li>
                <li>
                  <a href="#tab-1" data-toggle="tab">
                    tea & macchiato
                  </a>
                </li>
                <li>
                  <a href="#tab-2" data-toggle="tab">
                    cake
                  </a>
                </li>
              </ul>
            </div>
            <div className="container">
              <div className="row d-md-flex">
                <div className="col-md-12 d-flex align-items-center">
                  <div
                    className="tab-content ftco-animate"
                    id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-0"
                      role="tabpanel"
                      aria-labelledby="v-pills-0-tab">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="menu-entry">
                            <img
                              href="#"
                              className="img"
                              style={{
                                backgroundImage: "url(images/tiramisu.jpeg)",
                                width: "100%",
                                height: "220px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                              }}
                            />
                            <div className="text text-center pt-4">
                              <h3>
                                <a href="product-single.html">
                                  Coffee Capuccino
                                </a>
                              </h3>
                              <p>
                                A small river named Duden flows by their place
                                and supplies
                              </p>
                              <p className="price">
                                <span>$5.90</span>
                              </p>
                              <p>
                                <a
                                  href="cart.html"
                                  className="btn btn-primary btn-outline-primary">
                                  Add to Cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="menu-entry">
                            <img
                              href="#"
                              className="img"
                              style={{
                                backgroundImage: "url(images/menu/menu-2.jpg)",
                                width: "100%",
                                height: "220px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                              }}
                            />
                            <div className="text text-center pt-4">
                              <h3>
                                <a href="product-single.html">
                                  Coffee Capuccino
                                </a>
                              </h3>
                              <p>
                                A small river named Duden flows by their place
                                and supplies
                              </p>
                              <p className="price">
                                <span>$5.90</span>
                              </p>
                              <p>
                                <a
                                  href="cart.html"
                                  className="btn btn-primary btn-outline-primary">
                                  Add to Cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="menu-entry">
                            <img
                              href="#"
                              className="img"
                              style={{
                                backgroundImage: "url(images/menu/menu-3.jpg)",
                                width: "100%",
                                height: "220px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                              }}
                            />
                            <div className="text text-center pt-4">
                              <h3>
                                <a href="product-single.html">Cold Brew</a>
                              </h3>
                              <p>
                                A small river named Duden flows by their place
                                and supplies
                              </p>
                              <p className="price">
                                <span>$5.90</span>
                              </p>
                              <p>
                                <a
                                  href="cart.html"
                                  className="btn btn-primary btn-outline-primary">
                                  Add to Cart
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="menu-entry">
                            <img
                              href="#"
                              className="img"
                              style={{
                                backgroundImage: "url(images/menu/menu-4.jpg)",
                                width: "100%",
                                height: "220px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                              }}
                            />
                            <div className="text text-center pt-4">
                              <h3>
                                <a href="product-single.html">
                                  Coffee Capuccino
                                </a>
                              </h3>
                              <p>
                                A small river named Duden flows by their place
                                and supplies
                              </p>
                              <p className="price">
                                <span>$5.90</span>
                              </p>
                              <p>
                                <a
                                  href="cart.html"
                                  className="btn btn-primary btn-outline-primary">
                                  Add to Cart
                                </a>
                              </p>
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
        </div>
      </section>
    );
  }
}
export default Menu;
