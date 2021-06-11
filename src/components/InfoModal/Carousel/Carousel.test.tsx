import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "./index";

const defaultProps = {
  media_type: "movie",
  id: 54693,
};

test("all the credits rendered", async () => {
  render(<Carousel {...defaultProps} />);
  const actor = await screen.findByText(/emma stone/i);
  expect(actor).toBeInTheDocument();
});
