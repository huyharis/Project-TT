import React, { Component } from 'react';
import Header from './components/header';
import SliderBlog from './components/blog/sliderBlog';
import Contact from './components/contact';
import BlogContent from './components/blog/blogContent';


class BlogPage extends Component{
    render(){
        return(
            <div className="site-wrapper">
                <SliderBlog/>
                <BlogContent/>
                <Contact/>
            </div>
        );
    }
}
export default BlogPage;