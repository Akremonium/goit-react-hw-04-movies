import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as movieGalleryAPI from "../../Services/movie-gallery-api";

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieGalleryAPI.getCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>

      <ul>
        {cast &&
          cast.map((actor) => (
            <li key={actor.name}>
              {actor.profile_path ? (
                <img
                  width="100"
                  src={
                    actor.profile_path &&
                    `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  }
                  alt={actor.name}
                />
              ) : (
                <img
                  width="100"
                  src="https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-20.jpg"
                  alt={actor.name}
                />
              )}

              <p>{actor.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
