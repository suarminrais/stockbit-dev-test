import {
  createSelector
} from "reselect";

const movieDetailSelector = state => state.detail;

export const selectMovieDetail = createSelector(
  [movieDetailSelector],
  detail => detail.movie
)

export const selectMovieDetailOnFetch = createSelector(
  [movieDetailSelector],
  detail => detail.onFetch
)