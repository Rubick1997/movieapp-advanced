import { render, screen } from "@testing-library/react";
import Shows from "./index";

test("everything renders", async () => {
  render(<Shows/>);
  expect(await screen.findByText("The Walking Dead")).toBeInTheDocument();
});
