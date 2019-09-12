import React, { Component } from 'react'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchProductName: "",
            onlyShowProductsInStock: false
        }

        //this束縛
        this.handleSearchProductNameChanged = this.handleSearchProductNameChanged.bind(this);
        this.handleOnlyShowProductsInStockInputChanged = this.handleOnlyShowProductsInStockInputChanged.bind(this);
    }

    handleSearchProductNameChanged(searchProductName) {
        this.setState({
            searchProductName: searchProductName
        });
    }

    handleOnlyShowProductsInStockInputChanged() {
        //FIXME ({としないとエラーになる理由が良く分かっていない。
        this.setState((state, props) => ({
            //チェックボックスの変更はvalueでは取れないので、クリックされるたびに状態を逆の状態にトグルする。
            onlyShowProductsInStock: !state.onlyShowProductsInStock
        }));
    }

    render() {
        let filteredProducts =
            this.props.products.
                filter(this.filterProductsInStock()). //在庫がある商品のみ絞り込みを行う場合は、該当の絞り込みを実施
                filter(this.filterProductsName()); //商品名で絞り込みを実施

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

    //在庫がある商品のみ絞り込みを行う場合は、該当の絞り込みを実施する関数を返却。
    filterProductsInStock() {
        return (elem) => { 
            return this.state.onlyShowProductsInStock === true ? elem.stocked : true 
        };
    }

    //商品名で絞り込みを行う
    filterProductsName() {
        return (elem) => {
            return this.state.searchProductName ? elem.name.includes(this.state.searchProductName) : true;
        };
    }

}

export default FilterableProductTable