import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" data-color="white" data-active-color="danger">
                <div className="logo">
                    <a href="/admin" className="simple-text logo-mini">
                        <div className="logo-image-small">
                            <img src="/images/logo-small.png" alt="Logo" />
                        </div>
                    </a>
                    <a href="/admin" className="simple-text logo-normal">Admin Page</a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {/* <li className="active ">
                            <Link to={'/admin'} className="nav-link">
                                <i className="nc-icon nc-app"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li> */}
                        <li>
                            <Link to={'/admin/product'} className="nav-link">
                                <i className="nc-icon nc-app"></i>
                                <p>Products</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/admin/blog'} className="nav-link">
                                <i className="nc-icon nc-book-bookmark"></i>
                                <p>Blogs</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/admin/order'} className="nav-link">
                                <i className="nc-icon nc-book-bookmark"></i>
                                <p>Order</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;