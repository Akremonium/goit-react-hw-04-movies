import { Switch, Route } from "react-router-dom";

//components
import Container from "./Components/Container";
import AppBar from "./Components/AppBar";
import Search from "./Components/Search";

//views
import HomeView from "./Views/HomeView";
// import MoviesView from "./Views/MoviesView";
import MovieDetailsView from "./Views/MovieDetailsView";
import ErrorView from "./Views/ErrorView";

const App = () => (
  <Container>
    <AppBar />

    <hr />

    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>

      <Route exact path="/movies">
        <Search />
      </Route>

      <Route path="/movies/:movieId">
        <MovieDetailsView />
      </Route>

      <Route>
        <ErrorView />
      </Route>
    </Switch>
  </Container>
);

export default App;
