import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

//components
import Container from "./Components/Container";
import AppBar from "./Components/AppBar";
import Section from "./Components/Section";

import "./styles.scss";

//views
const HomeView = lazy(() =>
  import("./Views/HomeView" /* webpackChunkName: "home-view" */)
);
const MoviesView = lazy(() =>
  import("./Views/MoviesView" /* webpackChunkName: "movies-view" */)
);
const MovieDetailsView = lazy(() =>
  import(
    "./Views/MovieDetailsView" /* webpackChunkName: "movie-details-view" */
  )
);
const ErrorView = lazy(() =>
  import("./Views/ErrorView" /* webpackChunkName: "error-view" */)
);

const App = () => (
  <Container>
    <AppBar />

    <Suspense fallback={<h1>LOADING</h1>}>
      <Switch>
        <Route exact path="/">
          <Section>
            <HomeView />
          </Section>
        </Route>

        <Route exact path="/movies">
          <Section>
            <MoviesView />
          </Section>
        </Route>

        <Route path="/movies/:movieId">
          <Section>
            <MovieDetailsView />
          </Section>
        </Route>

        <Route>
          <ErrorView />
        </Route>
      </Switch>
    </Suspense>
  </Container>
);

export default App;
