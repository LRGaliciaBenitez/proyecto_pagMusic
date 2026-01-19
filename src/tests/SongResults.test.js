import { render, screen, fireEvent } from "@testing-library/react";
import SongResults from "../components/SearchResults/SongResults/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("SongResults", () => {
  const albumMock = {
    idAlbum: "1",
    strAlbum: "Discovery",
    strArtist: "Daft Punk",
    intYearReleased: "2001",
    strStyle: "Electronic",
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockImplementation(fn =>
      fn({ library: [] })
    );
    useNavigate.mockReturnValue(jest.fn());
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    window.alert.mockRestore();
  });

  test("Renderiza información del álbum", () => {
    render(
      <SongResults
        imagen="test.jpg"
        album={albumMock}
        setMostrarResultados={jest.fn()}
      />
    );

    expect(screen.getByText(/álbum: discovery/i)).toBeInTheDocument();
    expect(screen.getByText(/artista: daft punk/i)).toBeInTheDocument();
    expect(screen.getByText(/año: 2001/i)).toBeInTheDocument();
    expect(screen.getByText(/genero: electronic/i)).toBeInTheDocument();
  });

  test("Ejecuta acción al hacer click en Agregar álbum", () => {
    render(
      <SongResults
        imagen="test.jpg"
        album={albumMock}
        setMostrarResultados={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText(/agregar álbum/i));
    expect(window.alert).toHaveBeenCalled();
  });

  test("Navega al álbum y oculta resultados", () => {
    const mockNavigate = jest.fn();
    const mockSetMostrar = jest.fn();

    useNavigate.mockReturnValue(mockNavigate);

    render(
      <SongResults
        imagen="test.jpg"
        album={albumMock}
        setMostrarResultados={mockSetMostrar}
      />
    );

    fireEvent.click(screen.getByText(/ver álbum/i));

    expect(mockNavigate).toHaveBeenCalledWith("/album/1");
    expect(mockSetMostrar).toHaveBeenCalledWith(false);
  });
});
