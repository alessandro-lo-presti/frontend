import cors from "cors";
import express from "express";
import movies from "../data/movies.json";

const app = express();
const port = 3000;

app.use(cors());

app.get("/movie", (req, res) => {
    res.json(movies);
});
/*
app.get("/movie/:id",  (req, res) => {});
app.put("/movie/:id", (req, res) => {});
app.delete("/movie/:id", (req, res) => {});
app.post("/movie", (req, res) => {});
*/
app.listen(port, () =>
    console.log(`Web app server listening on port ${port}!`)
);
