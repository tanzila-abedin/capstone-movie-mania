import { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../Components/MovieCard';

const FilterSearch = () => {
  const { movies } = useSelector((state) => state);
  const [filterResult, setFilterResult] = useState([]);
  const [title, setTitle] = useState('');

  const handleFilterResult = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = movies.movies.filter(
        (movie) => movie.title.toLowerCase().startsWith(keyword.toLowerCase()),
      );
      setFilterResult(results);
    } else {
      setFilterResult([]);
    }

    setTitle(keyword);
  };

  return (
    <>
      <div className="mt-5 text-center">
        <div className="container pb-5 form-bg">
          <h1 className="display-4 mb-3 text-white">
            {' '}
            Search for a popular movie
          </h1>
          <form id="searchForm">
            <input
              type="search"
              value={title}
              placeholder="start typing to filter.."
              onChange={handleFilterResult}
              className="form-control"
            />
          </form>
        </div>
      </div>

      <div className="row filter-border mb-5">
        {
          filterResult.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
}
      </div>
    </>
  );
};

export default FilterSearch;
