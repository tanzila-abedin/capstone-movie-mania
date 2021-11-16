import movieReducer from '../../Redux/reducers/movies';
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIE_DETAIL, FETCH_MOVIES_FAILURE } from '../../Redux/actions/type';

test('movieReducer to return initial state', () => {
  const action = { type: 'demo action' };
  const initialState = {
    loading: false,
    movies: [],
    movie: null,
    error: '',
  };
  expect(movieReducer(undefined, action)).toEqual(initialState);
});

test('CASE : fetch movies  success', () => {
  const movies = {
    movies: [
      { title: 'avengers' },
      { title: 'dune' },
      { title: 'joker' },
    ],
  };
  const action = {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies.movies[0].title,
  };
  const expectedState = {
    loading: false,
    movies: 'avengers',
    error: '',
  };

  expect(movieReducer({}, action)).toEqual(expectedState);
  expect(movieReducer({}, action) === '').toBe(false);
});

test('CASE : fetch movie details', () => {
  const movies = {
    movie: [
      { title: 'Dune' },
    ],
  };
  const action = {
    type: FETCH_MOVIE_DETAIL,
    payload: movies.movie[0].title,
  };
  const expectedState = {
    loading: false,
    movie: 'Dune',
  };

  expect(movieReducer({}, action)).toEqual(expectedState);
});

test('CASE : fetch movies failure', () => {
  const movies = {
    error: 'network error',
  };
  const action = {
    type: FETCH_MOVIES_FAILURE,
    payload: movies.error,
  };
  const expectedState = {
    loading: false,
    movies: [],
    error: 'network error',
  };

  expect(movieReducer({}, action)).toEqual(expectedState);
});
