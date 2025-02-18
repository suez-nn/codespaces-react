function SearchBar({onFilterTextChange, onInStockOnlyChange}) {
    return (
        <form>
        <input type="text" placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)}/>
        <div className="horizontalContainer"> 
            <label><input data-testid="toggle" type="checkbox" onChange={(e) => onInStockOnlyChange(e.target.checked)}/> Only show products in stock </label>
        </div>
        <br />
        </form>
    );
}

export default SearchBar;