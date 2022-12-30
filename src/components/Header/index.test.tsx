import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Header } from "./index";

test("renders logo text", () => {
  render(<Header />);
  const linkElement = screen.getByText(/capputeeno/i);
  expect(linkElement).toBeInTheDocument();
});
