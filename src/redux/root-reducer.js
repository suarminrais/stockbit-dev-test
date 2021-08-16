import {
  combineReducers
} from 'redux';
import {
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  movieDetailReducer
} from './movie-detail/movie-detail.reducer';
import {
  moviesReducer
} from './movies/movies.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['movies']
};

const rootReducer = combineReducers({
  'movies': moviesReducer,
  'detail': movieDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);