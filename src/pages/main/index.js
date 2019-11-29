import React, { Component } from "react";

import api from "../../services/api";

export default class Main extends Component {
    state = {
        products: [],
    }

    componentDidMount(){
        console.log("montou");
        this.loadProducts();
    }

    //async = promisses
    loadProducts = async () => {
        //entender o porque está chamando localhost:3000/products ao index de URL/products
        const response = await api.get('https://rocketseat-node.herokuapp.com/api/products');

        this.setState({ products: response.data.docs });

    };

    render(){
        return (
            <div className="product-list">
                {this.state.products.map(product =>(
                     <h2 key={product._id}>{product.title}</h2> 
                    )    
                )}
            </div>
        );
    }
}