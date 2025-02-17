import React, {useState} from "react";
import './Products.css';

function SearchBar({onFilterTextChange, onInStockOnlyChange}) {
  return (
    <form>
      <input type="text" placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)}/>
      <div className="horizontalContainer"> 
        <label><input type="checkbox" onChange={(e) => onInStockOnlyChange(e.target.checked)}/> Only show products in stock </label>
      </div>
      <br />
    </form>
  );
}

function ProductCategoryRow({ Category }) {
  return (
    <>
      <p style={{ fontWeight: "bold" }}>{Category}</p>
    </>
  )
}

function ProductRow({ productName, productPrice, stocked}) {
  return (
    <div className="horizontalContainer">
      <p style={{color: stocked ? "white" : "red"}}>{productName}</p>
      <p>{productPrice}</p>
    </div>
  )
}

function ProductTable({textFilter, inStockOnly}) {
  var filteredProducts = inStockOnly ? PRODUCTS.filter(p => p.stocked) : PRODUCTS;
  filteredProducts = textFilter=='' ? filteredProducts : filteredProducts.filter(p => p.name.toLowerCase().includes(textFilter.toLowerCase()));
  const categories = filteredProducts.map(p => p.category);
  const uniqueCats = categories.filter((c, index) => categories.indexOf(c) === index);
  var productTable = [];
  for (var i = 0; i < uniqueCats.length; i++) {
    productTable.push(<ProductCategoryRow Category={uniqueCats[i]} />)
    const categoryProducts = filteredProducts.filter(p => p.category == uniqueCats[i]);
    productTable.push(categoryProducts.map((p) => <ProductRow productName={p.name} productPrice={p.price} stocked={p.stocked} />));
  }

  return (
    <div className="table">
      <div className="horizontalContainer">
        <p style={{ fontWeight: "bold" }}>Name</p>
        <p style={{ fontWeight: "bold" }}>Price</p>
      </div>
      {productTable}
    </div>
  );
}

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

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default Products;
