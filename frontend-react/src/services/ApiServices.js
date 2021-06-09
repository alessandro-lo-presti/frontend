import { logoutAction } from "../redux/slices/loginSlice";
import store from "../redux/store";

const pathApi = "http://localhost:3001";

const HANDLER_SESSION_EXPIRED = (response) => {
  if (response.status === 401) {
    store.dispatch(logoutAction());
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

const actorApi = () => {
  return fetch(pathApi + "/actor", {
    method: "GET",
    headers: {
      token: localStorage.getItem("token"),
    },
  })
    .then(HANDLER_SESSION_EXPIRED)
    .then((r) => r.json());
};

const favoriteApi = () => {
  return fetch(pathApi + "/actor/favourites", {
    method: "GET",
    headers: {
      token: localStorage.getItem("token"),
    },
  })
    .then(HANDLER_SESSION_EXPIRED)
    .then((r) => r.json());
};

const waitActorsApi = () => {
  const actorPromise = actorApi();
  const favoritePromise = favoriteApi();

  return Promise.all([actorPromise, favoritePromise]);
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
  waitActorsApi: waitActorsApi,
};
