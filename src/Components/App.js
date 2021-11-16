import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from '../Containers/MovieList';
import Navigate from './navigate';

import SingleMovie from '../Containers/singleMovie';
import Footer from './footer';

function App() {
  return (
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route exact path="/" data-testid="movieList" element={<MovieList />} />
        <Route path="/singleMovie/:id" element={<SingleMovie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
