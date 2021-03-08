import React, { Component } from 'react';
import {  Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'

import Home from './pages/client/home';
// import Admin from './pages/admin/administrator';
import Collection from './pages/client/collection';

import BlogPage from './pages/client/blogPage';
import About from './pages/client/about';
// import Order from './CartComponent/Order';
import Header from './pages/client/components/header';
import store from './store';
import { getTypeProduct } from './actions/typeProductAction';
// import Payment from './CartComponent/payment';
import SignIn from './pages/login/SignIn';
import SignupPage from './pages/login/SignupPage';
import LoginPage from './pages/login/LoginPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount(){
        store.dispatch(getTypeProduct());
    }
    render() { 
        return ( 
            <div>
            {this.props.location.pathname!=='/admin' ?  <Header /> :""}
                <Route exact path="/" component = {Home}/>
                <Route exact path="/home" component = {Home}/>
                {/* <PrivateRoute exact path="/admin" component = {Admin}/> */}
                <Route exact path="/menu" component = {Collection}/>
                <Route exact path="/blog" component = {BlogPage}/>
                <Route exact path ="/about" component ={About}/>
                {/* <Route exact path ="/order" component ={Order}/> */}
                {/* <Route exact path ="/payment" component ={Payment}/> */}
                <Route exact path ="/user/login" component ={SignIn}/>
                <Route exact path ="/user/signup" component ={SignupPage}/>
                <Route exact path ="/login" component ={LoginPage}/>
        </div>
           
         );
    }
}
const authenticated = JSON.parse(localStorage.getItem('admin'));

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        (authenticated && authenticated.isAdmin)
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
)
export default withRouter(App);