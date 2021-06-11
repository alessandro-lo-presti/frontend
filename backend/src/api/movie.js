import { DB_SERVICE } from "../db/dbService.js";

export const movieApi = (req, res) => {
  const now = new Date().getTime();

  DB_SERVICE.getMovies()
    .then((movies) => {
      const dataMovies = movies.map((v, i) => ({
        ...v,
        end: now + 1000 * 1 * (i + 1),
      }));
      res.json(dataMovies);
    })
    .catch(() => res.status(500).send());
};
