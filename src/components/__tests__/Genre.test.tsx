import { act, render, screen } from "@testing-library/react";
import Genre from "../Genre";

const defaultProps = {
  type: "movie",
  selectedGenres: [],
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
  ],
  setGenres: () => {},
  setSelectedGenres: () => {},
  setPage: () => {},
};

test("displays all the movie genres", async () => {
  act(() => {
    render(<Genre {...defaultProps} />);
  });
  //find genres
  const actionButton = await screen.findByRole("button", { name: "Action" });
  expect(actionButton).toBeInTheDocument();

  const adventureButton = screen.getByRole("button", { name: "Adventure" });
  expect(adventureButton).toBeInTheDocument();

  const animationButton = screen.getByRole("button", { name: "Animation" });
  expect(animationButton).toBeInTheDocument();
});
