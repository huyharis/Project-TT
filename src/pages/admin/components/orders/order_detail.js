import React, { Component } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { Alert } from 'reactstrap';
import { serverUrl } from '../../../../utils/config.js';

const initialState = {
    image : '',
    src : 'one',
    typeId: '',
    chooseType:'one',
    visible: false,
    messenger: ''
};

export default class OrderDetail extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            messenger: '',
            data: {}
        };
    }
    
    handleSubmit = (event) => {
       
        event.preventDefault();
        var formData = new FormData();
        formData.append('_id', this.props.product._id);
        formData.append('name', event.target.name.value);
        formData.append('price', event.target.price.value);
        formData.append('type', event.target.type.value);
        formData.append('describe', event.target.describe.value);
        formData.append('image',event.target.image.files[0]);
        axios.put(`${serverUrl}/api/product/`, formData)
            .then(result => {
                this.setState({messenger : result.data.message , visible: true})
            });
        // this.props.callBack();
        // this.setState({ ...initialState });
    }
    updateStatus = ( _id ) =>{
        axios.put(`${serverUrl}/api/order/`, { _id })
            .then(result => {
                this.setState({ messenger : result.data.message , visible: true})
            });
       
        // this.props.callBack();
        // this.setState({ ...initialState });
    }

    componentWillReceiveProps({ data }){
        const prev = this.state.data
        if(prev != data){
            this.setState({ data });
        }
    }
    handleHide = () => {
        // this.setState(initialState);
        this.props.callBack();
    };
    render() {
        const { data } = this.props;

        return (
            <Modal size="lg" show={this.props.show} onHide={ this.handleHide} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                <div className="card card-user" style={{margin:0}}>
                    <div className="card-body">
                        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss} 
                            style={{width: '28%',position: 'absolute', right: '-31%',top: '0'}}>
                            <h4 className="alert-heading" style={{margin:'0'}}>Well done!</h4>
                            <hr style={{margin:'0'}}/>
                            <p className="mb-0">
                                { this.state.messenger }
                            </p>
                        </Alert>
                        <form onSubmit={ this.handleSubmit }>
                            <div className="row">
                                <div className="col-md-6">
                                    <table className="table">
                                        <thead className=" text-primary">
                                            <tr>
                                                <th>Product name</th>
                                                <th>Price</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.products ? data.products.map(product =>
                                                <tr key={product._id}>
                                                    <td> { product.name}</td>
                                                    <td> { product.price} </td>
                                                    <td> { product.amount } </td>
                                            </tr>
                                            ) : ''}
                                        </tbody>
                                    </table>  
                                </div> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <p>Name: { data.name }</p>
                                        <p>Phone number: { data.number_phone }</p>
                                        <p>Note: { data.note }</p>
                                    </div>
                                    <button type="button" className="btn btn-default" disabled = {data.status}  onClick={() => this.updateStatus(data._id)}>
                                        { data.status ? 'Đã xác nhận' : 'Xác nhận'}
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>        
                    </div>
            </Modal>
        )
    }
}