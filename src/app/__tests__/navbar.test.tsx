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

  // Test Desktop và Empty Query để tham khảo
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

  it("does not submit empty query", async () => {
    render(<Navbar />);
    const inputDesktop = screen.getAllByPlaceholderText("Search...")[0];

    await user.click(inputDesktop);
    await user.keyboard("{Enter}");

    expect(mockPush).not.toHaveBeenCalled();
  });
});
