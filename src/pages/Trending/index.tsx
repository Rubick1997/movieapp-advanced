import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleItem from "../../components/SingleItem";
import { Grid } from "@material-ui/core";
import PaginationComponent from "../../components/PaginationComponent";
import { ContentType } from "../../types";

const Trending = () => {
  const [page, setPage] = useState<number>(1);
  const [content, setContent] = useState<ContentType[]>([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    try {
      fetchTrending();
    } catch (error) {
      console.log(error.message);
    }
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <Grid container spacing={2} justify="center">
        {content &&
          content.map((item) => (
            <Grid item key={item.id}>
              <SingleItem
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
      <PaginationComponent setPage={setPage} page={page} />
    </div>
  );
};

export default Trending;
