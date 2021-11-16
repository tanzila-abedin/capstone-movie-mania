import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FilterCard from '../Components/FilterCard';

test('Displays heading on filter card component', async () => {
  const title = 'string';
  const handleFilter = jest.fn();
  const home = render(
    <FilterCard title={title} handleFilter={handleFilter} />,
  );
  const welcomeText = await home.findByTestId('filterCard');
  expect(welcomeText.textContent).toBe(' Search for a popular movie');
});

test('FilterCard component is defined', async () => {
  const title = 'string';
  const handleFilter = jest.fn();
  const component = render(
    <FilterCard title={title} handleFilter={handleFilter} />,
  );
  const filter = await component.findAllByTestId('filterCard');
  expect(filter).toBeDefined();
});

test('FilterCard snapshot with react and redux  ', () => {
  const title = 'string';
  const handleFilter = jest.fn();
  const app = renderer.create(
    <FilterCard title={title} handleFilter={handleFilter} />,
  ).toJSON();
  expect(app).toMatchSnapshot();
});
