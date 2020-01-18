import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Modal from "../modal";

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

it("[opened] renders default modal", () => {
  act(() => {
    render(<Modal />, container);
  });
  expect(container.textContent).toContain("Open");
});

it("[opened] renders custom modal: title", () => {
  act(() => {
    const modal = React.createRef<Modal>();
    render(<Modal ref={modal} modalTitle="Custom Modal Title" />, container);
    // modal.current!.open();
  });
  expect(container.textContent).toContain("Custom Modal Title");
})

it("[opened] renders custom modal: button", () => {
  act(() => {
    const modal = React.createRef<Modal>();
    render(<Modal ref={modal} btnOpen={{ caption: "Добавить", className: "custom-add-button super-btn btn" }} />, container);
    // modal.current!.open();
  });
  expect(container.textContent).toContain("Добавить");
  expect(container.querySelector("[data-testid='modal-open-btn']")?.className).toContain("custom-add-button super-btn btn");
})

it("[opened] renders custom modal: compose", () => {
  act(() => {
    const modal = React.createRef<Modal>();
    render(
      <Modal ref={modal}>
        <p>I'm child component!</p>
      </Modal>
      , container);
    // modal.current!.open();
  });
  expect(container.textContent).toContain("I'm child component!");
})

it("[closed] renders state-dependent modal", () => {
  act(() => {
    render(
      <Modal
        btnOpen={{ caption: 'Add', className: 'btn btn-add btn-primary' }}
        modalTitle="Test Modal Title"
      >
        <p>Child Component</p>
      </Modal>
      , container);
  });
  expect(container.querySelector("[data-testid='modal-open-btn']")).toBeVisible();
  expect(container.textContent).not.toContain("Test Modal Title");
  expect(container.textContent).not.toContain("Child Component");
})