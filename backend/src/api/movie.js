import { DB_SERVICE } from "../db/dbService.js";

export const movieApi = async (req, res) => {
  const now = new Date().getTime();

  try {
    const movies = await DB_SERVICE.getMovies();
    res.json(
      movies.map((v, i) => ({
        ...v,
        end: now + 1000 * 1 * (i + 1),
      }))
    );
  } catch (error) {
    res.status(500).send();
  }
};
