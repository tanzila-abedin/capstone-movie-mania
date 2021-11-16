import { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../Components/MovieCard';
import FilterCard from '../Components/FilterCard';

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
      <FilterCard title={title} handleFilter={handleFilterResult} />
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
