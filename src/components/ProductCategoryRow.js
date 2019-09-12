import React, { Component } from 'react'

class ProductCategoryRow extends Component {
    render() {
        return (
            <tr>
                <td colSpan="2">{this.props.category}</td>
            </tr>
        );
    }
}

export default ProductCategoryRow