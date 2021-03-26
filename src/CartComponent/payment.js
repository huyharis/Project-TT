import React, { Component } from "react";
import "./payment.css";
import Order from "./Order";
import InfoCart from "./InfoCart";
import MyEnhancedForm from "./FormCustomer";
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      user: "",
      phone: "",
      desc: "",
    };
  }
  // changeAddress=(e)=>{
  //     this.setState({
  //         address:e.target.value
  //     })
  // }
  // changeUser=(e)=>{
  //     this.setState({
  //         user:e.target.value
  //     })
  // }
  // changePhone=(e)=>{
  //     this.setState({
  //         phone:e.target.value
  //     })
  // }
  // changeDesc=(e)=>{
  //     this.setState({
  //         desc:e.target.value
  //     })
  // }
  render() {
    return (
      <div className="container" style={{ marginTop: "200px" }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="card-title border-bottom pt-3 pb-3">
                  Checking Info
                </div>
                <MyEnhancedForm />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                {/* <div className="card-title border-bottom pt-3 pb-3">
                  Hình thức thanh toán
                </div>
                <p>SHIP CODE</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 res-cart">
            <InfoCart url={this.props.match.url} hoadon={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
