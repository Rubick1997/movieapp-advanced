import { act, render, screen } from "@testing-library/react";
import Movies from "./index";

test("everything renders", async () => {
   act(() => {
     render(<Movies />);
   }) 
  const cruellaCard = await screen.findByText("Cruella");
  expect(cruellaCard).toBeInTheDocument();
});
