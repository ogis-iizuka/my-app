import React ,{Component} from 'react'

import "./ProductRow.css";

/**
 * 商品表示行。
 *
 * props ：
 *  product : 表示対象の商品
 * 
 * @class ProductRow
 * @extends {Component}
 */
class ProductRow extends Component{

    /**
     * レンダリングを行う。
     * @returns
     * @memberof ProductRow
     */
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