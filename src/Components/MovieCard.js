import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="col-md-3 mb-5">
    <div className="card card-body bg-dark text-center h-100">
      <img className="w-100 mb-2" src={movie.image} alt="Movie Cover" />
      <h5 className="text-light card-title">
        {movie.title}
        {' '}
        -
        {' '}
        {movie.year}
      </h5>
      <Link className="btn btn-primary" to={`/singleMovie/${movie.id}`}>
        Details
      </Link>
    </div>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    rank: PropTypes.string,
    rankUpDown: PropTypes.string,
    title: PropTypes.string,
    fullTitle: PropTypes.string,
    year: PropTypes.string,
    image: PropTypes.string.isRequired,
    crew: PropTypes.string,
    imDbRating: PropTypes.string,
    imDbRatingCount: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
