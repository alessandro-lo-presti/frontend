const pathApi = "http://localhost:3000/movie";

const movielist = async () => {
    return await fetch(pathApi, {
        method: "GET",
    });
};

export const movieApiService = {
    movieList: movielist,
};
