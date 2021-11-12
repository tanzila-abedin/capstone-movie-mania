import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from '../Containers/MovieList';
// import Header from './header';
import Navigate from './navigate';

import SingleMovie from '../Containers/singleMovie';
import Footer from './footer';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Navigate />
      <Routes>
        <Route exact path="/" element={<MovieList />}>
          {/* <MovieList /> */}
        </Route>
        <Route path="/singleMovie/:id" element={<SingleMovie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
