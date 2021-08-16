import MoviesTypes from "./movies.type";

const INITIAL_STATE = {
  movies: [],
  onFetch: false,
  more: false,
}

export const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesTypes.FETCH_START:
      return {
        ...state,
        onFetch: true,
      };
    case MoviesTypes.FETCH_SUCCESS:
      return {
        ...state,
        onFetch: false,
          movies: action.payload.movies,
          more: action.payload.more,
      };
    case MoviesTypes.FETCH_FAILURE:
      return {
        ...state,
        onFetch: false,
          movies: [],
          more: false,
      };
    case MoviesTypes.FETCH_MORE:
      return {
        ...state,
        onFetch: false,
          movies: [...state.movies, ...action.payload.movies],
          more: action.payload.more,
      };
    default:
      return state;
  }
}