import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigate from '../Components/navigate';

test('Navbar component is defined', () => {
  const component = render(
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>,
  );
  expect(component).toBeDefined();
});

test('Navbar snapshot testing', () => {
  const nav = renderer.create(
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>,
  ).toJSON();
  expect(nav).toMatchSnapshot();
});
