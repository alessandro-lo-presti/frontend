const pathApi = "http://localhost:3000/movie";

const movielist = async (token) => {
    return await fetch(pathApi + "?token=" + token, {
        method: "GET",
    });
};

export const movieApiService = {
    movieList: movielist,
};
