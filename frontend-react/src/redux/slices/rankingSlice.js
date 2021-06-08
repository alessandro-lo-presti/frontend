// state
const initialState = {
    movies: [],
};

// selectors
export const moviesRankSelector = (state) => state.rankingSlice.movies;

// action
const MOVIE_RANK_SUCCESS = "MOVIE_RANK_SUCCESS";
const MOVIE_RANK_ERROR = "MOVIE_RANK_ERROR";

export const moviesRankSuccessAction = (movies) => ({
    type: MOVIE_RANK_SUCCESS,
    movies: movies,
});

export const moviesRankErrorAction = () => ({
    type: MOVIE_RANK_ERROR,
});

// reducer
export const rankingReducer = (state = initialState, action) => {
    console.log("ranking reducer", action.type);
    switch (action.type) {
        case MOVIE_RANK_SUCCESS:
            return { ...state, movies: action.movies };
        case MOVIE_RANK_ERROR:
            return { ...state, movies: [] };
        default:
            return state;
    }
};
