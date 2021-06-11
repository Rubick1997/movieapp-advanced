import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./index";
global.scroll= jest.fn();

test("search works right", async () => {
  render(<Search />);
  const searchInput = screen.getByRole("textbox");
  userEvent.clear(searchInput);
  userEvent.type(searchInput, "Crue");
  expect(await screen.findByText("Cruella")).toBeInTheDocument();
  const showsButton = screen.getByText(/search tv shows/i);
  userEvent.click(showsButton);
  expect(await screen.findByText(/no shows found/i)).toBeInTheDocument();
});
test("pagination appears and works right", async () => {
  render(<Search />);
  const searchInput = screen.getByRole("textbox");
  userEvent.clear(searchInput);
  userEvent.type(searchInput, "Crue");
  expect(await screen.findByText("Cruella")).toBeInTheDocument();
  const paginationButtons = await screen.findAllByRole("button");
  expect(paginationButtons).toHaveLength(9);
  const secondPage = screen.getByRole("button", { name: "Go to page 2" });
  expect(secondPage).not.toHaveClass("Mui-selected")
  userEvent.click(secondPage)
  expect(secondPage).toHaveClass("Mui-selected")
  expect(global.scroll).toHaveBeenCalledWith(0,0)
});
