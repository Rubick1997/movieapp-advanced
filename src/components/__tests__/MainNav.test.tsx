import { render, screen } from "@testing-library/react";
import MainNav from "../MainNav";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("routes are changing when the bottom nav buttons clicked", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <MainNav />
    </Router>
  );
  expect(history.location.pathname).toBe("/");

  const moviesButton = screen.getByRole("button", { name: "Movies" });
  userEvent.click(moviesButton);
  expect(history.location.pathname).toBe("/movies");

  const showsButton = screen.getByRole("button", { name: "Shows" });
  userEvent.click(showsButton);
  expect(history.location.pathname).toBe("/shows");

  const searchButton = screen.getByRole("button", { name: "Search" });
  userEvent.click(searchButton);
  expect(history.location.pathname).toBe("/search");

  const trendingButton = screen.getByRole("button", { name: "Trending" });
  userEvent.click(trendingButton);
  expect(history.location.pathname).toBe("/");
});
