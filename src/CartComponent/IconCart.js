import React, { Component } from 'react';
import {connect} from 'react-redux'
class IconCart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
           {this.props.cart.length ? (
               <span className="numberCart">{this.props.cart.length}</span>

           ):""} 
            <i className="fa fa-shopping-cart" style={{color:'white'}} aria-hidden="true"></i>
           
            </div>
        );
    }
}
 const mapStateToProps=state=>({
     cart:state.cart
 })
export default connect(mapStateToProps,null) (IconCart);