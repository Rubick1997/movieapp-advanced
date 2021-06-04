import Header from "../Header";
import {
    render,
    screen,
  } from "@testing-library/react";

  test("check if the header exists",() => {
    render (<Header/>)
    const headerText = screen.getByText(/Entertainment database/i)
    expect(headerText).toHaveTextContent("Entertainment database")
  })
