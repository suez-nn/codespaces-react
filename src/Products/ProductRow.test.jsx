const { render } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
const { unmountComponentAtNode } = require("react-dom");
import ProductRow from "./ProductRow";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("displays product details", () => {
    const testProduct = {
        productName:"apricot", productPrice:"$0.4", stocked:true
    }

    // render component
    act(() => {
        render(<ProductRow {...testProduct}/>, container);
    });

    // get component
    const name = document.querySelector("[data-testid=product-name]");
    const price = document.querySelector("[data-testid=product-price]");

    // set expectations
    expect(name.innerHTML).toEqual(testProduct.productName);
    expect(price.innerHTML).toEqual(testProduct.productPrice);
    expect(name.style.color).toEqual('white');
});

it("displays product name in red if not in stock", () => {
    const testProduct = {
        productName:"apricot", productPrice:"$0.4", stocked:false
    }

    // render component
    act(() => {
        render(<ProductRow {...testProduct}/>, container);
    });

    // get component
    const name = document.querySelector("[data-testid=product-name]");
    const price = document.querySelector("[data-testid=product-price]");

    // set expectations
    expect(name.innerHTML).toEqual(testProduct.productName);
    expect(price.innerHTML).toEqual(testProduct.productPrice);
    expect(name.style.color).toEqual('red');
});
