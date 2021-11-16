import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter as Router } from 'react-router-dom';
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

test('For presence of classname in the div container', async () => {
  const image = { image: 'empty' };
  const component = render(
    <Router>
      <MovieCard movie={image} />
    </Router>,
  );
  const movieCard = await component.findByTestId('movieCard');
  expect(movieCard.className).toContain('card-body', 'opacity');
});
