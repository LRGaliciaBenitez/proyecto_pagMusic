import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/HEADER/header";

test("Muestra correctamente el titulo Tuni Music", () => {
  render(
    <BrowserRouter>
      <Header
        setBusqueda={jest.fn()}
        setMostrarResultados={jest.fn()}
        busqueda=""
      />
    </BrowserRouter>
  );

  const titulo = screen.getByRole("heading", { name: /tuni music/i });
  expect(titulo).toBeInTheDocument();
});
