import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchProductName: "",
            onlyShowProductsInStock: false
        }

        //This束縛。TypeScriptだと不要になるらしい。
        this.handleSearchProductNameChanged = this.handleSearchProductNameChanged.bind(this);
        this.handleOnlyShowProductsInStockInputChanged = this.handleOnlyShowProductsInStockInputChanged.bind(this);

    }

    handleSearchProductNameChanged(event) {
        this.setState({
            searchProductName: event.target.value
        });
    }

    handleOnlyShowProductsInStockInputChanged(event) {
        //FIXME ({としないとエラーになる理由が良く分かっていない。
        this.setState((state,props)=>({
            //チェックボックスの変更はvalueでは取れないので、クリックされるたびに状態を逆の状態にトグルする。
            onlyShowProductsInStock: !state.onlyShowProductsInStock
        }));
    }

    render() {
        return (
            <div>
                <input type="text" maxLength="20" placeholder="Search..." value={this.state.searchProductName} onChange={this.handleSearchProductNameChanged} /><br />
                <input type="checkbox" checked={this.state.onlyShowProductsInStock} onChange={this.handleOnlyShowProductsInStockInputChanged}/>
                Only show products in stock
            </div>
        );
    }
}

export default SearchBar