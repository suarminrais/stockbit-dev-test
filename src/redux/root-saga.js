import {
  all,
  call
} from 'redux-saga/effects';
import {
  movieDetailSagas
} from './movie-detail/movie-detail.saga';
import {
  moviesSagas
} from './movies/movies.saga';

export default function* rootSaga() {
  yield all([call(moviesSagas), call(movieDetailSagas)]);
}