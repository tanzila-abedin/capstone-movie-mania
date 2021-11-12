import PropTypes from 'prop-types';

const SingleCard = ({ movie }) => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-4 card card-body opacity">
        <img className="imgBox" src={movie.image} alt="Movie Cover" />
      </div>
      <div className="col-md-7">
        <h2 className="mb-3 title-text">{movie.fullTitle}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Year:</strong>
            {' '}
            {movie.year}
          </li>
          <li className="list-group-item">
            <strong>type:</strong>
            {' '}
            {movie.type}
          </li>
          <li className="list-group-item">
            <strong>Released date:</strong>
            {' '}
            {movie.releaseDate}
          </li>
          <li className="list-group-item">
            <strong>Runtime:</strong>
            {' '}
            {movie.runtimeStr}
          </li>
          <li className="list-group-item">
            <strong>Awards:</strong>
            {' '}
            {movie.awards}
          </li>
          <li className="list-group-item">
            <strong>Directors:</strong>
            {' '}
            {movie.directors}
          </li>
          <li className="list-group-item">
            <strong>Writers:</strong>
            {' '}
            {movie.writers}
          </li>
          <li className="list-group-item">
            <strong>Stars:</strong>
            {' '}
            {movie.stars}
          </li>
          <li className="list-group-item">
            <strong>Genres:</strong>
            {' '}
            {movie.genres}
          </li>
          <li className="list-group-item">
            <strong>Companies:</strong>
            {' '}
            {movie.companies}
          </li>
          <li className="list-group-item">
            <strong>Countries:</strong>
            {' '}
            {movie.countries}
          </li>
          <li className="list-group-item">
            <strong>Languages:</strong>
            {' '}
            {movie.languages}
          </li>
          <li className="list-group-item">
            <strong>Plot:</strong>
            {' '}
            {movie.plot}
          </li>
          <li className="list-group-item">
            <strong>Ratings:</strong>
            {' '}
            {movie.imDbRating}
          </li>
        </ul>
      </div>
    </div>
  </div>
);

SingleCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    originalTitle: PropTypes.string,
    fullTitle: PropTypes.string,
    type: PropTypes.string,
    year: PropTypes.string,
    image: PropTypes.string,
    releaseDate: PropTypes.string,
    runtimeStr: PropTypes.string,
    awards: PropTypes.string,
    directors: PropTypes.string,
    writers: PropTypes.string,
    stars: PropTypes.string,
    genres: PropTypes.string,
    companies: PropTypes.string,
    countries: PropTypes.string,
    languages: PropTypes.string,
    plot: PropTypes.string,
    imDbRating: PropTypes.string,
    errorMessage: '',
  }).isRequired,
};
export default SingleCard;
