import React, { Component } from "react";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../../../../utils/config";

class AllMenu extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      product: [],
      products: [],
      typeProd: [],
      show: false,
      add: false,
    };
  }

  getProducts = async () => {
    await axios.get(`${serverUrl}/api/product`).then((result) => {
      this.setState({ products: result.data });
    });
  };
  getTypeProd = () => {
    fetch(`${serverUrl}/api/product/getType`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((typeProd) => this.setState({ typeProd }));
  };

  getSearchProducts = () => {
    let name = { name: this.state.query };
    fetch(`${serverUrl}/api/product/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name),
    })
      .then((res) => res.json())
      .then((prod) => {
        this.setState({ products: prod });
      });
  };

  getByType = (idType) => {
    fetch(`${serverUrl}/api/product/getByType/` + idType, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((products) => this.setState({ products }));
  };

  handleSearchProd = () => {
    this.setState({
      query: this.searchProd.value,
    });
    if (this.state.query && this.state.query.length > 1) {
      if (this.state.query.length % 2 === 0) {
        this.getSearchProducts();
      }
    } else if (this.state.query.length === 0) {
      this.getProducts();
    }
  };

  componentDidMount() {
    this.getProducts();
    this.getTypeProd();
  }
  handleShow = () => {
    this.setState({ show: true });
  };

  handleHide = () => {
    this.getProducts();
    this.setState({ show: false });
  };
  render() {
    return (
      <section className="ftco-menu mb-5 pb-5">
        <div className="row">
          <div className="col-md-12">
            <h2
              id="menu"
              className="section-heading text-center"
              style={{ color: "#c49b63" }}>
              The Teacake Menu
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div>
              <ul className="nav nav-tabs">
                <li>
                  <a
                    style={{ color: "#c49b63" }}
                    href="#"
                    a
                    data-toggle="tab"
                    onClick={this.getProducts}>
                    All
                  </a>
                </li>
                {this.state.typeProd.map((type) => (
                  <li key={type._id}>
                    <a
                      style={{ color: "#c49b63" }}
                      href="#"
                      data-toggle="tab"
                      onClick={() => this.getByType(type._id)}
                      key={type._id}>
                      {type.type_product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="container">
              <div className="row d-md-flex">
                <div className="col-md-12 d-flex align-items-center">
                  <div className="tab-content ftco-animate">
                    <div className="tab-pane fade show active">
                      {this.state.products.map((prd) => {
                        return (
                          <div className="col-md-3" key={prd._id}>
                            <div className="menu-entry">
                              <img
                                href="#"
                                className="img"
                                src={prd.image}
                                style={{
                                  width: "100%",
                                  height: "220px",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center center",
                                }}
                              />
                              <div className="text text-center pt-4">
                                <h4>
                                  <a
                                    href="product-single.html"
                                    style={{
                                      color: "#c49b63",
                                      fontWeight: "100",
                                      textTransform: "uppercase",
                                      fontFamily:
                                        '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                                      fontSize: "0.7em",
                                    }}>
                                    {prd.name}
                                  </a>
                                </h4>
                                <p className="price">
                                  <h5>
                                    <span
                                      style={{
                                        color: "#fff",
                                        fontSize: "16px",
                                        fontFamily:
                                          '"Bebas Neue","Lato", sans-serif',
                                        fontWeight: "700",
                                      }}>
                                      ${prd.price}
                                    </span>
                                  </h5>
                                </p>
                                <li>
                                  <NavLink
                                    to="/order"
                                    className="btn btn-primary btn-outline-primary"
                                    style={{
                                      color: "#c49b63",
                                      fontFamily:
                                        '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                                    }}>
                                    Buy Now
                                  </NavLink>
                                </li>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
export default AllMenu;
