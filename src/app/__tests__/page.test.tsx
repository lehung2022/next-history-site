import { render, screen, within } from "@testing-library/react";
import React from "react"; // Thêm dòng này
import Homepage from "@/client-components/main/Home";

describe("Homepage Component", () => {
  it('renders the main title "Choose your destiny"', () => {
    render(<Homepage />);
    const title = screen.getByText(/Choose your destiny/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-4xl md:text-5xl font-bold my-8");
  });

  it("renders the Dynasties link with image", () => {
    render(<Homepage />);
    const dynastiesLink = screen.getByRole("link", { name: /Dynasties/i });
    expect(dynastiesLink).toBeInTheDocument();
    expect(dynastiesLink).toHaveAttribute("href", "/dynasties");
    const dynastiesImage = within(dynastiesLink).getByAltText(/Dynasties/i);
    expect(dynastiesImage).toBeInTheDocument();
    expect(dynastiesImage).toHaveAttribute(
      "src",
      "/other_images/lich_su_viet_nam.jpg"
    );
  });

  it("renders the Generals link with image", () => {
    render(<Homepage />);
    const generalsLink = screen.getByRole("link", { name: /Generals/i });
    expect(generalsLink).toBeInTheDocument();
    expect(generalsLink).toHaveAttribute("href", "/generals");
    const generalsImage = within(generalsLink).getByAltText(/Generals/i);
    expect(generalsImage).toBeInTheDocument();
    expect(generalsImage).toHaveAttribute(
      "src",
      "/other_images/lam_son_vs_minh_02.jpg"
    ); // Sửa typo từ 'dynastiesImage' thành 'generalsImage'
  });

  it("renders the Timelines link with image", () => {
    render(<Homepage />);
    const timelinesLink = screen.getByRole("link", { name: /Timelines/i });
    expect(timelinesLink).toBeInTheDocument();
    expect(timelinesLink).toHaveAttribute("href", "/timelines");
    const timelinesImage = within(timelinesLink).getByAltText(/Timelines/i);
    expect(timelinesImage).toBeInTheDocument();
    expect(timelinesImage).toHaveAttribute(
      "src",
      "/other_images/Timeline-of-the-Far-Future-Snippet.jpg"
    );
  });

  it("renders grid layout correctly", () => {
    const { container } = render(<Homepage />);
    const grid = container.querySelector(".grid");
    expect(grid).toHaveClass("grid-cols-1 md:grid-cols-3 gap-6");
  });

  it("applies correct Tailwind classes to links", () => {
    render(<Homepage />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveClass("group");
    });
  });
});
