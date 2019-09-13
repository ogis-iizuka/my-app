import React, { Component } from 'react'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

/**
 * フィルタ表示可能な商品テーブル。
 * 
 * props：
 *  products : 表示対象の商品リスト。
 * 
 * @class FilterableProductTable
 * @extends {Component}
 */
class FilterableProductTable extends Component {
    
    /**
     * Creates an instance of FilterableProductTable.
     * @param {*} props
     * @memberof FilterableProductTable
     */
    constructor(props) {
        super(props);
        this.state = {
            //検索対象の商品名
            searchProductName: "",
            //在庫がある商品のみを絞り込むかどうか
            onlyShowProductsInStock: false
        }

        //this束縛
        this.handleSearchProductNameChanged = this.handleSearchProductNameChanged.bind(this);
        this.handleOnlyShowProductsInStockInputChanged = this.handleOnlyShowProductsInStockInputChanged.bind(this);
    }

    /**
     * 商品名の変更通知を受けるイベントハンドラの関数。
     * （SearchBar空のコールバックとして登録する。）
     * @param {*} searchProductName
     * @memberof FilterableProductTable
     */
    handleSearchProductNameChanged(searchProductName) {
        this.setState({
            searchProductName: searchProductName
        });
    }

    /**
     * 在庫がある商品のみを絞り込むかどうか変更通知を受けるイベントハンドラの関数。
     * （トグルされたことを通知）
     * （SearchBarからのコールバックとして登録する。）
     * @memberof FilterableProductTable
     */
    handleOnlyShowProductsInStockInputChanged() {
        //FIXME ({としないとエラーになる理由が良く分かっていない。
        this.setState((state, props) => ({
            //チェックボックスの変更はvalueでは取れないので、クリックされるたびに状態を逆の状態にトグルする。
            onlyShowProductsInStock: !state.onlyShowProductsInStock
        }));
    }

    /**
     * レンダリングを行う。
     * @returns
     * @memberof FilterableProductTable
     */
    render() {
        //消費をフィルタリングする。
        let filteredProducts =
            this.props.products
                .filter(this.filterProductsInStock()) //在庫がある商品のみ絞り込みを行う場合は、該当の絞り込みを実施
                .filter(this.filterProductsName()); //商品名で絞り込みを実施

        return (
            <div>
                <SearchBar
                    searchProductName={this.state.searchProductName}
                    onlyShowProductsInStock={this.state.onlyShowProductsInStock}
                    handleSearchProductNameChanged={this.handleSearchProductNameChanged}
                    handleOnlyShowProductsInStockInputChanged={this.handleOnlyShowProductsInStockInputChanged} />
                <ProductTable products={filteredProducts} />
            </div>
        );
    }

    /**
     * 在庫がある商品のみ絞り込みを行う場合は、該当の絞り込みを実施する関数を返却する。
     * @returns
     * @memberof FilterableProductTable
     */
    filterProductsInStock() {
        return (elem) => { 
            return this.state.onlyShowProductsInStock === true ? elem.stocked : true 
        };
    }

    /**
     * 商品名で絞り込みを行う関数を返却する。
     * @returns
     * @memberof FilterableProductTable
     */
    filterProductsName() {
        return (elem) => {
            return this.state.searchProductName ? elem.name.includes(this.state.searchProductName) : true;
        };
    }

}

export default FilterableProductTable