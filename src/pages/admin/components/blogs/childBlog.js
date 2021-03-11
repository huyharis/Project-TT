import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Button } from 'react-bootstrap';
import { serverUrl, configHeader } from '../../../../utils/config.js';

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview);

const validateInput = (checkingText) => {
    /* reg exp để kiểm tra xem chuỗi có chỉ bao gồm 10 - 11 chữ số hay không */

    if (checkingText !== '') {
        return { isInputValid: true,
                 errorMessage: ''};
    } else {
        return { isInputValid: false,
                 errorMessage: 'Ban phai nhap muc nay.'};
    }
}
function FormError(props) {
    if (props.isHidden) {return null;}
    return (
      <div className="form-warning">
          {props.errorMessage}
      </div>
    )
  }
export class ChildBlog extends Component{
    constructor(props){
        super(props);
        this.state = {
            isInputValid: true,
            errorMessage: '',
            files: {
                source: 'index.html',
                options: {
                    type: 'local'
                }
            },
        };
    }
    handleInputValidation = event => {
        const { isInputValid, errorMessage } = validateInput(event.target.value);
        this.setState({
          isInputValid: isInputValid,
          errorMessage: errorMessage
        })
        
      }
    handleSubmit2 = (event)=>{
        event.preventDefault();
        var formData = new FormData();
        formData.append('image',this.state.files[0]);
        formData.append('title',event.target.title.value);
        formData.append('content',event.target.content.value);
        formData.append('author',event.target.author.value);

        axios.post(`${serverUrl}/api/blog/add`, formData, configHeader)
            .then(result => {
                this.props.callBack(result.data);
            })
    }
    getBlogs = () =>{
        axios.get(`${serverUrl}/api/blog`)
        .then(result =>{
            this.setState({ blogs: result.data })
        })
    }
    render() {
        return (
            <div className="card card-user">
             
                <div className="card-body">
               
                    <form style={{paddingTop: '15px',}} onSubmit={ (e)=> this.handleSubmit2(e)}>
                        <div className="row">
                            <div className="col-md-4">
                                <img src=''style={ {width:'100%', display:'block', paddingBottom: "15px"} }/>
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
                                        <input name="title" onBlur={this.handleInputValidation} type="text" 
                                            className="form-control" disabled="" placeholder="Title"/>
                                        <FormError isHidden={this.state.isInputValid} errorMessage={this.state.errorMessage} />
                                    </div>
                                </div>
                                <div className="col-md-6 pr-1">
                                    <div className="form-group">
                                        <label>Author</label>
                                        <input name="author"onBlur={this.handleInputValidation} type="text" className="form-control" placeholder="Home Address" defaultValue=''/>                                                    </div>
                                        <FormError isHidden={this.state.isInputValid} errorMessage={this.state.errorMessage} />
                                    </div>
                                <div className="col-md-12 pr-1">
                                    <div className="form-group">
                                        <label>Content</label>
                                        <textarea name="content" className="form-control textarea" defaultValue=''></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <Button type="submit" variant="outline-success" >Save</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        )
    }
}
