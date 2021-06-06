import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { movieApi } from "../../services/ApiServices";

export const getRankMovies = createAsyncThunk(
    'ranking/getRankMovies',
    async () => {
      return movieApi().then(response => response.json());
    }
  );

const orderByFieldAndDirection = (field, direction) => (a, b) => {
let result = 0;
if (a[field] < b[field]) {
    result = direction === "ASC" ? -1 : +1;
} else if (a[field] > b[field]) {
    result = direction === "ASC" ? 1 : -1;
}
return result;
};

export const rankingSlice = createSlice({
    name: 'ranking',
    initialState: {
        loading: false,
        ranking: []
    },
    reducers: {
        sortRank: (state, action) => {
            const {ranking, orderingData} = action.payload;
            state.ranking = ranking.slice().sort(orderByFieldAndDirection(orderingData.field, orderingData.direction));
        }
    },
    extraReducers: {
        [getRankMovies.pending]: (state) => {
            state.loading = true
        },
        [getRankMovies.fulfilled]: (state, action) => {
            state.ranking = action.payload;
            state.loading = false;
        },
        [getRankMovies.rejected]: (state, action) => {
          state.loading = false;
      },
    },
  })

  export const {sortRank} = rankingSlice.actions;

  export default rankingSlice.reducer;