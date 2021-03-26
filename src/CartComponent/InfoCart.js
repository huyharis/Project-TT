import React, { Component } from "react";
import Product from "./Product";
import ProductJustName from "./ProductJustName";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class InfoCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card position-fixed cart-fixed">
        <div className="card-body">
          <h5 className="card-title text-center">Your Cart</h5>
          <li>
            <NavLink
              to="/payment"
              className="btn btn-success btn-lg"
              style={{ width: "100%", fontSize: "13px", fontFamily: "Tobato" }}>
              Payment
            </NavLink>
          </li>
          <hr />
          {this.props.cart.map((item, index) => (
            <div key={index}>
              <ProductJustName product={item} />
              <hr />
            </div>
          ))}

          <div className="total d-flex justify-content-between">
            <p>Total</p>
            <p>
              $
              {this.props.cart.length ? (
                this.props.cart.reduce(
                  (total, item) => (total = total + item.price * item.amount),
                  0
                )
              ) : (
                <div>0</div>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps, null)(InfoCart);
