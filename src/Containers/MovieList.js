// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterSearch from './FilterSearch';
import { fetchMovies } from '../Redux/actions/createSearch';
import MovieCard from '../Components/MovieCard';

const MovieList = () => {
  const { movies } = useSelector((state) => state);
  console.log(movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchMovies(),
    );
  }, []);

  return (
    <div className="container">
      <FilterSearch />
      <div className="row">
        {movies.movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

      </div>
    </div>
  );
};

export default MovieList;
