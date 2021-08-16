import {
  shallow
} from "enzyme";
import React from "react";
import {
  Provider
} from "react-redux";
import configureStore from 'redux-mock-store'

import HomePage from './homepage.component'
const mockStore = configureStore();
const store = mockStore({});

it('expect to render HomePage Component', () => {
  expect(shallow(<Provider store={store}>
    <HomePage />
  </Provider>)).toMatchSnapshot()
})