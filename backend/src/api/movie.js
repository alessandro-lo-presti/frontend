import dataMovies from "../../data/movies.json";

export const movieApi = (req, res) => {
    const now = new Date().getTime();

    res.json(
        dataMovies.movies.map((v, i) => ({
            ...v,
            end: now + 1000 * 1 * (i + 1),
        }))
    );
};
