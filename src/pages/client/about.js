import React, { Component } from 'react';
import Header from './components/header';
import Contact from './components/contact';
import SliderAbout from './components/about/sliderAbout';
import AboutUs from './components/about/about';
import CustomerSay from './components/about/customerSay';
import MenuAbout from './components/about/menu';
import Service from './components/collection/service';
class About extends Component{
    render(){
        return(
            <div className="site-wrapper"style={{backgroundImage: 'url(images/bg_4.jpg)'}}>
               
                <SliderAbout/>
                <AboutUs/>
                <CustomerSay/>
                <MenuAbout/>
                <Service></Service>
                <Contact/>
            </div>
        )
    }
}
export default About;