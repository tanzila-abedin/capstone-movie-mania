import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Footer from '../Components/footer';

test('footer component is defined', async () => {
  const component = render(
    <Footer />,
  );
  const footer = await component.findAllByTestId('footer');
  expect(footer).toBeDefined();
});

test('footer snapshot with react and redux', () => {
  const app = renderer.create(
    <Footer />,
  ).toJSON();
  expect(app).toMatchSnapshot();
});
