import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PageHeading from "../Components/PageHeading";

import * as movieGalleryAPI from "../Services/movie-gallery-api";

const HomeView = () => {
  //   const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieGalleryAPI.getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Look at this!" />

      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomeView;
