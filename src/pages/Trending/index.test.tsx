import { render, screen } from "@testing-library/react";
import Trending from "./index";

test("everthing renders", async () => {
  render(<Trending />);
  expect(await screen.findByText("Cruella")).toBeInTheDocument();
});
