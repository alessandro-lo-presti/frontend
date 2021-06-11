import json from "body-parser";
import cors from "cors";
import express from "express";
import {
  actorApi,
  favouriteActorApi,
  updateFavouriteActorApi,
} from "./api/actor.js";
import { checkAuth } from "./api/auth.js";
import { loginApi } from "./api/login.js";
import { movieApi } from "./api/movie.js";
import { rankingApi } from "./api/ranking.js";

const app = express();
const port = 3001;

app.use(json());
app.use(cors());

//guest
app.post("/login", loginApi);

//auth
app.get("/movie", checkAuth, movieApi);
app.get("/movie/ranking", checkAuth, rankingApi);
app.get("/actor", checkAuth, actorApi);
app.get("/actor/favourites", checkAuth, favouriteActorApi);
app.post("/actor/favourites", checkAuth, updateFavouriteActorApi);

app.listen(port, () =>
  console.log(`Web app server listening on port ${port}!`)
);
