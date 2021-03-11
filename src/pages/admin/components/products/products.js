import React, { Component } from 'react';
import swal from 'sweetalert';
import ModalProd from "./modal_prod";
import axios from 'axios';
import { Modal , Button} from 'react-bootstrap';
import { serverUrl, configHeader } from '../../../../utils/config.js';

class Products extends Component{
    
    constructor(){
        super();
        this.state={
            query: '',
            product:[],
            products: [],
            typeProd:[],
            show: false,
            add : false,
        }
    }
    
    getProducts = () =>{
        axios.get(`${serverUrl}/api/product`)
            .then(result =>{
                this.setState({ products: result.data })
            });
    }
    getTypeProd = () => {
        axios.get(`${serverUrl}/api/product/getType`)
        
            .then(result => {
                this.setState({ typeProd: result.data })
            })
    }

    getSearchProducts = () =>{
        let name = { name : this.state.query }
        fetch(`${serverUrl}/api/product/search`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(name) })
            .then(res => res.json())
            .then(prod =>{
                this.setState({ products: prod })
            })
    }

    getByType = (idType) =>{
        axios.get(`${serverUrl}/api/product/getByType/` + idType)
            .then(result => {
                this.setState({ products: result.data })
            })
    }
    
    handleSearchProd = () =>{
        this.setState({ 
            query : this.searchProd.value 
        });
        if(this.state.query && this.state.query.length > 1 ){
            if(this.state.query.length % 2 === 0){
                this.getSearchProducts();
            }
        }
        else if(this.state.query.length === 0){
            this.getProducts();
        }
    }
    
    deleteProd = (id) => {
        axios.delete(`${serverUrl}/api/product/` + id, configHeader)
            .then(result => {
                this.getProducts();
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
                this.getProducts();
                swal("Jup ! product has been deleted!", {
                icon: "success",
              });
            } 
        });
    }
    
    sendIdtoModal = (id) =>{
        fetch(`${serverUrl}/api/product/get/` + id, {
            method:'get',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(product => this.setState({ product }));
        
        this.setState({ show: !this.state.show, add: false});
    }
    openModal = () =>{
        this.setState({ show: !this.state.show, add: true, product: []});
    }
    componentDidMount(){
        this.getProducts();
        this.getTypeProd();
    }
    handleShow = () => {
        this.setState({ show: true });
      };
  
    handleHide = () => {
        this.getProducts();
        this.setState({ show: false });
    };

    render(){
        return(
            <div className="content">
                <div className="row products">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Products</h4>
                                <div className="card-title-right">
                                    <a onClick={ this.openModal}><i className="fas fa-plus-circle"></i></a>
                                    <div className="nav-item btn-rotate dropdown">
                                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Type</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" onClick={ this.getProducts} >All</a>
                                            { this.state.typeProd.map(type =>
                                                <a className="dropdown-item" onClick={ () => this.getByType(type._id)} key={ type._id }>{ type.type_product }</a>
                                            )}
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
                                                <th>Type</th>
                                                <th>Describe</th>
                                                <th>Image</th>
                                                <th>Price</th>
                                                <th className="text-right"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.state.products ? this.state.products.map(prd =>
                                                <tr key={prd._id}>
                                                    <td> { prd.name}</td>
                                                    <td> { prd.product_type_id.type_product} </td>
                                                    <td> { prd.describe } </td>
                                                    <td> <img src = {prd.image ? `${serverUrl + prd.image}` : ''} alt="ProductImage" width="50px"/> </td>
                                                    <td> { prd.price } đ</td>
                                                    <td className="product_control text-right">
                                                        <a href="#repair" onClick={() => this.sendIdtoModal(prd._id)}><i className="fas fa-pen" ></i></a>
                                                        <a href="#delete" onClick={ () => this.alertDelete(prd._id) }><i className="fas fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                            ) : ''}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalProd product={ this.state.product } add={this.state.add} show= {this.state.show} callBack={ this.handleHide }/>
            </div>
        )
    }
}

export default Products;