import express from "express";
import { movieApi } from "./api/movie.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/movie", movieApi);

app.listen(port, () =>
    console.log(`Web app server listening on port ${port}!`)
);
