import { rest } from "msw";

export const handlers = [
  rest.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          genres: [
            { id: 28, name: "Action" },
            { id: 12, name: "Adventure" },
            { id: 16, name: "Animation" },
          ],
        })
      );
    }
  ),
];
