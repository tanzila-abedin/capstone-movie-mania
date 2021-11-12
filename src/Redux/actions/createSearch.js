import axios from 'axios';
import {
  FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIE_DETAIL,
} from './type';

const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMovieDetail = (movie) => ({
  type: FETCH_MOVIE_DETAIL,
  payload: movie,
});

const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

const fetchMovies = () => (dispatch) => {
  dispatch(fetchMoviesRequest);
  const url = 'https://imdb-api.com/en/API/MostPopularMovies/k_saglkr13';
  axios.get(url).then((response) => {
    const movies = response.data.items;
    dispatch(fetchMoviesSuccess(movies));
  }).catch((error) => {
    const errorMsg = error.message;
    dispatch(fetchMoviesFailure(errorMsg));
  });
};

const fetchMovie = (id) => (dispatch) => {
  dispatch(fetchMoviesRequest);
  const url = (`https://imdb-api.com/en/API/Title/k_saglkr13/${id}/Ratings`);
  axios.get(url).then((response) => {
    const movie = response.data;
    dispatch(fetchMovieDetail(movie));
  }).catch((error) => {
    const errorMsg = error.message;
    dispatch(fetchMoviesFailure(errorMsg));
  });
};

export {
  fetchMoviesFailure, fetchMoviesSuccess, fetchMoviesRequest, fetchMovies, fetchMovie,
};
