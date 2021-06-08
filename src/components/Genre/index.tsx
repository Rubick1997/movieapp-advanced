import axios from "axios";
import React, { useEffect } from "react";
import { GenresType } from "../../types";

type GenresList = {
  type: string;
  selectedGenres: string[];
  genres: GenresType;
  setGenres: React.Dispatch<React.SetStateAction<GenresType>>;
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

function Genres({
  type,
  selectedGenres,
  genres,
  setGenres,
  setPage,
}: GenresList) {
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
  }, []);

  return <div style={{ padding: "6px 0 " }}></div>;
}

export default Genres;
