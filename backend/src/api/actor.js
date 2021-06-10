import { DB_SERVICE } from "../db/dbService.js";

export const actorApi = (req, res) => {
  DB_SERVICE.getActors()
    .then((actors) => {
      res.json(actors);
    })
    .catch((error) => res.status(error).send());
};

export const favouriteActorApi = (req, res) => {
  DB_SERVICE.getFavouritesByUser(req.userId)
    .then((favouriteActorsId) => {
      res.json(favouriteActorsId);
    })
    .catch((error) => res.status(error).send());
};

export const updateFavouriteActorApi = (req, res) => {
  DB_SERVICE.toggleFavouriteActor(req.userId, req.body.favourite);
  // .then((newFavorites) => res.json(newFavorites))
  // .catch((error) => res.status(error));
};
