import React, { Component,useState } from 'react';
import axios from 'axios';
import { serverUrl, configHeader } from '../../../../utils/config.js';

import swal from 'sweetalert';
import { Button } from 'react-bootstrap';
import { Alert } from 'reactstrap';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import { ChildBlog } from './childBlog';
registerPlugin(FilePondPluginImagePreview);


class Blog extends Component{
    constructor(){
        super();
        this.state = {
            blogs : [],
            files: {
                source: 'index.html',
                options: {
                    type: 'local'
                }
            },
            status : false,
            visible: false,
            messenger: ''
        };
    }
    onDismiss=() =>{
        this.setState({ visible: false });
    }
    getBlogs = () =>{
        axios.get(`${serverUrl}/api/blog`)
        .then(result =>{
            this.setState({ blogs:result.data })
        })
    }
    deleteBlog = (id) =>{
        axios.delete(`${serverUrl}/api/blog/` + id, configHeader)
        .then(result=>{})
    }
    alertDelete = (id) =>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then( async (willDelete) => {
            if (willDelete) {
                await this.deleteBlog(id);
                await this.getBlogs();
                swal("Jup ! Blog has been deleted!", {
                icon: "success",
              });
              
            } 
        });
    }
    
    handleSubmit = (event,id)=>{
        event.preventDefault();
        var formData = new FormData();
        formData.append('id', id);
        formData.append('image',this.state.files[0]);
        formData.append('title',event.target.title.value);
        formData.append('content',event.target.content.value);
        formData.append('author',event.target.author.value);

        axios.put(`${serverUrl}/api/blog/update`, formData, configHeader)
            .then(result => {
                this.setState({ messenger: result.data.message , visible:true })
                this.getBlogs();
            })
    }
    showAdd =() =>{
        this.setState({ status: !this.state.status})
    }
    componentDidMount(){
        this.getBlogs();
    }
    callBackChildBlog = (result) =>{
        this.setState({ messenger: result.message, visible:true })
        this.getBlogs();
        this.showAdd();
    }
    
    render() {
        return(
            <div className="content" id="blogs">
                <Button onClick={ this.showAdd }>Add Blog</Button> <br/>
                <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                    <h4 className="alert-heading" style={{margin:'0'}}>Well done!</h4>
                    <hr style={{margin:'0'}}/>
                    <p className="mb-0">
                       { this.state.messenger }
                    </p>
                </Alert>
                { this.state.status ? <ChildBlog callBack={ this.callBackChildBlog }/> : null }
                { this.state.blogs.map(blog => 
                <div className="card card-user" key={ blog._id }>
                    <div className="card-body">
                        <a className="deleteBlog"  onClick={ () => this.alertDelete(blog._id)}><i className="fas fa-times"></i></a>
                            <form style={{paddingTop: '15px',}} onSubmit={ (e)=> this.handleSubmit(e,blog._id) }>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={ `${serverUrl + blog.imageURL}` } style={ {width:'100%', display:'block', paddingBottom: "15px"} }/>
                                            <FilePond labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
                                                onupdatefiles={(fileItems) => {
                                                    this.setState({
                                                    files: fileItems.map(fileItem => fileItem.file)
                                            });
                                        }}/>
                                    </div>
                                    <div className="col-md-8 row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input name="title" type="text" className="form-control" disabled="" placeholder="Company" defaultValue={ blog.title }/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Author</label>
                                                <input name="author" type="text" className="form-control" placeholder="Home Address" defaultValue={ blog.author }/>                                                    </div>
                                            </div>
                                        <div className="col-md-12 pr-1">
                                             <div className="form-group">
                                                <label>Content</label>
                                                <textarea name="content" className="form-control textarea" defaultValue={ blog.content }></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <Button type="submit" variant="outline-success">Update</Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}


export default Blog;