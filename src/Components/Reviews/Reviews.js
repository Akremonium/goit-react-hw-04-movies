import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as movieGalleryAPI from "../../Services/movie-gallery-api";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieGalleryAPI.getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>

      <ul>
        {reviews && reviews.length > 0 ? (
          reviews.map((item) => (
            <li key={item.author}>
              <h4>{item.author}</h4>
              <p>{item.created_at}</p>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <li>No reviews left</li>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
