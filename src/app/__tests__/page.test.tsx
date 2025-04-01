import { render, screen, within } from "@testing-library/react";
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
    expect(dynastiesLink).toHaveClass("group");
    const imageContainer = within(dynastiesLink).getByRole("img", {
      name: /Dynasties/i,
    }).parentElement;
    expect(imageContainer).toHaveClass(
      "relative w-full h-48 border-2 border-white rounded-lg"
    );
    const dynastiesImage = within(dynastiesLink).getByAltText(/Dynasties/i);
    expect(dynastiesImage).toHaveAttribute(
      "src",
      "/other_images/lich_su_viet_nam.jpg"
    );
    const dynastiesText = within(dynastiesLink).getByText(/Dynasties/i);
    expect(dynastiesText).toHaveClass(
      "mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1"
    );
  });

  it("renders the Generals link with image", () => {
    render(<Homepage />);
    const generalsLink = screen.getByRole("link", { name: /Generals/i });
    expect(generalsLink).toBeInTheDocument();
    expect(generalsLink).toHaveAttribute("href", "/generals");
    expect(generalsLink).toHaveClass("group");
    const imageContainer = within(generalsLink).getByRole("img", {
      name: /Generals/i,
    }).parentElement;
    expect(imageContainer).toHaveClass(
      "relative w-full h-48 border-2 border-white rounded-lg"
    );
    const generalsImage = within(generalsLink).getByAltText(/Generals/i);
    expect(generalsImage).toHaveAttribute(
      "src",
      "/other_images/lam_son_vs_minh_02.jpg"
    );
    const generalsText = within(generalsLink).getByText(/Generals/i);
    expect(generalsText).toHaveClass(
      "mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1"
    );
  });

  it("renders the Timelines link with image", () => {
    render(<Homepage />);
    const timelinesLink = screen.getByRole("link", { name: /Timelines/i });
    expect(timelinesLink).toBeInTheDocument();
    expect(timelinesLink).toHaveAttribute("href", "/timelines");
    expect(timelinesLink).toHaveClass("group");
    const imageContainer = within(timelinesLink).getByRole("img", {
      name: /Timelines/i,
    }).parentElement;
    expect(imageContainer).toHaveClass(
      "relative w-full h-48 border-2 border-white rounded-lg"
    );
    const timelinesImage = within(timelinesLink).getByAltText(/Timelines/i);
    expect(timelinesImage).toHaveAttribute(
      "src",
      "/other_images/Timeline-of-the-Far-Future-Snippet.jpg"
    );
    const timelinesText = within(timelinesLink).getByText(/Timelines/i);
    expect(timelinesText).toHaveClass(
      "mt-2 text-xl text-center border-2 border-white bg-black/50 rounded-md px-2 py-1"
    );
  });

  it("renders grid layout correctly", () => {
    render(<Homepage />);
    const grid = screen.getByText(/Dynasties/i).closest(".grid");
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass(
      "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4"
    );
  });

  it("exports correct metadata from Home page", () => {
    const { metadata } = require("@/app/page");
    expect(metadata).toBeDefined();
    expect(metadata).toEqual({
      title: "Home | Chronicles of Valor",
      description:
        "Explore historical timelines, famous generals, and significant events in history.",
    });
  });
});
