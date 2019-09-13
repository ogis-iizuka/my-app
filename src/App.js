import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'

function App() {
  return (
    <div>
      <FilterableProductTable products={produceProductData()}/>
    </div>
  );
}

/**
 * 商品データを返却する。
 * @returns 商品データ
 */
//
function produceProductData(){
  return [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
}

export default App;
