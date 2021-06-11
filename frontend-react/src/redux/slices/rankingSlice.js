// state
const initialState = {
  movies: [],
};

// selectors
export const moviesRankSelector = (state) => state.rankingSlice.movies;

// action
const MOVIE_RANK_SUCCESS = "MOVIE_RANK_SUCCESS";
const MOVIE_RANK_ERROR = "MOVIE_RANK_ERROR";
const MOVIE_RANK_CLEAN = "MOVIE_RANK_CLEAN";

export const moviesRankSuccessAction = (movies) => ({
  type: MOVIE_RANK_SUCCESS,
  movies: movies,
});

export const moviesRankErrorAction = () => ({
  type: MOVIE_RANK_ERROR,
});

export const moviesRankCleanAction = () => ({
  type: MOVIE_RANK_CLEAN,
});

// reducer
export const rankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_RANK_SUCCESS:
      return { ...state, movies: action.movies };
    case MOVIE_RANK_ERROR:
    case MOVIE_RANK_CLEAN:
      return { ...state, movies: [] };
    default:
      return state;
  }
};
