import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { GenresType } from "../../types";
import { Theaters } from "@material-ui/icons";

type GenresList = {
  type: string;
  selectedGenres: GenresType[];
  genres: GenresType[];
  setGenres: React.Dispatch<React.SetStateAction<GenresType[]>>;
  setSelectedGenres: React.Dispatch<React.SetStateAction<GenresType[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

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
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
    console.log(data.genres);
  };

  useEffect(() => {
    fetchGenres();
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
