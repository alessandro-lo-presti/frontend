let token = localStorage.getItem("token") || null;
console.log("token initialization", token);

const VALID_TOKEN = "logged";

export const TokenService = {
    getToken: () => token,
    setToken: (newToken) => {
        token = newToken;
        localStorage.setItem("token", token);
    },
    isLogged: () => !!token,
    isValidToken: () => token === VALID_TOKEN,
};
