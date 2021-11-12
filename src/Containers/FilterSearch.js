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
      <form id="searchForm">
        <input
          type="search"
          value={title}
          placeholder="Type to search.."
          onChange={handleFilterResult}
        />
      </form>

      <div className="user-list row">
        {filterResult && filterResult.length > 0 ? (
          filterResult.map((movie) => (
            <div key={movie.id} className="">
              <MovieCard key={movie.id} movie={movie} />
            </div>
          ))
        )
          : (
            <h1>Look for movies to watch</h1>
          )}
      </div>
    </>
  );
};

export default FilterSearch;
