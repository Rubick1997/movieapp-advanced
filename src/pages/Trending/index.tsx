import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import SingleItem from "../../components/SingleItem";
import { Grid } from "@material-ui/core";

type ContentType = {
  id: number;
  media_type: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  name: string;
  vote_average: number;
};

const Trending = () => {
  const [content, setContent] = useState<ContentType[]>([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
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
  }, []);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <Grid container spacing={2} justify="center">
        {content &&
          content.map((item) => (
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
    </div>
  );
};

export default Trending;
