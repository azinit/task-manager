import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Modal from "../../client/components/modal/modal";
import Error from "../../client/components/form/error";

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

it("renders default modal", () => {
  act(() => {
    render(<Modal />, container);
  });
  expect(container.textContent).toContain("Open");
});

it("renders custom modal: title", () => {
  act(() => {
    render(<Modal isOpen={true} modalTitle="Custom Modal Title" />, container);
  });
  expect(container.textContent).toContain("Custom Modal Title");
})

it("renders custom modal: button", () => {
  act(() => {
    render(<Modal isOpen={true} btnOpen={{ caption: "Добавить", className: "custom-add-button super-btn btn" }} />, container);
  });
  expect(container.textContent).toContain("Добавить");
  expect(container.querySelector("[data-testid='modal-open-btn']")?.className).toContain("custom-add-button super-btn btn");
})

it("renders custom modal: compose", () => {
  act(() => {
    render(
      <Modal isOpen={true}>
        <p>I'm child component!</p>
      </Modal>
      , container);
  });
  expect(container.textContent).toContain("I'm child component!");
})

it("renders state-dependent modal: closed", () => {
  act(() => {
    render(
      <Modal 
      isOpen={false}
      btnOpen={{ caption: 'Add', className: 'btn btn-add btn-primary'}}
      modalTitle="Test Modal Title"
      >
        <p>Child Component</p>
      </Modal>
      , container);
  });
  expect(container.querySelector("[data-testid='modal-open-btn']")).toBe(true);
  expect(container.textContent).not.toContain("Test Modal Title");
  expect(container.textContent).not.toContain("Child Component");
})