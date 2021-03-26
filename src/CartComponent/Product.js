import React, { Component } from "react";
import Number from "./Number";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="center">
          <div className="left">
            <img
              src={`${this.props.product.image}`}
              width="80"
              height="80"
              alt=""
            />
          </div>
          <div className="right">
            <b>{this.props.product.name}</b>
            <p className="desc">{this.props.product.describe}</p>
            <p className="price"> {this.props.product.price} đ</p>
          </div>
        </div>
        <Number product={this.props.product} />
      </div>
    );
  }
}

export default Product;
