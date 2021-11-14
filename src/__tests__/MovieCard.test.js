import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

test('MovieCard snapshot with react and redux  ', () => {
  const image = { image: 'empty' };
  const app = renderer.create(
    <BrowserRouter>
      <MovieCard movie={image} />
    </BrowserRouter>,
  ).toJSON();
  expect(app).toMatchSnapshot();
});

test('MovieCardcomponent is defined', () => {
  const image = { image: 'empty' };
  const component = render(
    <BrowserRouter>
      <MovieCard movie={image} />
    </BrowserRouter>,
  );
  expect(component).toBeDefined();
});
