import { rest } from "msw";

export const handlers = [
  rest.get(`https://api.themoviedb.org/3/genre/movie/list`, (req, res, ctx) => {
    return res(
      ctx.json({
        genres: [
          { id: 28, name: "Action" },
          { id: 12, name: "Adventure" },
          { id: 16, name: "Animation" },
        ],
      })
    );
  }),
  rest.get(`https://api.themoviedb.org/3/genre/tv/list`, (req, res, ctx) => {
    return res(
      ctx.json({
        genres: [
          { id: 28, name: "Action" },
          { id: 12, name: "Adventure" },
          { id: 16, name: "Animation" },
        ],
      })
    );
  }),
  rest.get("https://api.themoviedb.org/3/discover/tv", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            backdrop_path: "/uro2Khv7JxlzXtLb8tCIbRhkb9E.jpg",
            first_air_date: "2010-10-31",
            id: 1402,
            last_air_date: "2021-04-04",
            name: "The Walking Dead",
            original_name: "The Walking Dead",
            overview:
              "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
            popularity: 428.516,
            poster_path: "/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
            tagline: "Fight the dead. Fear the living.",
            vote_average: 8.1,
            vote_count: 10935,
          },
        ],
      })
    );
  }),
  rest.get("https://api.themoviedb.org/3/tv/1402", (req, res, ctx) => {
    return res(
      ctx.json({
        backdrop_path: "/uro2Khv7JxlzXtLb8tCIbRhkb9E.jpg",
        first_air_date: "2010-10-31",
        id: 1402,
        last_air_date: "2021-04-04",
        name: "The Walking Dead",
        original_name: "The Walking Dead",
        overview:
          "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
        popularity: 428.516,
        poster_path: "/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
        tagline: "Fight the dead. Fear the living.",
        vote_average: 8.1,
        vote_count: 10935,
      })
    );
  }),
  rest.get("https://api.themoviedb.org/3/discover/movie", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            backdrop_path: "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
            genre_ids: [35, 80],
            id: 337404,
            original_title: "Cruella",
            overview:
              "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
            popularity: 6077.166,
            poster_path: "/eQlEajrYVXjstXgvAjwRnQ3LU1s.jpg",
            release_date: "2021-05-26",
            title: "Cruella",
            vote_average: 8.7,
            vote_count: 2284,
          },
        ],
      })
    );
  }),
  rest.get("https://api.themoviedb.org/3/discover/movie", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            backdrop_path: "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
            genre_ids: [35, 80],
            id: 337404,
            original_title: "Cruella",
            overview:
              "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
            popularity: 6077.166,
            poster_path: "/eQlEajrYVXjstXgvAjwRnQ3LU1s.jpg",
            release_date: "2021-05-26",
            title: "Cruella",
            vote_average: 8.7,
            vote_count: 2284,
          },
        ],
      })
    );
  }),
  rest.get("https://api.themoviedb.org/3/movie/337404", (req, res, ctx) => {
    return res(
      ctx.json({
        backdrop_path: "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
        genre_ids: [35, 80],
        id: 337404,
        original_title: "Cruella",
        overview:
          "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
        popularity: 6077.166,
        poster_path: "/eQlEajrYVXjstXgvAjwRnQ3LU1s.jpg",
        release_date: "2021-05-26",
        title: "Cruella",
        vote_average: 8.7,
        vote_count: 2284,
        tagline: "In the blink of an eye your life can turn upsi",
      })
    );
  }),
];
