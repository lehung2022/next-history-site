// src/app/__tests__/Timeline.test.tsx
import { render, screen } from "@testing-library/react";
import TimelinePage from "../../client-components/main/TimelinePage"; // Trỏ đúng đến TimelinePage

// Định nghĩa type cho props của Image
type MockImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  [key: string]: any;
};

// Mock next/image với kiểu
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, fill, priority, ...props }: MockImageProps) => (
    <img
      src={src}
      alt={alt}
      {...(fill ? { style: { objectFit: "fill" } } : {})}
      {...(priority ? { priority: "true" } : {})}
      {...props}
    />
  ),
}));

// Mock next/navigation (cho Link)
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe("Timeline Page", () => {
  it("renders title and three timeline links", () => {
    render(<TimelinePage />);
    expect(screen.getByText("Historical Timelines")).toBeInTheDocument();
    expect(screen.getByText("Vietnam (939 - 1858)")).toBeInTheDocument();
    expect(screen.getByText("Japan (1603 - 1868)")).toBeInTheDocument();
    expect(screen.getByText("China (221 BC - 1911)")).toBeInTheDocument();
  });

  it("displays images for each timeline", () => {
    render(<TimelinePage />);
    expect(screen.getByAltText("Vietnam Timeline")).toHaveAttribute(
      "src",
      "/other_images/timeline-of-vietnamese-military.png"
    );
    expect(screen.getByAltText("Japan Timeline")).toHaveAttribute(
      "src",
      "/other_images/Japanese-Timelines-1.png"
    );
    expect(screen.getByAltText("China Timeline")).toHaveAttribute(
      "src",
      "/other_images/china-timeline.png"
    );
  });

  it("renders Back link with correct href", () => {
    render(<TimelinePage />);
    const backLink = screen.getByText("← Back");
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute("href", "/");
  });
});
