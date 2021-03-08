import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return(
        <section className="style-2">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <h2 id="contact" className="section-heading text-center">contact us</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h3>contact details</h3>
                            <p>Dont be shy do contact us about everything and anything, we will be glad to answer your questions about kataleya.</p>
                            <ul className="contact-info">
                              <li><i className="fa fa-home" />51/39, Đường số 10, phường Linh Chiểu, Quận Thủ Đức</li>
                              <li><i className="fa fa-phone" />Phone: +84337 011 110</li>
                              <li><i className="fa fa-print" />Fax: +386 10 555 66677</li>
                              <li><i className="fa fa-envelope" />Email: <a href="mailto:khoale9098@gmail.com">khoale9098@gmail.com</a></li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <form role="form" className="contact-form">
                              <div className="form-group">
                                <input type="email" placeholder="e-mail" required />
                              </div>
                              <div className="form-group">
                                <input type="tel" placeholder="phone" required />
                              </div>
                              <div className="form-group">
                                <textarea placeholder="message" required defaultValue={""} />
                              </div>
                              <button type="submit" className="btn btn-md">submit</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>
                    
        )
    };
}
export default Contact;