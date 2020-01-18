import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TodoAdd from "../../client/components/todo-action/todo-add/todo-add";
import { CallbackResponse } from "../../server/fetch";

function add(title: string, callback: CallbackResponse): void {
    console.log('TEST', 'TODO-ADD');
}

// @ts-ignore
let container: Element = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    // @ts-ignore
    container = null;
});

it("renders TodoAdd + interact", () => {
    // render
    act(() => {
        render(<TodoAdd add={add} />, container);
    });
    expect(container.textContent).toContain("Добавить");
    expect(container.textContent).not.toContain("Создать");
    // click -> open
    act(() => {
        const addButton = container.querySelector("[data-testid='modal-open-btn']");
        addButton!.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(container.textContent).toContain("Создать");
    // click -> close
    act(() => {
        const closeBtn = container.querySelector("[data-testid='modal-close-btn']");
        closeBtn!.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(container.textContent).not.toContain("Создать");
});