import express from "express";
import { movieApi } from "./api/movie.js";
import cors from "cors";
import { loginApi } from "./api/login.js";

const app = express();
const port = 3000;

//app.use(express.urlencoded({extended: true}));
app.use(cors());

//guest
app.get('/login', loginApi);

//auth
app.get("/movie", movieApi);

app.listen(port, () =>
    console.log(`Web app server listening on port ${port}!`)
);
