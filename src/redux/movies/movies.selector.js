import {
  createSelector
} from 'reselect';

const selectMoviesState = state => state.movies;

export const selectMovies = createSelector(
  [selectMoviesState],
  movies => movies.movies
);

export const selectMovieFetch = createSelector(
  [selectMoviesState],
  movies => movies.onFetch
);

export const selectMovieMore = createSelector(
  [selectMoviesState],
  movies => movies.more
);