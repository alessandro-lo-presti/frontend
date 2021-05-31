import cors from "cors";
import express from "express";
import dataMovies from "../data/movies.json";

const app = express();
const port = 3000;

//app.use(cors());

app.get("/movie", (req, res) => {
    const date = new Date();
    //dataMovies.movies.forEach((movie, index) => movie = {...movie, img: '', end: new Date().setTime(date.getTime() + (index + 1) * 60000)});
    dataMovies.movies.forEach((movie, index) => console(movie));
    res.json(dataMovies);
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
