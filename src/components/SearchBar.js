import React, { Component } from 'react'

/**
 * 検索ボックス。
 * 
 * 商品の絞り込み条件の入力機能を提供する。
 * 入力した条件は、上位のコンポーネントに変更を通達する。
 * 
 * props : 
 *  searchProductName : 検索条件の商品名。（上位コンポーネントでstate管理）
 *  onlyShowProductsInStock :　在庫ありの商品のみ検索するかどうか。（上位コンポーネントでstate管理）
 *  handleSearchProductNameChanged ：商品名の変更を通知する。引数：商品名
 *  handleOnlyShowProductsInStockInputChanged ：在庫ありの商品のみ検索するチェックボックスがトグルされたことを通知する。引数なし。
 * 
 * @class SearchBar
 * @extends {Component}
 */
class SearchBar extends Component {

    /**
     * Creates an instance of SearchBar.
     * @param {*} props
     * @memberof SearchBar
     */
    constructor(props) {
        super(props);

        //This束縛。TypeScriptだと不要になるらしい。
        this.handleSearchProductNameChanged = this.handleSearchProductNameChanged.bind(this);
        this.handleOnlyShowProductsInStockInputChanged = this.handleOnlyShowProductsInStockInputChanged.bind(this);
    }

    /**
     * 商品名の変更を通知する。
     * @param {*} event
     * @memberof SearchBar
     */
    handleSearchProductNameChanged(event) {
        this.props.handleSearchProductNameChanged(event.target.value);
    }

    /**
     * 在庫ありの商品のみ検索するチェックボックスがトグルされたことを通知する
     * @param {*} event
     * @memberof SearchBar
     */
    handleOnlyShowProductsInStockInputChanged(event) {
        this.props.handleOnlyShowProductsInStockInputChanged();
    }

    /**
     * レンダリングを行う。
     * @returns
     * @memberof SearchBar
     */
    render() {
        return (
            <div>
                <input type="text" maxLength="20" placeholder="Search..." value={this.props.searchProductName} onChange={this.handleSearchProductNameChanged} /><br />
                <input type="checkbox" checked={this.props.onlyShowProductsInStock} onChange={this.handleOnlyShowProductsInStockInputChanged}/>
                Only show products in stock
            </div>
        );
    }
}

export default SearchBar