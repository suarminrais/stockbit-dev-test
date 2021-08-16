import MovieDetailTypes from "./movie-detail.type";

export const fetchDetailMovieStart = (id) => ({
  type: MovieDetailTypes.FETCH_START,
  payload: id
})

export const fetchDetailMovieFailure = (message) => ({
  type: MovieDetailTypes.FETCH_FAILURE,
  payload: message
})

export const fetchDetailMovieSuccess = (data) => ({
  type: MovieDetailTypes.FETCH_SUCCESS,
  payload: data,
})