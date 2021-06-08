import { logoutAction } from "../redux/slices/loginSlice";
import store from "../redux/store";

const pathApi = "http://localhost:3001";

const HANDLER_SESSION_EXPIRED = (response) => {
    console.log("response", response);
    if (response.status === 401) {
        store.dispatch(logoutAction());
        console.log("sessione scaduta");
        return Promise.reject("session expired");
    } else {
        return Promise.resolve(response);
    }
};

const movieApi = () => {
    return fetch(pathApi + "/movie", {
        method: "GET",
        headers: {
            token: localStorage.getItem("token"),
        },
    })
        .then(HANDLER_SESSION_EXPIRED)
        .then((r) => r.json());
};

const loginApi = (username, password) => {
    return fetch(pathApi + "/login", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((r) => r.json());
};

export const ApiService = {
    loginApi: loginApi,
    movieApi: movieApi,
};
