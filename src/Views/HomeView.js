import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./HomeView.module.scss";

import * as movieGalleryAPI from "../Services/movie-gallery-api";

const HomeView = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    movieGalleryAPI.getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <ul className={styles.cardList}>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id} className={styles.card}>
              <Link to={`/movies/${movie.id}}`}>
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

export default HomeView;
