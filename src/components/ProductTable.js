import React, { Component } from 'react'

import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

/**
 * 商品テーブル。
 * 表示する商品の一覧をテーブル形式で表示する。
 * 
 * props : 
 *  products : 表示対象の商品リスト。
 * 
 * @class ProductTable
 * @extends {Component}
 */
class ProductTable extends Component {

    /**
     * レンダリングを行う。
     * @returns
     * @memberof ProductTable
     */
    render() {
        let products = this.props.products;

        //1.商品カテゴリのリストを取得する。（消費一覧から重複のないカテゴリのリストを生成する）
        let categories = 
            products.map(p => p.category) //商品カテゴリ名に変換
            .filter((elem, index, array) => { return array.indexOf(elem) === index }); //商品カテゴリ名の重複を排除する

        //2.商品カテゴリごとの商品リストを生成する。
        let element = [];
        categories.forEach(category => {
            element.push(<ProductCategoryRow category={category}/>);
            //商品を商品カテゴリで絞り込み、絞り込んだ商品ごとに、ProductRowを生成。
            products.filter((product) => {return product.category === category}).forEach(product =>{
                element.push(<ProductRow product={product} key={product.name}/>)
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