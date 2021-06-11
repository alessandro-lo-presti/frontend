import { DB_SERVICE } from "../db/dbService.js";

export const rankingApi = async (req, res) => {
  try {
    const movies = await DB_SERVICE.getRanking();
    res.json(movies);
  } catch (error) {
    res.status(500).send();
  }
};
