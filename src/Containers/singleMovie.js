import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleCard from '../Components/singleCard';
import { fetchMovie } from '../Redux/actions/createSearch';

const SingleMovie = () => {
  const { movies } = useSelector((state) => state);
  console.log(movies);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchMovie(id),
    );
  }, []);

  return (
    <div>
      {!movies.movie ? <p>loading</p> : <SingleCard movie={movies.movie} />}
    </div>
  );
};

export default SingleMovie;
