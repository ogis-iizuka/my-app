import React, { Component } from 'react'

/**
 * 商品カテゴリの行。
 *
 * props：
 *  category : 商品カテゴリ名。
 * 
 * @class ProductCategoryRow
 * @extends {Component}
 */
class ProductCategoryRow extends Component {

    /**
     * レンダリングを行う。
     * @returns
     * @memberof ProductCategoryRow
     */
    render() {
        return (
            <tr>
                <td colSpan="2">{this.props.category}</td>
            </tr>
        );
    }
}

export default ProductCategoryRow