import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Movies from "./index";

test("everything renders", async () => {
  render(<Movies />);
  const button = await screen.findByText("Cruella")
  expect(button).toBeInTheDocument();
});
