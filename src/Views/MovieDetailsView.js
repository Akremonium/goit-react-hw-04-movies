import { useState, useEffect } from "react";
import { useParams, NavLink, useRouteMatch } from "react-router-dom";

import Cast from "../Components/Cast";
import Reviews from "../Components/Reviews";

import * as movieGalleryAPI from "../Services/movie-gallery-api";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    movieGalleryAPI.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <button>BACK</button>

      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />

          <div>
            <h2>{movie.title}</h2>

            <p>Rating: {movie.vote_average}</p>

            <h3>Overview</h3>
            <p>{movie.overview}</p>

            <h3>Genres</h3>
            <p>{movie.genres.map((genre) => `${genre.name}`)}</p>
          </div>

          <div>
            <NavLink to={`${url}/actors`}>Actors</NavLink>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </div>

          <hr />

          <Cast />
          <Reviews />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
