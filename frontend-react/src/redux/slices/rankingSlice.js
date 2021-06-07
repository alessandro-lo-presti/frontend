// state
const initialState = {
  movies: [],
  loading: false,
};

// selectors
export const moviesRankSelector = state => state.movies;
export const loadingRankSelector = state => state.loading;

// action
const MOVIE_RANK_SUCCESS = "MOVIE_RANK_SUCCESS";
const MOVIE_RANK_ERROR = "MOVIE_RANK_ERROR";

export const moviesRankSuccessAction = movies => ({
  type: MOVIE_RANK_SUCCESS,
  movies: movies
});

export const moviesRankErrorAction = () => ({
  type: MOVIE_RANK_ERROR
});

// reducer
export const rankingReducer = (state = initialState, action) => {
  switch(action.type) {
    case MOVIE_RANK_SUCCESS:
      state.loading = false;
      return { ...state, movies: action.movies };
    case MOVIE_RANK_ERROR:
      state.loading = false;
      return {...state, movies: []}
    default:
      return state;
  }
};