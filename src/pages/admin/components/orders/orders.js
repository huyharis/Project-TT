import React, { Component } from 'react';
import swal from 'sweetalert';
import OrderDetail from './order_detail';
import axios from 'axios'; 
import { Modal, Button} from 'react-bootstrap';
import { serverUrl } from '../../../../utils/config.js';

class Orders extends Component{
    constructor(){
        super();
        this.state={
            data: [],
            orders: [],
            show: false,
        }
    }
    
    getOrders = () =>{
        axios.get(`${serverUrl}/api/order`)
            .then(result =>{
                this.setState({ orders: result.data })
            });
    }
    getTypeProd = () => {
        axios.get(`${serverUrl}/api/product/getType`)
        
            .then(result => {
                this.setState({ typeProd: result.data })
            })
    }


    getByType = (idType) =>{
        axios.get(`${serverUrl}/api/product/getByType/` + idType)
            .then(result => {
                this.setState({ products: result.data })
            })
    }
    
    
    deleteProd = (id) => {
        axios.delete(`${serverUrl}/api/product/` + id)
            .then(result => {
                this.getOrders();
            })
    };
    alertDelete = (id) =>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                this.deleteProd(id);
                this.getOrders();
                swal("Jup ! product has been deleted!", {
                icon: "success",
              });
            } 
        });
    }
    
    sendIdtoModal = (id) =>{
        fetch(`${serverUrl}/api/order/` + id, {
            method:'get',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            this.setState({ data });
        });
        
        this.setState({ show: true});
    }

    componentDidMount(){
        this.getOrders();
    }
    handleShow = () => {
        this.setState({ show: true });
    };
  
    handleHide = () => {
        this.getOrders();
        this.setState({ show: false });
    };

    render(){
        return(
            <div className="content">
                <div className="row order">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Products</h4>
                                <div className="card-title-right">
                                    <div className="nav-item btn-rotate dropdown">
                                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Type</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                            {/* <a className="dropdown-item" onClick={ this.getOrders} >All</a>
                                            { this.state.typeProd.map(type =>
                                                <a className="dropdown-item" onClick={ () => this.getByType(type._id)} key={ type._id }>{ type.type_product }</a>
                                            )} */}
                                        </div>
                                    </div>
                                    <form>
                                        <div className="input-group no-border">
                                            <input ref={ input => this.searchProd = input } onKeyDown={ this.handleSearchProd } className="form-control" placeholder="Search..."/>
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <i className="nc-icon nc-zoom-split"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </form> 
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className=" text-primary">
                                            <tr>
                                                <th>Name</th>
                                                <th>Phone number</th>
                                                <th>Note</th>
                                                <th>Order date</th>
                                                <th>Status</th>
                                                <th>Detail</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.state.orders ? this.state.orders.map(data =>
                                                <tr key={data._id}>
                                                    <td> { data.name}</td>
                                                    <td> { data.number_phone} </td>
                                                    <td> { data.note } </td>
                                                    <td> { data.order_date } </td>
                                                    <td> { data.status ? 'Đã xác nhận' : 'Chưa xác nhận' } </td>
                                                    <td> 
                                                        <a onClick={() => this.sendIdtoModal(data._id)}>
                                                            <i className="fas fa-eye" ></i>
                                                        </a>
                                                    </td>
                                                    
                                                    {/* <td className="product_control text-right">
                                                        <a href="#repair" onClick={() => this.sendIdtoModal(prd._id)}><i className="fas fa-pen" ></i></a>
                                                        <a href="#delete" onClick={ () => this.alertDelete(prd._id) }><i className="fas fa-trash-alt"></i></a>
                                                    </td> */}
                                                </tr>
                                            ) : ''}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OrderDetail data={ this.state.data } show= {this.state.show} callBack={ this.handleHide }/>
            </div>
        )
    }
}

export default Orders;