import { render, screen } from "@testing-library/react";
import Shows from "./index";

test("everything renders", async () => {
  render(<Shows/>);
  const invincibleCard = await screen.findByText("The Walking Dead");
  expect(invincibleCard).toBeInTheDocument();
});
