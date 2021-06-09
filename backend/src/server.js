import json from "body-parser";
import cors from "cors";
import express from "express";
import { actorApi, favoriteActorApi } from "./api/actor.js";
import { checkAuth } from "./api/auth.js";
import { loginApi } from "./api/login.js";
import { movieApi } from "./api/movie.js";

const app = express();
const port = 3001;

app.use(json());
app.use(cors());

//guest
app.post("/login", loginApi);

//auth
app.get("/movie", checkAuth, movieApi);
app.get("/actor", checkAuth, actorApi);
app.get("/actor/favourites", checkAuth, favoriteActorApi);

app.listen(port, () =>
  console.log(`Web app server listening on port ${port}!`)
);
