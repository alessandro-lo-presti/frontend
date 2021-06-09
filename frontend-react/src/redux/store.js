import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./slices/movieSlice";
import { loginReducer } from "./slices/loginSlice";
import { rankingReducer } from "./slices/rankingSlice";
import { actorsReducer } from "./slices/actorsSlice";

export default configureStore({
  reducer: {
    moviesSlice: movieReducer,
    rankingSlice: rankingReducer,
    tokenSlice: loginReducer,
    actorsSlice: actorsReducer,
  },
});
