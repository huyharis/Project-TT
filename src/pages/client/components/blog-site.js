import React, { Component } from "react";

class BlogSite extends Component {
  render() {
    return (
      <section className="style-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-heading text-center">
                always fresh, don't miss it
              </h2>
            </div>
            <div className="posts">
              <article className="col-md-4 col-sm-6">
                <a href="portfolio-single.html">
                  <img alt="Recent Post 1" src="images/recent-post-1.jpg" />
                  <div className="hover">
                    <i className="fa fa-cutlery"></i>
                    <h2>fresh salad for a hot summer</h2>
                  </div>
                </a>
              </article>
              <article className="col-md-4 col-sm-6">
                <a href="portfolio-single.html">
                  <img alt="Recent Post 2" src="images/recent-post-2.jpg" />
                  <div className="hover">
                    <i className="fa fa-cutlery"></i>
                    <h2>fresh salad for a hot summer</h2>
                  </div>
                </a>
              </article>
              <article className="col-md-4 col-sm-6">
                <a href="portfolio-single.html">
                  <img alt="Recent Post 3" src="images/recent-post-3.jpg" />
                  <div className="hover">
                    <i className="fa fa-cutlery"></i>
                    <h2>fresh salad for a hot summer</h2>
                  </div>
                </a>
              </article>
              <article className="col-md-4 col-sm-6">
                <a
                  href="portfolio/portfolio-post-1a3ea.html?ajax=true"
                  data-rel="prettyPhoto">
                  <img alt="Recent Post 4" src="images/recent-post-7.jpg" />
                  <div className="hover">
                    <i className="fa fa-cutlery"></i>
                    <h2>fresh salad for a hot summer</h2>
                  </div>
                </a>
              </article>
              <article className="col-md-4 col-sm-6">
                <a
                  href="portfolio/portfolio-post-1a3ea.html?ajax=true"
                  data-rel="prettyPhoto">
                  <img alt="Recent Post 5" src="images/recent-post-5.jpg" />
                  <div className="hover">
                    <i className="fa fa-cutlery"></i>
                    <h2>fresh salad for a hot summer</h2>
                  </div>
                </a>
              </article>
              <article className="col-md-4 col-sm-6">
                <a
                  href="portfolio/portfolio-post-1a3ea.html?ajax=true"
                  data-rel="prettyPhoto">
                  <img alt="Recent Post 6" src="images/recent-post-6.jpg" />
                  <div className="hover">
                    <i className="fa fa-cutlery"></i>
                    <h2>fresh salad for a hot summer</h2>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default BlogSite;
