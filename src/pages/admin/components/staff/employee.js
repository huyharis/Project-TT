import React, { Component } from 'react'
import swal from 'sweetalert';

import axios from 'axios';
import { Modal , Button} from 'react-bootstrap';
import { serverUrl } from '../../../../utils/config.js';

export class Employee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            employee: [],
            employees: [],
         
            show: false,
            add: false,
        }
    }
    componentDidMount(){
        this.getAllNhanvien();
        
    }
    getAllNhanvien = async () => {
        await axios.get(`${serverUrl}/api/nhanviens`)
            .then(result => {
                this.setState({ employees: result.data })
            });
    }
    getSearchNhanvien = () =>{
        let name = { name : this.state.query }
        fetch(`${serverUrl}/api/nhanviens/search`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(name) })
            .then(res => res.json())
            .then(nv =>{
                this.setState({ employees: nv })
            })
    }
    handleSearchNhanvien = () =>{
        this.setState({ 
            query : this.searchNhanvien.value 
        });
        if(this.state.query && this.state.query.length > 1 ){
            if(this.state.query.length % 2 === 0){
                this.getSearchNhanvien();
            }
        }
        else if(this.state.query.length === 0){
            this.getAllNhanvien();
        }
    }
    
    deleteNhanvien = (id) => {
        fetch(`${serverUrl}/api/nhanviens/` + id, {
            method: 'delete'
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
                this.deleteNhanvien(id);
                this.getAllNhanvien();
                swal("Jup ! product has been deleted!", {
                icon: "success",
              });
            } 
        });
    }
    render() {
        return (
            <div className="content">
            <div className="row products">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Employee</h4>
                            <div className="card-title-right">
                                <a href="#" ><i className="fas fa-plus-circle"></i></a>
                                
                                <form>
                                    <div className="input-group no-border">
                                        <input ref={ input => this.searchNhanvien = input } onKeyDown={ this.handleSearchNhanvien } className="form-control" placeholder="Search..."/>
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
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Date</th>
                                            <th>Image</th>
                                            <th>Tittle</th>
                                            <th className="text-right"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.state.employees.map(nv =>
                                            <tr key={nv._id}>
                                                <td> { nv.first_name}</td>
                                                <td> { nv.last_name} </td>
                                                <td> { nv.start_date } </td>
                                                <td> <img src = { nv.image } alt="ProductImage" width="50px"/> </td>
                                                <td> { nv.title }</td>
                                                <td className="product_control text-right">
                                                    <a href="#repair" ><i className="fas fa-pen" ></i></a>
                                                    {/* <a href="#delete" onClick={ () => this.deleteProd(prd._id) }><i className="fa fa-trash-alt"></i></a> */}
                                                    <a href="#delete" onClick={ () => this.alertDelete(nv._id) }><i className="fas fa-trash-alt"></i></a>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        )
    }
}

export default Employee
