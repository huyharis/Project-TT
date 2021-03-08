import React, { Component } from "react";

class Opening extends Component {
  render() {
    return (
      <section className="opening-hours">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <h5 className="color">we are opened</h5>
                </li>
                <li>
                  <h6>mon</h6>
                  <br />9 - 22
                </li>
                <li>
                  <h6>tue:</h6>
                  <br />9 - 22
                </li>
                <li>
                  <h6>wed:</h6>
                  <br />9 - 22
                </li>
                <li>
                  <h6>thu:</h6>
                  <br />9 - 22
                </li>
                <li>
                  <h6>fri:</h6>
                  <br />9 - 22
                </li>
                <li>
                  <h6>sat:</h6>
                  <br />9 - 24
                </li>
                <li>
                  <h6>sun:</h6>
                  <br />9 - 24
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Opening;
