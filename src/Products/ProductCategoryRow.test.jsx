import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import ProductCategoryRow from "./ProductCategoryRow";

let container = null;
beforeEach(()=>{
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it(("displays category as passed in props"), () => {
    const testCategory = "cats";
    // attach component to container (div)
    act(() => {
        render(<ProductCategoryRow category={testCategory} />, container);
    })

    // get component
    const text = document.querySelector("p").innerHTML;
    
    // assert p tag text is cats
    expect(text).toEqual(testCategory);
});
