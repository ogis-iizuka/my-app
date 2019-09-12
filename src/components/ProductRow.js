import React ,{Component} from 'react'

import "./ProductRow.css";

class ProductRow extends Component{
    render() {
        let product = this.props.product;
        return (
            <tr className={product.stocked ? "" : "outOfStock"}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

export default ProductRow