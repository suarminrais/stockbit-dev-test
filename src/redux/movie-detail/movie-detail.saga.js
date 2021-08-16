import {
  takeLatest,
  put,
  all,
  call
} from 'redux-saga/effects';
import {
  apiCallDetail
} from '../../utils/api';
import {
  fetchDetailMovieFailure,
  fetchDetailMovieSuccess
} from './movie-detail.action';
import MovieDetailTypes from './movie-detail.type';

function* fetchMovieDetail({
  payload
}) {
  try {
    const {
      data
    } = yield apiCallDetail(payload)
    yield put(fetchDetailMovieSuccess(data))
  } catch (error) {
    yield put(fetchDetailMovieFailure(error));
  }
}

function* onFetchDetailMovie() {
  yield takeLatest(MovieDetailTypes.FETCH_START, fetchMovieDetail);
}

export function* movieDetailSagas() {
  yield all([
    call(onFetchDetailMovie),
  ]);
}