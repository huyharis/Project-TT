import React, { Component } from 'react';
import Product from './Product';
class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div >
           {this.props.products.map((product,index)=>(<div key={index}>
            <Product product={product}/>
            <hr />

           </div>))}
          
          
            
        </div> );
    }
}
 
export default ListProduct;