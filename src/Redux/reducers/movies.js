import {
  FETCH_MOVIES_FAILURE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIE_DETAIL,
} from '../actions/type';

const initialState = {
  loading: false,
  movies: [],
  movie: null,
  error: '',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: '',
      };
    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        loading: false,
        movies: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default movieReducer;
