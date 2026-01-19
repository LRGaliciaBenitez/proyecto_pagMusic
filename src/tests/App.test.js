import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import store from "../redux/store";
import axios from "axios";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Flujo completo App", () => {

  beforeAll(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {}); 
  });

  test("buscar y agregar álbum a Library", async () => {

    axios.get.mockResolvedValue({
      data: {
        album: [
          { idAlbum: "1", strAlbum: "Discovery", strArtist: "Daft Punk" },
        ],
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const input = screen.getByLabelText(/buscar album/i);
    await userEvent.type(input, "daft{enter}");
  
    expect(await screen.findByText("Álbum: Discovery")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /agregar álbum/i }));

    expect(screen.getByText(/library/i)).toBeInTheDocument();

    expect(screen.getByText("Discovery")).toBeInTheDocument();
  });
});
