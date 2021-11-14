import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../Components/App';
import store from '../store';

test('App snapshot with react and redux  ', () => {
  const app = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(app).toMatchSnapshot();
});
