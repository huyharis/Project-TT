import React, { Component } from 'react'
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
import { Redirect } from 'react-router-dom';
import { serverUrl } from '../../utils/config';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

const required = (value) => {
  if (isEmpty(value)) {
      return <small className="form-text text-danger">This field is required</small>;
  }
}

const email = (value) => {
  if (!isEmail(value)) {
      return <small className="form-text text-danger">Invalid email format</small>;
  }
}

const minLength = (value) => {
  if (value.trim().length < 6) {
      return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
  }
}
export default class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: '',
      toAdmin: false
    }
  }
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
          if(res.data) {
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location.href = "/home";
          }
        })
      }
  }
  responseSocial = (response) => {
    localStorage.setItem("user", JSON.stringify(response));
    window.location.href = "/home";
  }
  failSocial = (response) => {
    console.log(response)
  }
  loginGG = () => {
    axios.get(`${serverUrl}/api/auth/google`)
    // .then(res => {
    //   if(res.data) {
    //     console.log(res)
    //   }
    // })
  }
  logoutGG = (response) => {
    console.log(response)
  }

  render() {
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
                        // validations={[required, email]}
                    />
                    <Input 
                        name="password" 
                        onChange={this.onChangeHandler}
                        type="password" 
                        placeholder="Password"
                        className="form-control" 
                        validations={[required]}
                    />
                    <button className="btn btn-info btn-block login" type="submit" style={{marginTop: '15px'}}>Login</button>
                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                    <h5>Or</h5>
                    <div style={{textAlign: "center", paddingBottom: '15px'}}>
                      <FacebookLogin
                        buttonText="LOGIN WITH FACEBOOK"
                        appId="3096793217211481" //APP ID NOT CREATED YET
                        fields="name,email,picture"
                        callback={ this.responseSocial }
                      />
                      <GoogleLogin
                        clientId="478363718227-14rh3nr79j5sivhcvu5qousjposp9gmd.apps.googleusercontent.com"
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={this.failSocial}
                        onFailure={this.failSocial}
                      />
                      <GoogleLogout
                        clientId="478363718227-14rh3nr79j5sivhcvu5qousjposp9gmd.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={this.logoutGG}
                      />
                    </div>
                    
                </Form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
