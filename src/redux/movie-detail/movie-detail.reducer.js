import MovieDetailTypes from "./movie-detail.type";

const INITIAL_STATE = {
  movie: {},
  onFetch: false,
}

export const movieDetailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieDetailTypes.FETCH_START:
      return {
        ...state,
        onFetch: true,
      };
    case MovieDetailTypes.FETCH_SUCCESS:
      return {
        ...state,
        onFetch: false,
          movie: action.payload,
      };
    case MovieDetailTypes.FETCH_FAILURE:
      return {
        ...state,
        onFetch: false,
          movie: false,
      };
    default:
      return state;
  }
}