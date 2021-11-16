import PropTypes from 'prop-types';

const FilterCard = ({ title, handleFilter }) => (
  <>
    <div className="mt-5 text-center">
      <div className="container pb-5 form-bg">
        <h1 className="display-4 mb-3 text-white" data-testid="filterCard">
          {' '}
          Search for a popular movie
        </h1>
        <form id="searchForm">
          <input
            type="search"
            value={title}
            placeholder="start typing to filter.."
            onChange={handleFilter}
            className="form-control"
          />
        </form>
      </div>
    </div>
  </>
);

FilterCard.propTypes = {
  title: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterCard;
