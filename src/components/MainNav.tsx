import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Whatshot, Movie, Tv, Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#90cea1",
    zIndex: 100,
    fontSize:"1000px"
  },
});

const MainNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const itemsList = [
    {
      text: "Trending",
      icon: <Whatshot />,
    },
    {
      text: "Movies",
      icon: <Movie />,
    },
    {
      text: "Shows",
      icon: <Tv />,
    },
    {
      text: "Search",
      icon: <Search />,
    },
  ];

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/shows");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      {itemsList.map((item) => {
        const { text, icon } = item;
        return <BottomNavigationAction style={{ color: "white" }} label={text} icon={icon} key={text} />;
      })}
    </BottomNavigation>
  );
};
export default MainNav;
