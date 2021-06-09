import { DB_SERVICE } from "../db/dbService.js";

export const actorApi = (req, res) => {
  res.json(DB_SERVICE.getActors());
};

export const favoriteActorApi = (req, res) => {
  res.json(DB_SERVICE.getFavoritesByUser(req.userId));
};
