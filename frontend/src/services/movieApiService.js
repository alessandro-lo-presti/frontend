import { TokenService } from "./tokenService";

const pathApi = "http://localhost:3000/movie";

const movielist = async () => {
    return await fetch(pathApi, {
        method: "GET",
        headers: {
            token: TokenService.getToken(),
        },
    });
};

export const movieApiService = {
    movieList: movielist,
};
