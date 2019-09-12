import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        //This束縛。TypeScriptだと不要になるらしい。
        this.handleSearchProductNameChanged = this.handleSearchProductNameChanged.bind(this);
        this.handleOnlyShowProductsInStockInputChanged = this.handleOnlyShowProductsInStockInputChanged.bind(this);

    }

    handleSearchProductNameChanged(event) {
        this.props.handleSearchProductNameChanged(event.target.value);
    }

    handleOnlyShowProductsInStockInputChanged(event) {
        this.props.handleOnlyShowProductsInStockInputChanged();
    }

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