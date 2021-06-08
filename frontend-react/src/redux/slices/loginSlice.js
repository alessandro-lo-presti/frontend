// state
const initialState = {
    token: localStorage.getItem("token") || null,
};

// selectors
export const tokenSelector = (state) => state.tokenSlice.token;

// action
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGOUT = "LOGOUT";

export const loginSuccessAction = (token) => ({
    type: LOGIN_SUCCESS,
    token: token,
});

export const loginErrorAction = () => ({
    type: LOGIN_ERROR,
});

export const logoutAction = () => ({
    type: LOGOUT,
});

// reducer
export const loginReducer = (state = initialState, action) => {
    console.log("login reducer", action.type);
    switch (action.type) {
        case LOGIN_SUCCESS: {
            localStorage.setItem("token", action.token);
            return { ...state, token: action.token };
        }
        case LOGIN_ERROR:
        case LOGOUT: {
            localStorage.removeItem("token");
            return { ...state, token: null };
        }
        default:
            return state;
    }
};
