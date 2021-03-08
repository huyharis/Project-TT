import React, { Component } from "react";
import Header from "./components/header";
import Slider from "./components/slider";
import BlogSite from "./components/blog-site";
import Opening from "./components/opening";
import Menu from "./components/menu";
import Contact from "./components/contact";
import MenuAbout from "./components/about/menu";
import CustomerSay from "./components/about/customerSay";
class Home extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <Slider />
        <BlogSite />
        <Opening />
        <MenuAbout />
        <CustomerSay />
        <Contact />
      </div>
    );
  }
}
export default Home;
