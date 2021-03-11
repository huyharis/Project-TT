import React , { Component } from 'react';

class Dashboard extends Component{
    render() {
        return(
            <div className="content">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-5 col-md-4">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-globe text-warning"></i>
                                        </div>
                                    </div>
                                    <div className="col-7 col-md-8">
                                        <div className="numbers">
                                            <p className="card-category">Capacity</p>
                                            <p className="card-title">150GB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer ">
                                <hr/>
                                <div className="stats">
                                    <i className="fa fa-refresh"></i> Update Now
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-5 col-md-4">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-money-coins text-success"></i>
                                        </div>
                                    </div>
                                    <div className="col-7 col-md-8">
                                        <div className="numbers">
                                            <p className="card-category">Revenue</p>
                                            <p className="card-title">$ 1,345</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer ">
                                <hr/>
                                <div className="stats">
                                    <i className="fa fa-calendar-o"></i> Last day
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-5 col-md-4">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-vector text-danger"></i>
                                        </div>
                                    </div>
                                    <div className="col-7 col-md-8">
                                        <div className="numbers">
                                            <p className="card-category">Errors</p>
                                            <p className="card-title">23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer ">
                                <hr/>
                                <div className="stats">
                                    <i className="fa fa-clock-o"></i> In the last hour
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-5 col-md-4">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-favourite-28 text-primary"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-md-8">
                                    <div className="numbers">
                                        <p className="card-category">Followers</p>
                                        <p className="card-title">+45K</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer ">
                            <hr/>
                            <div className="stats">
                                <i className="fa fa-refresh"></i> Update now
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
