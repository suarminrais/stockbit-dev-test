import MoviesTypes from "./movies.type";

export const fetchMovieStart = (payload) => ({
  type: MoviesTypes.FETCH_START,
  payload: payload,
})

export const fetchMoviesSuccess = (data) => ({
  type: MoviesTypes.FETCH_SUCCESS,
  payload: data,
})

export const fetchMoviesMore = (data) => ({
  type: MoviesTypes.FETCH_MORE,
  payload: data,
})

export const fetchMoviesFailure = (message) => ({
  type: MoviesTypes.FETCH_FAILURE,
  payload: message,
})