import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Genre from ".";

const defaultProps = {
  type: "movie",
  selectedGenres: [{ id: 8, name: "Comedy" }],
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
  ],
  setGenres: jest.fn(),
  setSelectedGenres: jest.fn(),
  setPage: jest.fn(),
};

test("displays all the movie genres", async () => {

  render(<Genre {...defaultProps} />);
  //find genres
  const actionButton = await screen.findByRole("button", { name: "Action" });
  expect(actionButton).toBeInTheDocument();

  const adventureButton = screen.getByRole("button", { name: "Adventure" });
  expect(adventureButton).toBeInTheDocument();

  const animationButton = screen.getByRole("button", { name: "Animation" });
  expect(animationButton).toBeInTheDocument();

  const comedyButton = screen.getByRole("button", { name: "Comedy" });
  expect(comedyButton).toBeInTheDocument();
  expect(comedyButton).toHaveClass("MuiChip-deletable")
});
