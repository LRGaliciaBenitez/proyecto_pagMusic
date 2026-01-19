import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/HEADER/header";

const renderHeader = (props = {}) => {
  const defaultProps = {
    setBusqueda: jest.fn(),
    setMostrarResultados: jest.fn(),
    busqueda: "",
  };

  return render(
    <MemoryRouter>
      <Header {...defaultProps} {...props} />
    </MemoryRouter>
  );
};

test("El input se renderiza correctamente", () => {
  renderHeader();

  const input = screen.getByRole("textbox", { hidden: true });
  expect(input).toBeInTheDocument(); 
});

test("El usuario puede escribir en el input", () => {
  const setBusqueda = jest.fn();

  renderHeader({ setBusqueda });

  const input = screen.getByRole("textbox", { hidden: true });

  fireEvent.change(input, {
    target: { value: "rock" },
  });

  expect(setBusqueda).toHaveBeenCalledWith("rock");
});

test("Ejecuta la busqueda al presionar Enter", () => {
  const setMostrarResultados = jest.fn();

  renderHeader({
    setMostrarResultados,
    busqueda: "rock",
  });

  const input = screen.getByRole("textbox", { hidden: true });

  fireEvent.keyDown(input, {
    key: "Enter",
    code: "Enter",
  });

  expect(setMostrarResultados).toHaveBeenCalledWith(true);
});

test("Ejecuta la busqueda al hacer click en el icono", () => {
  const setMostrarResultados = jest.fn();

  const { container } = renderHeader({
    setMostrarResultados,
    busqueda: "rock",
  });

  const icono = container.querySelector(".bi-search");

  fireEvent.click(icono);

  expect(setMostrarResultados).toHaveBeenCalledWith(true);
});
