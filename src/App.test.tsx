import { fireEvent, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils";

describe("<App />", () => {
  it("Renders main page correctly", () => {
    render(<App />);

    expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
    expect(screen.getByTestId(/search-input/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  it("Search forecast for a valid and correctly formatted address", async () => {
    render(<App />);

    const searchInput = screen.getByTestId(/search-input/i);

    fireEvent.change(searchInput, {
      target: { value: "105 Cedarhurst Ave, Cedarhurst, NY 11516" },
    });

    fireEvent.click(screen.getByText(/Search/i));

    await waitFor(() => {
      expect(screen.getByText(/7 days weather forecast/i)).toBeInTheDocument();
      expect(screen.getByText(/Monday/i)).toBeInTheDocument();
    });
  });

  it("Search forecast for an invalid adress should display error message", async () => {
    render(<App />);

    const searchInput = screen.getByTestId(/search-input/i);

    fireEvent.change(searchInput, {
      target: { value: "Invalid Address" },
    });

    fireEvent.click(screen.getByText(/Search/i));

    await waitFor(() => {
      expect(
        screen.getByText(/Error: No address match found to "Invalid address"./i)
      ).toBeInTheDocument();
    });
  });
});
