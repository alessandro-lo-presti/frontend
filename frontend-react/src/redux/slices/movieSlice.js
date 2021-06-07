import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { movieApi } from "../../services/ApiServices";

export const getMovies = createAsyncThunk(
    'fetcher/getMovies',
    async () => {
      return movieApi().then(response => response.json());
    }
  )

  const orderByFieldAndDirection = (field, direction) => (a, b) => {
    let result = 0;
    if (a[field] < b[field]) {
        result = direction === "ASC" ? -1 : +1;
    } else if (a[field] > b[field]) {
        result = direction === "ASC" ? 1 : -1;
    }
    return result;
    };

export const movieSlice = createSlice({
    name: 'fetcher',
    initialState: {
        loading: false,
        movies: []
    },
    reducers: {
      sortRank: (state, action) => {
          const {movies, orderingData} = action.payload;
          state.movies = movies.slice().sort(orderByFieldAndDirection(orderingData.field, orderingData.direction));
      }
  },
    extraReducers: {
        [getMovies.pending]: (state, action) => {
            state.loading = true
        },
        [getMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },
        [getMovies.rejected]: (state, action) => {
          state.loading = false;
      },
    },
  })

  export const {sortRank} = movieSlice.actions;
    
  export default movieSlice.reducer;