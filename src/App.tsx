import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import Movies from "./pages/Movies";
import Trending from "./pages/Trending";
import Shows from "./pages/Shows";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
      <Container>
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/shows" component={Shows} />
          <Route path="/search" component={Search} />
        </Switch>
      </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
