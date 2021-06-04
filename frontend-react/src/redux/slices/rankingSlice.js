import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { movieApi } from "../../services/ApiServices";

export const getMovies = createAsyncThunk(
    'fetcher/getMovies',
    async () => {
      return movieApi().then(response => response.json());
    }
  )

export const rankingSlice = createSlice({
    name: 'fetcher',
    initialState: {
        loading: false,
        movies: []
    },
    extraReducers: {
        [getMovies.pending]: (state, action) => {
            state.loading = true
        },
        [getMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },
    },
  })
    
  export default rankingSlice.reducer;