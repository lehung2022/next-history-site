// src/client-components/__tests__/Navbar.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../client-components/main/Navbar";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Navbar", () => {
  let push: jest.Mock;

  beforeEach(() => {
    push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  it("renders hamburger menu, logo, and search input", () => {
    render(<Navbar />);
    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
    expect(screen.getByText("Chronicles of Valor")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByLabelText("Search")).toBeInTheDocument();
  });

  it("toggles menu on hamburger click", () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);
    expect(screen.getByText("About").parentElement).toHaveClass(
      "translate-x-0"
    );
    fireEvent.click(menuButton);
    expect(screen.getByText("About").parentElement).toHaveClass(
      "-translate-x-full"
    );
  });

  it("navigates to search_result on Enter key", () => {
    render(<Navbar />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Nguyen" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(push).toHaveBeenCalledWith("/search_result?q=Nguyen");
  });

  it("navigates to search_result on search button click", () => {
    render(<Navbar />);
    const input = screen.getByPlaceholderText("Search...");
    const searchButton = screen.getByLabelText("Search");
    fireEvent.change(input, { target: { value: "Nguyen" } });
    fireEvent.click(searchButton);
    expect(push).toHaveBeenCalledWith("/search_result?q=Nguyen");
  });

  it("does not navigate when pressing non-Enter key", () => {
    render(<Navbar />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Nguyen" } });
    fireEvent.keyDown(input, { key: "Space" });
    expect(push).not.toHaveBeenCalled();
  });
});
