import React, { Component } from "react";

export default class componentName extends Component {
  constructor(blog) {
    super(blog);
    this.state = {
      blogs: [],
    };
  }
  getBlogs = () => {
    axios.get(`${serverUrl}/api/blogs`).then((result) => {
      this.setState({ blogs: result.data });
    });
  };
  componentDidMount() {
    this.getBlogs();
  }
  render() {
    return (
      <Modal show={this.blog.show}>
        <section className="blog-single">
          <div className="container">
            <div className="row">
              {this.state.blogs.map((prd) => (
                <div className="col-md-9" key={prd._id}>
                  <article style={{ width: "137%" }}>
                    <header>
                      <a href="#">
                        <img
                          src={`${serverUrl + prd.imageURL}`}
                          alt="Blog post 1"
                        />
                      </a>
                      <h2>{prd.title}</h2>
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
                            <a href="#">Carrer </a>/{" "}
                            <a href="#">Photography </a>/ <a href="#">Post</a>
                          </li>
                        </ul>
                      </div>
                    </header>
                    <p>{prd.content}</p>
                    <div className="author">
                      <div>
                        <h4>
                          about author{" "}
                          <span className="color">{prd.author}</span>
                        </h4>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Modal>
    );
  }
}
