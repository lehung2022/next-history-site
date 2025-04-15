import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../../client-components/main/Navbar";

const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe("Navbar", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    mockPush.mockClear();
  });

  it("submits search query on Enter key (Mobile)", async () => {
    render(<Navbar />);
    const searchIconMobile = screen.getByLabelText("Open search");

    // Mở overlay
    await user.click(searchIconMobile);
    const inputMobile = screen.getAllByPlaceholderText("Search...")[1];

    // Gõ "Trần" và kiểm tra trước submit
    await user.type(inputMobile, "Trần");
    expect(inputMobile).toHaveValue("Trần");

    // Nhấn Enter
    await user.keyboard("{Enter}");

    // Kiểm tra router.push và overlay đóng
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/search?query=Tr%E1%BA%A7n");
      expect(screen.queryByTestId("search-overlay")).not.toBeInTheDocument();
    });
  });

  it("submits search query on Enter key (Desktop)", async () => {
    render(<Navbar />);
    const inputDesktop = screen.getAllByPlaceholderText("Search...")[0];

    await user.type(inputDesktop, "Trần");
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/search?query=Tr%E1%BA%A7n");
      expect(inputDesktop).toHaveValue("");
    });
  });

  it("submits search query on search icon click (Desktop)", async () => {
    render(<Navbar />);
    const inputDesktop = screen.getAllByPlaceholderText("Search...")[0];
    const searchIconDesktop = screen.getByLabelText("Search");

    await user.type(inputDesktop, "Trần");
    expect(inputDesktop).toHaveValue("Trần");

    await user.click(searchIconDesktop);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/search?query=Tr%E1%BA%A7n");
      expect(inputDesktop).toHaveValue("");
    });
  });

  it("does not submit empty query", async () => {
    render(<Navbar />);
    const inputDesktop = screen.getAllByPlaceholderText("Search...")[0];

    await user.click(inputDesktop);
    await user.keyboard("{Enter}");

    expect(mockPush).not.toHaveBeenCalled();
  });

  it("toggles hamburger menu and navigates to a link", async () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText("Toggle menu");

    // Mở menu
    await user.click(menuButton);
    expect(screen.getByTestId("overlay")).toBeInTheDocument();

    // Kiểm tra link "Contact"
    const contactLink = screen.getByText("Contact");
    expect(contactLink).toHaveAttribute("href", "/contact");

    // Click link và kiểm tra menu đóng
    await user.click(contactLink);
    await waitFor(() => {
      expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    });
  });

  it("closes hamburger menu on overlay click", async () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText("Toggle menu");

    // Mở menu
    await user.click(menuButton);
    expect(screen.getByTestId("overlay")).toBeInTheDocument();

    // Click overlay để đóng
    const overlay = screen.getByTestId("overlay");
    await user.click(overlay);

    await waitFor(() => {
      expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
    });
  });
});
