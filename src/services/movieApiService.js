import gattaca from "../assets/images/gattaca.jpg";

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
        img: gattaca,
        end: buildDate(10 * 1000),
    },
    {
        id: 2,
        name: "Pulp Fiction",
        views: 2500,
        rating: 9.1,
        img: "../img/gattaca.jpg",
        end: buildDate(2 * 60 * 1000),
    },
    {
        id: 3,
        name: "Goodbye Lenin",
        views: 400,
        rating: 8.9,
        img: "../img/gattaca.jpg",
        end: buildDate(30 * 60 * 1000),
    },
    {
        id: 4,
        name: "Harry a Pezzi",
        views: 1200,
        rating: 8.8,
        img: "../img/gattaca.jpg",
        end: buildDate(30 * 60 * 1000),
    },
    {
        id: 5,
        name: "Gattaca",
        views: 700,
        rating: 9.0,
        img: "../img/gattaca.jpg",
        end: buildDate(30 * 60 * 1000),
    },
    {
        id: 6,
        name: "Hot Fuzz",
        views: 100,
        rating: 8.2,
        img: "../img/gattaca.jpg",
        end: buildDate(30 * 60 * 1000),
    },
];

const movielist = () => {
    return new Promise((resolve, reject) => {
        resolve(MOVIE_LIST);
    });
};

export const movieApiService = {
    movieList: movielist,
};
