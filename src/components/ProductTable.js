import React, { Component } from 'react'

import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

class ProductTable extends Component {

    
    render() {
        let products = this.props.products;
        //1.ProductCategoryを取得する。
        let categories = products.map(p => p.category).filter((elem, index, array) => { return array.indexOf(elem) === index });

        let element = [];
        categories.forEach(category => {
            element.push(<ProductCategoryRow category={category}/>);
            products.filter((product) => {return product.category === category}).forEach(product =>{
                element.push(<ProductRow product={product}/>)
            })
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {element}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable