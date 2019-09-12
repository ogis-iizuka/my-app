import React ,{Component} from 'react'

import "./ProductRow.css";

class ProductRow extends Component{
    render() {
        return (
            <tr className="stocked">
                <td>Football</td>
                <td>$49.99</td>
            </tr>
        );
    }
}

export default ProductRow