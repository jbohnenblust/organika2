import React, { Component } from 'react';
import Product from './product';
import ProductService from '../services/productService';


class Catalog extends Component {
    state = { 
        catalog: []
     };

    


    render() { 
        return ( 
            <div className="catalog-page">
                <h3>This is our amazing catalog, with {this.state.catalog.length} products!</h3>

                {this.state.catalog.map((p) => (
                    <Product data={p}></Product>
                ))}

            </div>
         );
    }


    componentDidMount() {
        console.log("Load data now");

        let service = new ProductService();
        var data = service.getProducts();
        
        this.setState({ catalog: data });
    }

}
 
export default Catalog;