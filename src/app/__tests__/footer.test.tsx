import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import Footer from "../../client-components/main/Footer";

describe("Footer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it("renders copyright, date, time, and event initially", async () => {
    jest.setSystemTime(new Date("2025-04-03T12:34:56"));
    await act(async () => {
      render(<Footer />);
    });
    expect(
      screen.getByText("©2025 Chronicles of Valor. All rights reserved.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Lý Thường Kiệt đánh quân Tống (1075)")
    ).toBeInTheDocument();
    expect(screen.getByText("4/3/2025")).toBeInTheDocument();
    expect(screen.getByText("12:34:56 PM")).toBeInTheDocument();
  });

  it("updates time every second", async () => {
    jest.setSystemTime(new Date("2025-04-03T12:34:56"));
    render(<Footer />);
    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    await waitFor(() => {
      expect(screen.getByText(/12:34:57 PM/)).toBeInTheDocument();
    });
  });

  it("shows correct event for April 3rd", async () => {
    jest.setSystemTime(new Date("2025-04-03T12:00:00"));
    render(<Footer />);
    await waitFor(() => {
      expect(
        screen.getByText("Lý Thường Kiệt đánh quân Tống (1075)")
      ).toBeInTheDocument();
    });
  });

  it("shows 'No event today' for other dates", async () => {
    jest.setSystemTime(new Date("2025-04-04T12:00:00"));
    render(<Footer />);
    await waitFor(() => {
      expect(screen.getByText("No event today")).toBeInTheDocument();
    });
  });

  it("displays current date and time after load", async () => {
    jest.setSystemTime(new Date("2025-04-03T12:34:56"));
    render(<Footer />);
    await waitFor(() => {
      expect(screen.getByText("4/3/2025")).toBeInTheDocument();
      expect(screen.getByText("12:34:56 PM")).toBeInTheDocument();
    });
  });
});

//tệp kiểm thử này đã qua, còn mỗi cái đáng ngại là uncovered line
// ------------|---------|----------|---------|---------|-------------------
// File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
// ------------|---------|----------|---------|---------|-------------------
// All files   |   98.48 |    92.85 |     100 |   98.48 |
//  Footer.tsx |   98.48 |    92.85 |     100 |   98.48 | 24
// ------------|---------|----------|---------|---------|-------------------
//