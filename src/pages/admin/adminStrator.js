import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { Alert } from 'reactstrap';
import Sidebar from './components/sidebar';
import {Navbar} from './components/navbar';
import Products from './components/products/products';
import Blogs from "./components/blogs/blog";
import Orders from "./components/orders/orders";
import LoginPage from '../login/LoginPage';

class Admin extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="admin-page">
                    <Sidebar/>
                    <div className="main-panel">
                        <Navbar/>
                        <Route path='/admin/login' component={ LoginPage } /> 
                        <Route exact path='/admin' component={ Products } /> 
                        <Route path='/admin/blog' component={ Blogs } />
                        <Route exact path='/admin/product' component={ Products } />
                        <Route exact path='/admin/order' component={ Orders } />
                    </div>
                    
                </div> 
                
            </BrowserRouter>  
        );
    }
}
export default Admin;