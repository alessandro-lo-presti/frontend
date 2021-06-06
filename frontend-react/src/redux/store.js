import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import loginReducer from "./slices/loginSlice";
import rankingReducer from "./slices/rankingSlice";

export default configureStore({
    reducer: {
        movies: movieReducer,
        ranking: rankingReducer,
        token: loginReducer,
    },
});