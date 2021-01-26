import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer';

const Store = createStore(Reducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof Reducer>

export default Store;