import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height, priority, ...props }: any) => (
    <img src={src} alt={alt} width={width} height={height} {...props} />
  ),
}));
