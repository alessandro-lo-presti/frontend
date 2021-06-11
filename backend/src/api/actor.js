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
  Promise.all(
    DB_SERVICE.toggleFavouriteActorCheck(req.userId, req.body.favourite)
  )
    .then((values) =>
      DB_SERVICE.toggleFavouriteActor(values[0], req.userId, req.body.favourite)
    )
    .then((data) => res.json(data))
    .catch((error) => res.status(error).send());
};
