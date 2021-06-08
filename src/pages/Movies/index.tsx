import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { ContentType } from "../../types";
import PaginationComponent from "../../components/PaginationComponent";
import SingleItem from "../../components/SingleItem";
import { GenresType } from "../../types";
import Genres from "../../components/Genre";
import useGenres from "../../hooks/useGenres";
import styles from "./styles.module.css";


const Movies = () => {
  const [movies, setMovies] = useState<ContentType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [numofPages, setNumofPages] = useState<number>(0);
  const [selectedGenres, setSelectedGenres] = useState<GenresType[]>([]);
  const [genres, setGenres] = useState<GenresType[]>([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    setMovies(data.results);
    setNumofPages(data.total_pages);
  };

  useEffect(() => {
    try {
      fetchMovies();
    } catch (error) {
      console.log(error.message);
    }
    // eslint-disable-next-line
  }, [page,genreforURL]);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setPage={setPage}
      />
      <Grid container spacing={2} justify="center">
        {movies &&
          movies.map((item) => (
            <Grid item>
              <SingleItem
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type={item.media_type}
                vote_average={item.vote_average}
              />
            </Grid>
          ))}
      </Grid>
      {numofPages > 1 && (
        <PaginationComponent
          setPage={setPage}
          page={page}
          numofPages={numofPages}
        />
      )}
    </div>
  );
};

export default Movies;
