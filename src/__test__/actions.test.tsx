import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../action';
import App from '../App';
import * as types from '../types/actionTypes';


const middlewares = [thunk]
const mockStore = configureStore(middlewares);
describe('My Connected React-Redux Component', () => {
  let store;
  let component: any;
 
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });

    store.dispatch = jest.fn();
 
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
 
  it('should dispatch an action on button click', () => {
 
  });
});

describe('actions', () => {
  it('should create an action to change the loading status', () => {
    const loading = true
    const expectedAction = {
      type: types.SET_LOADING,
      loading
    }
    expect(actions.set_loading(loading)).toEqual(expectedAction)
  });

  it('should set the user name', () => {
    const expectedAction = {
      type: types.USER_LOGIN,
      username: 'Madhu'
    }
    expect(actions.user_login('Madhu')).toEqual(expectedAction)
  });

  const data1 = {
    name: 'Madhu',
    height: 174,
    mass: 333,
    gender: 'Female'
  }
  it('should set the player card details', () => {
    const expectedAction = {
      type: types.SET_PLAYER_CARD_PEOPLE,
      playerCardPeople: data1
    }
    expect(actions.set_player_card_people(data1)).toEqual(expectedAction)
  });

});


