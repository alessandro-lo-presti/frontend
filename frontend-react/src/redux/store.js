import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import { loginReducer } from "./slices/loginSlice";

export default configureStore({
    reducer: {
        movies: movieReducer,
        token: loginReducer,
    },
});
