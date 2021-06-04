const pathApi = "http://localhost:3001";

export const movieApi = async () => {
    return await fetch(pathApi + "/movie", {
        method: "GET",
        headers: {
            token: 'logged',
        },
    })
}

export const loginApi = async (username, password) => {
    return await fetch(pathApi + "/login", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
