import { fireEvent, render, screen } from "@testing-library/react";
import Library from "../components/Library/index";
import Song from "../components/song_components/song";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../redux/librarySlice";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../redux/librarySlice", () => ({
  removeSong: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test("Muestra la lista de canciones de la biblioteca", () => {
  const mockLibrary = [
    { idAlbum: "1", strAlbum: "Discovery", strArtist: "Daft Punk" },
    { idAlbum: "2", strAlbum: "Random Access Memories", strArtist: "Daft Punk" },
  ];

  useSelector.mockImplementation((fn) =>
    fn({ library: mockLibrary })
  );

  render(<Library />);

  expect(screen.getByText(/discovery/i)).toBeInTheDocument();
  expect(
    screen.getByText(/random access memories/i)
  ).toBeInTheDocument();
});

test("El componente tiene un botón para eliminar la canción", () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  render(
    <Song
      imagen="test-image.jpg"
      name="Bohemian Rhapsody"
      artista="Queen"
      duracion="5:55"
      id="123"
    />
  );

  const botonEliminar = screen.getByRole("button", { name: /eliminar/i });
  fireEvent.click(botonEliminar);

  expect(removeSong).toHaveBeenCalledWith("123");
  expect(mockDispatch).toHaveBeenCalled();
});

test("Muestra un mensaje cuando la biblioteca está vacía", () => {
  useSelector.mockImplementation((fn) =>
    fn({ library: [] })
  );

  render(<Library />);

  expect(
    screen.getByText(/aún no se han agregado canciones/i)
  ).toBeInTheDocument();
});
