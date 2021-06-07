const initialState = {
  token: localStorage.getItem("token") || null,
};

//tipi di azioni ->servono nel reducer e nelle actiot creator
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGOUT = "LOGOUT";

//selettori stato -> valore
export const tokenSelector = (state) => {
  console.log("token selector", state);
  return state.tokenSlice.token;
};

//action creator -> metodi di utilità per creare azioni che userò nel reducer
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

//reducer
export const loginReducer = (state = initialState, action) => {
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
