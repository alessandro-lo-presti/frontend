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

export const updateFavouriteActorApi = async (req, res) => {
  try {
    const userExist = await DB_SERVICE.userExist(req.userId);
    const actorExist = await DB_SERVICE.actorExist(req.body.favourite);

    if (userExist && actorExist) {
      const userFavourites = await DB_SERVICE.userFavourites(req.userId);
      const newFavourites = await DB_SERVICE.toggleFavouriteActor(
        userFavourites,
        req.userId,
        req.body.favourite
      );
      res.json(newFavourites);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(500).send();
  }
};
