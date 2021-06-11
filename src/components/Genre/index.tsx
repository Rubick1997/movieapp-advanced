import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { GenresType } from "../../types";
import { Theaters } from "@material-ui/icons";
import { GenresList } from "../../types";

function Genres({
  type,
  selectedGenres,
  genres,
  setGenres,
  setPage,
  setSelectedGenres,
}: GenresList) {
  const addHandler = (genre: GenresType) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((item) => item.id !== genre.id));
    setPage(1);
  };

  const removeHandler = (genre: GenresType) => {
    setSelectedGenres(selectedGenres.filter((item) => item.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => setGenres(response.data.genres));
  };

  useEffect(() => {
    try {
      fetchGenres();
    } catch (error) {
      console.log(error.message);
    }
    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0 " }}>
      {selectedGenres &&
        selectedGenres.map((item) => (
          <Chip
            color="primary"
            key={item.id}
            size="small"
            label={item.name}
            style={{ margin: 2 }}
            clickable
            onDelete={() => removeHandler(item)}
          />
        ))}
      {genres &&
        genres.map((item) => (
          <Chip
            key={item.id}
            size="small"
            icon={<Theaters />}
            label={item.name}
            style={{ margin: 2 }}
            onClick={() => addHandler(item)}
            clickable
          />
        ))}
    </div>
  );
}

export default Genres;
