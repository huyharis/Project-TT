import React, { Component } from 'react';

class Service extends Component {
    render() {
        return (
            <section className="ftco-section ftco-services" style={{ background: '#c49b63' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 ftco-animate">
                            <div className="media d-block text-center block-6 services">
                                <div className="icon d-flex justify-content-center align-items-center mb-5">
                                    <img src="../images/choices.png" style={{ width: '70px' }} />
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Easy to Order</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <div className="media d-block text-center block-6 services">
                                <div className="icon d-flex justify-content-center align-items-center mb-5">
                                    <img src="../images/truck.png" style={{ width: '70px' }} />
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Fastest Delivery</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <div className="media d-block text-center block-6 services">
                                <div className="icon d-flex justify-content-center align-items-center mb-5">
                                    <img src="../images/coffeebeans.png" style={{ width: '70px' }} />
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Quality Coffee</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Service;