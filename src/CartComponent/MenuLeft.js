import React, { Component } from "react";
import { connect } from "react-redux";
import { getTypeProduct } from "../actions/typeProductAction";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  render() {
    return (
      <div className="card position-fixed left-fixed">
        <ul className="list-group list-group-flush">
          {this.props.types?.map((type, index) => (
            <li className="list-group-item menuleft-1" key={type._id}>
              <Link
                activeClass="active-menu"
                to={`block${index + 1}`}
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}>
                {type.type_product}
              </Link>
            </li>
          ))}
        </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(MenuLeft);
