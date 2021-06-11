import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { ContentType } from "../../types";
import PaginationComponent from "../../components/PaginationComponent";
import SingleItem from "../../components/SingleItem";
import { GenresType } from "../../types";
import useGenres from "../../hooks/useGenres";
import Genres from "../../components/Genre";

const Shows = () => {
  const [shows, setShows] = useState<ContentType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [numofPages, setNumofPages] = useState<number>(0);
  const [selectedGenres, setSelectedGenres] = useState<GenresType[]>([]);
  const [genres, setGenres] = useState<GenresType[]>([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchShows = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setShows(data.results);
    setNumofPages(data.total_pages);
  };

  useEffect(() => {
    try {
      fetchShows();
    } catch (error) {
      console.log(error.message);
    }
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div>
      <span className="pageTitle">Shows</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setPage={setPage}
      />
      <Grid container spacing={2} justify="center">
        {shows &&
          shows.map((item) => (
            <Grid item key={item.id}>
              <SingleItem
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type="tv"
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

export default Shows;
