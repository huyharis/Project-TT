import React, { Component } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Alert } from "reactstrap";
import { serverUrl, configHeader } from "../../../../utils/config.js";

const initialState = {
  image: "",
  src: "one",
  typeId: "",
  chooseType: "one",
  visible: false,
  messenger: "",
};

export default class Modal_Prod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      typeProd: [],
      src: true,
      typeId: "",
      chooseType: "one",
      visible: false,
      messenger: "",
      product: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("_id", this.props.product._id);
    formData.append("name", event.target.name.value);
    formData.append("price", event.target.price.value);
    formData.append("type", event.target.type.value);
    formData.append("describe", event.target.describe.value);
    formData.append("image", event.target.image.files[0]);
    axios
      .put(`${serverUrl}/api/product/`, formData, configHeader)
      .then((result) => {
        this.setState({ messenger: result.data.message, visible: true });
      });
    // this.props.callBack();
    // this.setState({ ...initialState });
  };
  handleAdd = (event) => {
    event.preventDefault();

    var formData = new FormData();
    // formData.append('_id', this.props.product._id);
    formData.append("name", event.target.name.value);
    formData.append("price", event.target.price.value);
    formData.append("type", event.target.type.value);
    formData.append("describe", event.target.describe.value);
    formData.append("image", event.target.image.files[0]);

    axios
      .post(`${serverUrl}/api/product/`, formData, configHeader)
      .then((result) => {
        this.setState({ messenger: result.data.message, visible: true });
      });

    // this.props.callBack();
    // this.setState({ ...initialState });
  };
  changetextarea = (event) => {
    const { product } = this.state;
    product.describe = event.target.value;

    this.setState({ product });
  };
  toBase64(image) {
    let reader = new FileReader();
    reader.readAsDataURL(image.files[0]);
    return reader;
  }
  changImg = (event) => {
    let reader = this.toBase64(event.target);
    reader.onload = () => {
      this.setState({ image: reader.result, src: false });
    };
  };
  getIdType = (event) => {
    this.setState({ typeId: event.target.value, chooseType: "two" });
  };
  componentDidMount() {
    fetch(`${serverUrl}/api/product/getType`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((typeProd) => this.setState({ typeProd }));
  }

  componentWillReceiveProps({ product }) {
    const prev = this.state.product;
    if (prev != product) {
      this.setState({ product });
    }
  }
  handleHide = () => {
    this.setState(initialState);
    this.props.callBack();
  };
  render() {
    const imagesPath = {
      one: this.props.product.image,
      two: this.state.image,
    };
    const src = this.state.src;
    const selected = {
      one: this.props.product.product_type_id,
      two: this.state.typeId,
    };
    const select = this.state.chooseType;
    return (
      <Modal
        size="lg"
        show={this.props.show}
        onHide={this.handleHide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <div className="card card-user" style={{ margin: 0 }}>
          <div className="card-body">
            <Alert
              color="info"
              isOpen={this.state.visible}
              toggle={this.onDismiss}
              style={{
                width: "28%",
                position: "absolute",
                right: "-31%",
                top: "0",
              }}>
              <h4 className="alert-heading" style={{ margin: "0" }}>
                Well done!
              </h4>
              <hr style={{ margin: "0" }} />
              <p className="mb-0">{this.state.messenger}</p>
            </Alert>
            <form
              onSubmit={this.props.add ? this.handleAdd : this.handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  {src ? (
                    <img src={`${serverUrl + imagesPath["one"]}`} />
                  ) : (
                    <img src={imagesPath["two"]} />
                  )}

                  <input
                    type="file"
                    name="image"
                    onChange={this.changImg}
                    style={{
                      width: "100%",
                      display: "block",
                      paddingTop: "10px",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          defaultValue={this.props.product.name}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <select
                          id="inputState"
                          className="form-control"
                          name="type"
                          value={selected[select]}
                          onChange={this.getIdType}
                          style={{ height: "41px" }}>
                          {this.state.typeProd.map((type) => (
                            <option key={type._id} value={type._id}>
                              {type.type_product}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                          type="text"
                          name="price"
                          className="form-control"
                          placeholder="Price"
                          defaultValue={this.props.product.price}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="describe">Describe</label>
                        <textarea
                          name="describe"
                          className="form-control textarea"
                          value={
                            this.state.product
                              ? this.state.product.describe
                              : ""
                          }
                          onChange={this.changetextarea}></textarea>
                      </div>
                    </div>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button
                        type="submit"
                        className="btn btn-default"
                        style={{
                          textAlign: "center",
                          padding: "11px 62px",
                          borderRadius: "19px",
                        }}>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}
