import React, { Component } from "react";
import MenuLeft from "./MenuLeft";

import ListProduct from "./ListProduct";
import InfoCart from "./InfoCart";
import { connect } from "react-redux";
import { getTypeProduct } from "../actions/typeProductAction";
//
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import InfoCartResponsive from "./InfoCartResponsive";
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      console.log('this.props', this.props)
    return (
      <div>
        <div className="container">
          <div className="row order-1">
            <div className="col-sm-3 menu-left">
              <MenuLeft />
            </div>
            <div className="col-lg-5">
              {this.props.types?.map((type, index) => (
                <Element name={`block${index + 1}`} className="element">
                  <div key={index}>
                    <h5>
                      {index + 1}.{type.type_product}
                    </h5>
                    <ListProduct products={type.products} />
                  </div>
                </Element>
              ))}
            </div>
            <div className="col-sm-4 info-cart">
              <InfoCart />
            </div>
          </div>
        </div>
        <div className="row res">
          <InfoCartResponsive />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getType: () => dispatch(getTypeProduct()),
});
const mapStateToProps = (state) => ({
  types: state.type,
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);
