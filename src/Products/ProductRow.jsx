function ProductRow({ productName, productPrice, stocked}) {
    return (
        <div className="horizontalContainer">
        <p data-testid="product-name" style={{color: stocked ? "white" : "red"}}>{productName}</p>
        <p data-testid="product-price">{productPrice}</p>
        </div>
    )
}

export default ProductRow;
