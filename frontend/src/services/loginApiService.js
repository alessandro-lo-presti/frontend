const pathApi = "http://localhost:3000/login";

export const signIn = async (username, password) => {
    return await fetch(pathApi, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            "Content-Type": "application/json",
        },
    });
};
