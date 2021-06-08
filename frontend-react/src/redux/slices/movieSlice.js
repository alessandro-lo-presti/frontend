// state
const initialState = {
    movies: [],
};

// selectors
export const movieSelector = (state) => state.moviesSlice.movies;

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
    console.log("movie reducer", action.type);
    switch (action.type) {
        case MOVIE_SUCCESS:
            return { ...state, movies: action.movies };
        case MOVIE_ERROR:
            return { ...state, movies: [] };
        default:
            return state;
    }
};
