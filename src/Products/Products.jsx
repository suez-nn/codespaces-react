import React, {useState} from "react";
import './Products.css';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function Products() {
  const [inStockOnly, setInStockOnly] = useState(false);
  function onInStockOnlyChange(value){
    console.log(value);
    setInStockOnly(value);
  }

  const [textFilter, setTextFilter] = useState('');
  function onFilterTextChange(value){
    console.log(value);
    setTextFilter(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontWeight: "bold" }}>
          PRODUCTS TABLE
        </p>
        <SearchBar onFilterTextChange={onFilterTextChange} onInStockOnlyChange={onInStockOnlyChange}/>
        <ProductTable textFilter={textFilter} inStockOnly={inStockOnly}/>
      </header>
    </div>
  );
}

export default Products;
