import { DB_SERVICE } from "../db/dbService.js";

export const actorApi = (req, res) => {
  DB_SERVICE.getActors()
    .then((actors) => {
      res.json(actors);
    })
    .catch(() => res.status(500).send());
};

export const favouriteActorApi = (req, res) => {
  DB_SERVICE.getFavouritesByUser(req.userId)
    .then((favouriteActorsId) => {
      if (favouriteActorsId) {
        res.json(favouriteActorsId);
      } else {
        res.status(400).send();
      }
    })
    .catch(() => res.status(500).send());
};

export const updateFavouriteActorApi = (req, res) => {
  Promise.all(
    DB_SERVICE.toggleFavouriteActorCheck(req.userId, req.body.favourite)
  )
    .then((values) => {
      if (values[1] && values[2]) {
        return DB_SERVICE.toggleFavouriteActor(
          values[0],
          req.userId,
          req.body.favourite
        );
      } else {
        res.status(400).send();
      }
    })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(400).send();
      }
    })
    .catch(() => res.status(500).send());
};
