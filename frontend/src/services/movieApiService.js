import pulpfiction from "../assets/images/pulpfiction.jpg";
import goodbyelenin from "../assets/images/goodbyelenin.jpg";
import gattaca from "../assets/images/gattaca.jpg";
import hotfuzz from "../assets/images/hotfuzz.jpg";
import harryapezzi from "../assets/images/harryapezzi.jpg";
import braveheart from "../assets/images/braveheart.jpg";

const pathApi = 'http://localhost:3000/movie';

const buildDate = (delay) => {
    const date = new Date();
    date.setTime(date.getTime() + delay); //ms
    return date;
};

const MOVIE_LIST = [
    {
        id: 1,
        name: "Braveheart",
        views: 1000,
        rating: 8.5,
        img: braveheart,
        end: buildDate(10 * 1000),
    },
    {
        id: 2,
        name: "Pulp Fiction",
        views: 2500,
        rating: 9.1,
        img: pulpfiction,
        end: buildDate(2 * 60 * 1000),
    },
    {
        id: 3,
        name: "Goodbye Lenin",
        views: 400,
        rating: 8.9,
        img: goodbyelenin,
        end: buildDate(30 * 60 * 1000),
    },
    {
        id: 4,
        name: "Harry a Pezzi",
        views: 1200,
        rating: 8.8,
        img: harryapezzi,
        end: buildDate(30 * 60 * 1000),
    },
    {
        id: 5,
        name: "Gattaca",
        views: 700,
        rating: 9.0,
        img: gattaca,
        end: buildDate(30 * 60 * 1000),
    },
    {
        id: 6,
        name: "Hot Fuzz",
        views: 100,
        rating: 8.2,
        img: hotfuzz,
        end: buildDate(30 * 60 * 1000),
    },
];

const movielist = async () => {
    return await fetch(pathApi, {
        method: 'GET'
    });
};

export const movieApiService = {
    movieList: movielist,
};
