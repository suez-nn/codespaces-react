import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { vi } from 'vitest';
import SearchBar from './SearchBar.jsx'
import { fireEvent } from "@testing-library/react";

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

it("calls onInStockOnlyChange on click", () => {
    const onChange = vi.fn();

    // Render SearchBar component
    act(() => {
        render(<SearchBar onInStockOnlyChange={onChange} />, container);
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

    // Dispatch mouse click event
    act(() => {
        checkbox.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox.checked).toEqual(false);
});

it("calls onFilterTextChange when text entered into searchbar", () => {
    const onChange = vi.fn();

    // render element and attach to container
    act(() => {
        render(<SearchBar onFilterTextChange={onChange} />, container);
    });

    // get searchbar
    const searchbar = document.querySelector("input[type=text]");
    // searchbar should be blank
    expect(searchbar.value).toEqual('');

    // type into search bar
    fireEvent.change(searchbar, { target: { value: 'fruit' } });
    expect(searchbar.value).toEqual('fruit');

    expect(onChange).toHaveBeenCalledTimes(1);

    // type into search bar
    fireEvent.change(searchbar, { target: { value: 'veg' } });
    expect(searchbar.value).toEqual('veg');

    expect(onChange).toHaveBeenCalledTimes(2);
})
