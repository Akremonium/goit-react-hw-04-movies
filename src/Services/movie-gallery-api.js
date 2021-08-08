import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";
const KEY = "a85ce0a3a8e5ad12ea07b98ae28ff0f0";

export const getTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}/3/trending/movie/day?api_key=${KEY}`)
    .then(({ data }) => data.results)
    .catch((error) => {
      console.log(error);
    });
};

export const getMovieDetails = (movieId) => {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}?api_key=${KEY}`)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
};

export const getCast = (movieId) => {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY}`)
    .then(({ data }) => data.cast)
    .catch((error) => {
      console.log(error);
    });
};

export const getReviews = (movieId) => {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}/reviews?api_key=${KEY}`)
    .then(({ data }) => data.results)
    .catch((error) => {
      console.log(error);
    });
};

export const getMovieBySearch = () => {
  return axios.get(`${BASE_URL}/search/movie?api_key=${KEY}`);
};

// export function fetchMovieDetails() {
//   return fetchBase(`${BASE_URL}/movies/get-movie-details?api_key=${KEY} `);
// }

// export function fetchMovieCredits() {
//   return fetchBase(`${BASE_URL}/movies/get-movie-credits?api_key=${KEY} `);
// }

// export function fetchMovieReviews() {
//   return fetchBase(`${BASE_URL}/movies/get-movie-reviews `);
// }
