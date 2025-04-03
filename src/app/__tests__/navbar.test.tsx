import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../client-components/main/Navbar";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe("Navbar", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders hamburger, logo, search inputs, and nav links", () => {
    render(<Navbar />);
    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
    expect(screen.getByText("Chronicles of Valor")).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText("Search...")).toHaveLength(2);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Dynasties")).toBeInTheDocument();
    expect(screen.getByText("Generals")).toBeInTheDocument();
    expect(screen.getByText("Timelines")).toBeInTheDocument();
  });

  it("toggles menu on hamburger click", () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText("Toggle menu");
    const menu = screen.getByText("About").parentElement?.parentElement;

    expect(menu).toHaveClass("-translate-x-full");
    fireEvent.click(menuButton);
    expect(menu).toHaveClass("translate-x-0");
    fireEvent.click(menuButton);
    expect(menu).toHaveClass("-translate-x-full");
  });

  it("shows overlay when menu is open and closes on click", () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText("Toggle menu");

    expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    fireEvent.click(menuButton);
    const overlay = screen.getByTestId("overlay");
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("bg-black/50");
    fireEvent.click(overlay);
    expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
  });

  it("calls console.log on search with Enter (desktop)", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Navbar />);
    const input = screen.getAllByPlaceholderText("Search...")[1];
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(consoleSpy).toHaveBeenCalledWith("Search:", "test");
    expect(input).toHaveValue("");
  });

  it("calls console.log on search with icon click (mobile)", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Navbar />);
    const input = screen.getAllByPlaceholderText("Search...")[0];
    const searchIcon = screen.getAllByLabelText("Search")[0];
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(searchIcon);
    expect(consoleSpy).toHaveBeenCalledWith("Search:", "test");
    expect(input).toHaveValue("");
  });

  it("does not call console.log on non-Enter key", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Navbar />);
    const input = screen.getAllByPlaceholderText("Search...")[0];
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.keyDown(input, { key: "Space" });
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
