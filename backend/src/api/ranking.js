import { DB_SERVICE } from "../db/dbService.js";

export const rankingApi = (req, res) => {
  try {
    DB_SERVICE.getRanking()
      .then((data) => res.json(data))
      .catch(() => res.status(500).send());
  } catch (error) {
    res.status(500).send();
  }
};
