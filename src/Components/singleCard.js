import PropTypes from 'prop-types';

const SingleCard = ({ movie }) => (
  <div>
    <div className="col-md-8">
      <h2 className="mb-4">{movie.title}</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Released:</strong>
          {' '}
          {movie.year}
        </li>
        <li className="list-group-item">
          <strong>type:</strong>
          {' '}
          {movie.type}
        </li>
        <li className="list-group-item">
          <strong>IMDB Rating:</strong>
          {' '}
          {movie.imDb}
        </li>
      </ul>
    </div>
  </div>
);

SingleCard.propTypes = {
  movie: PropTypes.shape({
    imDbId: PropTypes.string,
    title: PropTypes.string,
    fullTitle: PropTypes.string,
    type: PropTypes.string,
    year: PropTypes.string,
    imDb: PropTypes.string,
    metacritic: PropTypes.string,
    theMovieDb: PropTypes.string,
    rottenTomatoes: PropTypes.string,
    tV_com: PropTypes.string,
    filmAffinity: PropTypes.string,
    errorMessage: '',
  }).isRequired,
};
export default SingleCard;
