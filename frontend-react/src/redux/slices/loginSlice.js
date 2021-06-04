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
        token: localStorage.getItem("token")
    },
    reducers: {
        cleanToken: (state) => {
            localStorage.setItem("token", '');
            state.token = '';
            state.waiting = false;
        }
    },
    extraReducers: {
        [tryLogin.pending]: (state) => {
            state.waiting = true;
        },
        [tryLogin.fulfilled]: (state, action) => {
            state.token = action.payload.response;
            state.status = false;
            localStorage.setItem("token", state.token);
        },
        [tryLogin.rejected]: (state, action) => {
            state.waiting = false;
        },
    },
});

export const {cleanToken} = loginSlice.actions;

export default loginSlice.reducer;