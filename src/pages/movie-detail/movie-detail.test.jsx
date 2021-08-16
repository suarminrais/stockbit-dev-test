import {
  shallow
} from "enzyme";
import React from "react";
import {
  Provider
} from "react-redux";
import configureStore from 'redux-mock-store'

import MovieDetailPage from './movie-detail.component'

const mockStore = configureStore();
const store = mockStore({});

it('expect to render HomePage Component', () => {
  expect(shallow(<Provider store={store}>
    <MovieDetailPage />
  </Provider>)).toMatchSnapshot()
})