import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../services/ApiServices";

export const tryLogin = createAsyncThunk(
    'login/tryLogin',
    async (action) => {
        return loginApi(action.username, action.password).then(response => response.json());
    }
  )

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        waiting: false,
        token: 'default'
    },
    extraReducers: {
        [tryLogin.pending]: (state) => {
            state.waiting = true;
        },
        [tryLogin.fulfilled]: (state, action) => {
            console.log('successo');
            state.token = action.payload.response;
            state.status = false;
        },
        [tryLogin.rejected]: (state, action) => {
            state.waiting = false;
        },
    },
});

export default loginSlice.reducer;