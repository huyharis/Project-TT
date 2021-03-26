import React, { Component } from "react";
import { withFormik } from "formik";
import * as yup from "yup"; // for everything
import { connect } from "react-redux";
import { saveBill } from "../actions/billAction";
import { getProducInCart } from "../actions/cartAction";

class FormCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noti: 0,
    };
  }
  clickClose = () => {
    this.setState({
      noti: 1,
    });
  };

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props;

    return (
      <div>
        <form className="pt-3 pb-3" onSubmit={handleSubmit}>
          <div>
            <div className="inputWithIcon">
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
              />
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {errors.address && touched.address && (
                <div id="feedback" className="alert alert-danger">
                  {errors.address}
                </div>
              )}
            </div>

            <div className="inputWithIcon">
              <input
                type="text"
                placeholder="Your name"
                name="user"
                value={values.user}
                onChange={handleChange}
              />
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            {errors.user && touched.user && (
              <div id="feedback" className="alert alert-danger">
                {errors.user}
              </div>
            )}
            <div className="inputWithIcon">
              <input
                type="text"
                placeholder="Phone number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            {errors.phone && touched.phone && (
              <div id="feedback" className="alert alert-danger">
                {errors.phone}
              </div>
            )}
            <div className="inputWithIcon">
              <input
                type="text"
                placeholder="note"
                name="desc"
                value={values.desc}
                onChange={handleChange}
              />
             <i class="fas fa-sticky-note"></i>
            </div>
            {errors.desc && touched.desc && (
              <div id="feedback" className="alert alert-danger">
                {errors.desc}
              </div>
            )}

            <div>
              <input type="submit" value="Order" className="btn btn-success" />
            </div>
          </div>
          {this.props.status ? (
            <div className="alert alert-primary noti text-center" role="alert">
              Payment Successfully
              <i
                className="fa fa-window-close"
                onClick={this.clickClose}
                aria-hidden="true"></i>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ address: "", user: "", phone: "", desc: "" }),
  //validation with yup
  validationSchema: yup.object().shape({
    address: yup.string().required("Please fill your address"),
    user: yup.string().required("Please fill your name"),
    desc: yup.string().required("Fill in delivery reminder information"),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "phone must be number")
      .required("Please fill your phone number")
      .min(9, "phone at least 9 number")
      .max(11, "phone maximum is 11 number"),
  }),

  handleSubmit: (values, { props, setStatus, setSubmitting }) => {
    setTimeout(() => {
      const order = {
        address: values.address,
        user: values.user,
        note: values.desc,
        phone: values.phone,
      };
      props.saveBill(order);
      setStatus({ success: true });
      setSubmitting(false);
    }, 1000);
  },
})(FormCustomer);
const mapDispatchToProps = (dispatch) => ({
  saveBill: (order) => dispatch(saveBill(order)),
});
export default connect(null, mapDispatchToProps)(MyEnhancedForm);
