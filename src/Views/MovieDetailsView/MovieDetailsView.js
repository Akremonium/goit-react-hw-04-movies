import { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";

import styles from "./MovieDetails.module.scss";

import Cast from "../../Components/Cast";
import Reviews from "../../Components/Reviews";

import * as movieGalleryAPI from "../../Services/movie-gallery-api";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    movieGalleryAPI.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={goBack} className={styles.backButton}>
        BACK
      </button>

      {movie && (
        <div>
          <div className={styles.detailsWrapper}>
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />

            <div className={styles.info}>
              <ul>
                <li className={styles.infoDetail}>
                  <h2>{movie.title}</h2>
                </li>

                <li className={styles.infoDetail}>
                  <p>Rating: {movie.vote_average}</p>
                </li>

                <li className={styles.infoDetail}>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                </li>

                <li className={styles.infoDetail}>
                  <h3>Genres</h3>
                  <ul className={styles.genresList}>
                    {movie.genres.map((genre) => (
                      <li key={genre.name} className={styles.genre}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </li>

                <li className={styles.infoDetail}>
                  <NavLink
                    className={styles.subLink}
                    to={{
                      pathname: `${url}/cast`,
                      state: { from: location?.state?.from ?? "/" },
                    }}
                  >
                    Actors
                  </NavLink>
                  <NavLink
                    className={styles.subLink}
                    to={{
                      pathname: `${url}/reviews`,
                      state: { from: location?.state?.from ?? "/" },
                    }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.subInfoWrapper}>
            <Route path={`${path}/cast`}>
              <Cast />
            </Route>

            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
