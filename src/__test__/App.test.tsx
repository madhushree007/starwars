import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../App';

describe('With React Testing Library', () => {
  const initialState = {output:10}
  const mockStore = configureStore()
  let store;

  it('Shows "Please Enter Your Name"', () => {
    store = mockStore(initialState)
    const { getByText } = render(<Provider store={store}><App /></Provider>)

    expect(getByText('Please Enter Your Name')).not.toBeNull()
  })
})