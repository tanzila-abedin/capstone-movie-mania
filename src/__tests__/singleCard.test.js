import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SingleCard from '../Components/navigate';

test('SingleCard component is defined', () => {
  const component = render(
    <BrowserRouter>
      <SingleCard />
    </BrowserRouter>,
  );
  expect(component).toBeDefined();
});

test('SingleCard snapshot testing', () => {
  const component = renderer.create(
    <BrowserRouter>
      <SingleCard />
    </BrowserRouter>,
  ).toJSON();
  expect(component).toMatchSnapshot();
});
