import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Error from "../error";

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

it("renders empty error", () => {
  act(() => {
    render(<Error />, container);
  });
  expect(container.textContent).toBe("");  
});

it("renders simple error", () => {
  act(() => {
    render(<Error error={'Объект не найден'}/>, container);
  });
  expect(container.textContent).toBe("Объект не найден");  
});