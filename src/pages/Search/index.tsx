import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import {
  Button,
  createMuiTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  Grid,
} from "@material-ui/core";
import { ContentType } from "../../types";
import PaginationComponent from "../../components/PaginationComponent";
import SingleItem from "../../components/SingleItem";
import axios from "axios";

import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  const [type, setType] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [searchRes, setSearchRes] = useState<ContentType[]>([]);
  const [numofPages, setNumofPages] = useState<number>(0);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchResults = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setSearchRes(data.results);
      setNumofPages(data.total_pages);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchResults();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className={styles.field}>
          <TextField
            style={{ flex: 1 }}
            className={styles.searchBox}
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={fetchResults}
          >
            <SearchIcon fontSize="large"/>
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          className={styles.tab}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Shows" />
        </Tabs>
      </ThemeProvider>
      <Grid container spacing={2} justify="center">
        {searchRes &&
          searchRes.map((item) => (
            <Grid item>
              <SingleItem
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={item.vote_average}
              />
            </Grid>
          ))}
        {searchText &&
          !searchRes &&
          (type ? <h2>No Shows Found</h2> : <h2>No Movies Found</h2>)}
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

export default Search;
