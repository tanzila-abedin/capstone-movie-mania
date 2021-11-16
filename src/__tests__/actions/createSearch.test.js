import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { applyMiddleware } from 'redux';
import mockAxios from '../../__mocks__/axios';
import { fetchMovies } from '../../Redux/actions/createSearch';

const mockStore = configureMockStore(thunk, applyMiddleware());

describe('Movies Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      movies: {},
    });
  });

  describe('fetchMovies action creator', () => {
    it('dispatches actions and returns data on success', async () => {
      mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          items: [
            { id: 1, title: 'Avengers' },
          ],
        },
      }));

      await fetchMovies()(store.dispatch);
      const actions = store.getActions();
      expect(actions[0].type).toEqual('FETCH_MOVIES_REQUEST');
      expect(actions[1].type).toEqual('FETCH_MOVIES_SUCCESS');
      expect(actions[1].payload[0].title).toEqual('Avengers');
    });
  });
});
