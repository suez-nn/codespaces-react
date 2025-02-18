import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

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

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default ProductTable;
