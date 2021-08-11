import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

import * as movieGalleryAPI from "../../Services/movie-gallery-api";
import Search from "../../Components/Search";

import styles from "../HomeView/HomeView.module.scss";

const MoviesView = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const newQuery = new URLSearchParams(location.search).get("query");

  const onSubmit = () => {
    history.push({
      ...location,
      search: `query=${query}`,
    });

    setQuery("");
  };

  useEffect(() => {
    if (!newQuery) {
      return;
    }

    movieGalleryAPI
      .getMovieBySearch(newQuery)
      .then(setMovies)
      .catch((error) => {
        console.log(error);
      });

    setQuery("");
  }, [newQuery]);

  const onChange = (evt) => {
    setQuery(evt.currentTarget.value.toLowerCase().trim());
  };

  return (
    <>
      <Search query={query} onSubmit={onSubmit} onChange={onChange} />
      <ul className={styles.cardList}>
        {movies &&
          movies.map((movie) => (
            <li className={styles.card} key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className={styles.cardTitle}>{movie.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesView;
