import { render, screen } from "@testing-library/react";
import useGenres from "./useGenres";
import { renderHook } from "@testing-library/react-hooks";

test("gives array with ids with no genres", async () => {
  const { result } = renderHook(() =>
    useGenres([
      { id: 12, name: "Hey" },
      { id: 1, name: "Hello" },
      { id: 3, name: "Hello" },
    ])
  );
  const genreIds = result.current;
  expect(genreIds).toBe("12,1,3");
});
