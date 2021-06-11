import { render, screen } from "@testing-library/react";
import Movies from "./index";

test("everything renders", async () => {
  render(<Movies />);
  const movie = await screen.findByText("Cruella")
  expect(movie).toBeInTheDocument();
});
