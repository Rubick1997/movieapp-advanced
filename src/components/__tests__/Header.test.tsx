import Header from "../Header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


test("check if the header exists", () => {
  render(<Header />);
  const headerText = screen.getByText(/Entertainment database/i);
  expect(headerText).toHaveTextContent("Entertainment database");
});

test("check if window going up if the header text is clicked", async () => {
  render(<Header />);
  global.scroll= jest.fn();
  const headerText = screen.getByText(/Entertainment database/i);
  userEvent.click(headerText);
  expect(global.scroll).toHaveBeenCalledWith(0,0)
});
