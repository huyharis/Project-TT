import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartAction";
class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  subNumber = () => {
    if (this.state.number > 1) {
      this.setState({
        number: this.state.number - 1,
      });
    }
  };
  plusNumber = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  addCart = (name, price, _id) => {
    this.props.addToCart(_id, name, price, this.state.number);
  };
  render() {
    const { _id, name, price } = this.props.product;
    return (
      <div className="d-flex justify-content-between">
        <div className="n-left d-inline-flex align-items-center">
          <i
            className="fa fa-minus rounded-circle css-circle"
            aria-hidden="true"
            onClick={this.subNumber}></i>
          <span style={{ marginRight: "5px" }}>{this.state.number}</span>
          <i
            className="fa fa-plus rounded-circle css-circle"
            aria-hidden="true"
            onClick={this.plusNumber}></i>
        </div>
        <div className="n-right">
          <button
            className="btn btn-outline-success"
            onClick={() => this.addCart(name, price, _id)}>
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addToCart: (_id, name, price, amount) =>
    dispatch(addToCart(_id, name, price, amount)),
});
export default connect(null, mapDispatchToProps)(Number);
