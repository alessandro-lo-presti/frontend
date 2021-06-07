// state
const initialState = {
  movies: [],
  loading: false,
};

// selectors
export const movieSelector = (state) => {
  return state.moviesSlice.movies;
};
export const loadingSelector = (state) => state.moviesSlice.loading;

// action
const MOVIE_SUCCESS = "MOVIE_SUCCESS";
const MOVIE_ERROR = "MOVIE_ERROR";

export const movieSuccessAction = (movies) => ({
  type: MOVIE_SUCCESS,
  movies: movies,
});

export const movieErrorAction = () => ({
  type: MOVIE_ERROR,
});

// reducer
export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SUCCESS:
      state.loading = false;
      return { ...state, movies: action.movies };
    case MOVIE_ERROR:
      state.loading = false;
      return { ...state, movies: [] };
    default:
      return state;
  }
};
