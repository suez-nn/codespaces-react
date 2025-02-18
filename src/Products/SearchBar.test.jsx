import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { vi } from 'vitest';
import SearchBar from './SearchBar.jsx'

let container = null;
beforeEach(() => {
    // create DOM el as render target
    container = document.createElement("div");
    document.body.appendChild(container);    
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("filters for stocked products when clicked", ()=>{
    const onFilterTextChange = vi.fn();
    const onChange = vi.fn();

    // Render SearchBar component
    act(() => {
        render(<SearchBar onFilterTextChange={onFilterTextChange} onInStockOnlyChange={onChange}/>, container);
    });

    // Get checkbox element
    const checkbox = document.querySelector('input[type="checkbox"]');
    expect(checkbox.checked).toEqual(false);

    // Dispatch mouse click event
    act(() => {
        checkbox.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox.checked).toEqual(true);
});
