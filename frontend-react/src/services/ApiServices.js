const hostname = 'localhost';

export const movieApi = async () => {
    return await fetch("http://" + hostname + ":3001/movie", {
        method: "GET",
        headers: {
            token: 'logged',
        },
    })
}
