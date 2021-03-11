import React, { Component } from 'react'
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
import { Redirect } from 'react-router-dom';
import { serverUrl } from '../../utils/config';
import { saveUser, getUser } from '../../localStorage/index';

export default class LoginPage extends Component {
  onSubmit(e){
    e.preventDefault();
    this.form.validateAll();

    const params = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    if ( this.checkBtn.context._errors.length === 0 ) {
      axios.post(`${serverUrl}/api/auth`, params)
        .then(res => {
          if(res.data || res.data.isAdmin) {
            localStorage.setItem("tokens", res.data.token);
            localStorage.setItem("admin", JSON.stringify(res.data));
            window.location.href = "/admin";
          }
        })
      }
  }
  render() {
    const authen = JSON.parse(localStorage.getItem('admin'));
    if(authen && authen.isAdmin){
      return <Redirect to='/admin' />
    }
    return (
      <div className="limiter">
        <div className="container-login100" style={{ backgroundImage: 'url(images/loginpage.jpg)', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} >
          <div className="wrap-login100">
            <div className="login100-form-title" style={{ backgroundImage: 'url(images/bg-01.jpg)' }}>
              <span className="login100-form-title-1">
                <b>Sign In</b>
              </span>
            </div>
            <div className="form-box">
                <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                    <Input 
                        name="username" 
                        onChange={this.onChangeHandler}
                        type="text" 
                        placeholder="Username"
                        className="form-control" 
                    />
                    <Input 
                        name="password" 
                        onChange={this.onChangeHandler}
                        type="password" 
                        placeholder="Password"
                        className="form-control" 
                    />
                    <button className="btn btn-info btn-block login" type="submit" style={{marginTop: '15px'}}>Login</button>
                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
