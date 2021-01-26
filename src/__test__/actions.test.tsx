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
  })
});


