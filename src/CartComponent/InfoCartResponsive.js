import React, { Component } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
class InfoCartResponsive extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className="col-xs-4">
                  <div className="res-left"> {this.props.cart.length} Món</div>
            </div>
           
            <div className="col-xs-4">
                  <li className="res-left"><NavLink to="/payment" style={{color:'white'}}>Giỏ hàng</NavLink>  </li>
            </div>
            <div className="col-xs-4">
                  <div className="res-left"> {this.props.cart.length ?  this.props.cart.reduce((total,item)=>(
                 total =total+(item.price*item.amount)
             ),0):<div>0 đ</div>} </div>  
            </div>
        </div> );
    }
}
const mapStateToProps=(state)=>({
    cart:state.cart
})
export default connect(mapStateToProps,null)(InfoCartResponsive);