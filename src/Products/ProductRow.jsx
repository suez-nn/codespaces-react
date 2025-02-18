function ProductRow({ productName, productPrice, stocked}) {
    return (
        <div className="horizontalContainer">
        <p style={{color: stocked ? "white" : "red"}}>{productName}</p>
        <p>{productPrice}</p>
        </div>
    )
}

export default ProductRow;
