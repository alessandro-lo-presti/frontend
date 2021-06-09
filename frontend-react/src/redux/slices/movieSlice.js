// state
const initialState = {
  movies: [],
};

// selectors
export const movieSelector = (state) => state.moviesSlice.movies;

// action
const MOVIE_SUCCESS = "MOVIE_SUCCESS";
const MOVIE_ERROR = "MOVIE_ERROR";
const MOVIE_CLEAN = "MOVIE_CLEAN";

export const movieSuccessAction = (movies) => ({
  type: MOVIE_SUCCESS,
  movies: movies,
});

export const movieErrorAction = () => ({
  type: MOVIE_ERROR,
});

export const movieCleanAction = () => ({
  type: MOVIE_CLEAN,
});

// reducer
export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SUCCESS:
      return { ...state, movies: action.movies };
    case MOVIE_ERROR:
    case MOVIE_CLEAN:
      return { ...state, movies: [] };
    default:
      return state;
  }
};
