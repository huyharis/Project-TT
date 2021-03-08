import React, { Component } from "react";
import axios from "axios";
import { serverUrl } from "../../../../utils/config";

import { Modal } from "react-bootstrap";

class BlogContent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      blogs: [],
      blog: "",
      show: false,
    };

    this.handleHide = () => {
      this.setState({ show: false });
      this.onClearArray();
    };
  }
  onClearArray = () => {
    this.setState({ blog: [] });
  };
  getBlogs = () => {
    axios.get(`${serverUrl}/api/blog`).then((result) => {
      this.setState({ blogs: result.data });
    });
  };
  componentDidMount() {
    this.getBlogs();
  }
  openBlog = (id) => {
    this.setState({ show: true });
    axios.get(`${serverUrl}/api/blog`).then((result) => {
      let giatritimdc = result.data.find((value) => {
        return value._id === id;
      });
      this.setState({ blog: giatritimdc });
    });
  };
  render() {
    return (
      <section className="style-2">
        <div className="container">
          {this.state.blogs.map((prd, i) => (
            <div className="blog-loop columns masonry" key={i}>
              <article className="col-md-4 col-sm-6">
                {/* <header className="text-center"><a onClick={this.handleShow} ><img src={prd.imageURL} /> */}
                <header className="text-center">
                  <a onClick={() => this.openBlog(prd._id)}>
                    <img src={`${serverUrl + prd.imageURL}`} />
                    <div className="hover">
                      <div className="day">22</div>
                      <div className="month">Mar</div>
                    </div>
                  </a>
                </header>
                <div className="post-inner">
                  <h2
                    style={{
                      fontWeight: "100",
                      textTransform: "uppercase",
                      fontFamily:
                        '"Montserrat", "Helvetica Neue", Arial, sans-serif',
                      fontSize: "0.7em",
                    }}>
                    {prd.title}
                  </h2>
                </div>
              </article>
            </div>
          ))}
        </div>
        {/* Modal */}
        <Modal
          id="blogModal"
          size="lg"
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title">
          <Modal.Body style={{ maxHeight: "92vh", overflowY: "auto" }}>
            <section className="blog-single">
              <article>
                <header>
                  <h2 style={{ textTransform: "lowercase" }}>
                    {this.state.blog.title}
                  </h2>
                  <a href="#">
                    <img
                      style={{ width: "100%", height: "350px" }}
                      src={`${serverUrl + this.state.blog.imageURL}`}
                      alt="Blog post 1"
                    />
                  </a>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <i className="fa fa-user" />
                        posted by Admin
                      </li>
                      <li>
                        <i className="fa fa-calendar-o" />
                        2019
                      </li>
                      <li>
                        <i className="fa fa-folder-o" />
                        <a href="#">Carrer </a>/ <a href="#">Photography </a>/{" "}
                        <a href="#">Post</a>
                      </li>
                    </ul>
                  </div>
                </header>
                <p>{this.state.blog.content}</p>
                <div className="author">
                  <h4>
                    about author{" "}
                    <span className="color">{this.state.blog.author}</span>
                  </h4>
                </div>
              </article>
            </section>
          </Modal.Body>
        </Modal>
      </section>
    );
  }
}
export default BlogContent;
