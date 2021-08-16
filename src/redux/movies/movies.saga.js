import {
  takeLatest,
  put,
  all,
  call
} from 'redux-saga/effects';
import {
  apiCall
} from '../../utils/api';
import {
  fetchMoviesFailure,
  fetchMoviesMore,
  fetchMoviesSuccess
} from './movies.action';
import MoviesTypes from './movies.type';

function* fetchMovies({
  payload: {
    search,
    page
  }
}) {
  try {
    const {
      data,
      total
    } = yield apiCall(search, page)
    if (page > 1) {
      yield put(fetchMoviesMore({
        movies: data,
        more: (total > 5),
      }))
    } else {
      yield put(fetchMoviesSuccess({
        movies: data,
        more: (total > 5),
      }));
    }
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

function* onFetchMovies() {
  yield takeLatest(MoviesTypes.FETCH_START, fetchMovies);
}

export function* moviesSagas() {
  yield all([
    call(onFetchMovies),
  ]);
}