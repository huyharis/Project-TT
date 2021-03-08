import React, { Component } from "react";
import Header from "./components/header";
import SliderMenu from "./components/collection/sliderMenu";
import AllMenu from "./components/collection/menuAll";
import Contact from "./components/contact";
import Service from "./components/collection/service";
class Collection extends Component {
  render() {
    return (
      <div
        className="site-wrapper"
        style={{ backgroundImage: "url(images/bg_4.jpg)" }}>
        <SliderMenu />
        <AllMenu />
        <Service />
        <Contact />
      </div>
    );
  }
}
export default Collection;
