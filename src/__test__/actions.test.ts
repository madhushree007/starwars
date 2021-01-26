import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../action';
import * as types from '../types/actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to change the loading status', () => {
    const loading = true
    const expectedAction = {
      type: types.SET_LOADING,
      loading
    }
    expect(actions.set_loading(loading)).toEqual(expectedAction)
  })
})


// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore()
//   })
//   it('creates SET_PLAYER_CARD when fetching data has been done', () => {
//     fetchMock.getOnce('https://swapi.dev/api/starships/9/', {
//       body: {
//         playerCard: {
//           name: 'Madhu',
//           model: 'Test',
//           manufacturer: "Test",
//           crew: 123456
//         }
//       },
//     })

//     const expectedActions = [
//       {
//         type: types.SET_PLAYER_CARD,
//         playerCard: {
//           name: 'Madhu',
//           model: 'Test',
//           manufacturer: "Test",
//           crew: 123456
//         }
//       }
//     ]
//     const store = mockStore({ playerCard: {} })

//     return store.dispatch(actions.fetchSWInfo()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })