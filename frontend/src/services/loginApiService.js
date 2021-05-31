const pathApi = "http://localhost:3000/login";

export const signIn = async (username, password) => {
    return await fetch(pathApi + "?username=" + username + "&password=" + password, {
        method: "GET",
    });
}