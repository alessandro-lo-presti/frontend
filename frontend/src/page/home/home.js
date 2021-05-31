import { movieApiService } from "../../services/movieApiService";
import { writeMainHTML } from "../../common/common";

import braveheart from "../../assets/images/braveheart.jpg";
import gattaca from "../../assets/images/gattaca.jpg";
import goodbyelenin from "../../assets/images/goodbyelenin.jpg";
import harryapezzi from "../../assets/images/harryapezzi.jpg";
import hotfuzz from "../../assets/images/hotfuzz.jpg";
import pulpfiction from "../../assets/images/pulpfiction.jpg";

const timer = (end, date) => `
    -${("" + Math.floor(((end - date) / 1000 / 3600) % 24)).padStart(
        2,
        "0"
    )}:${("" + Math.floor(((end - date) / 1000 / 60) % 60)).padStart(
    2,
    "0"
)}:${("" + (Math.floor((end - date) / 1000) % 60)).padStart(2, "0")}
`;

const imageFromTitle = (title) => {
    switch (title) {
        case "Braveheart":
            return braveheart;
        case "Pulp Fiction":
            return pulpfiction;
        case "Gattaca":
            return gattaca;
        case "Harry a Pezzi":
            return harryapezzi;
        case "Hot Fuzz":
            return hotfuzz;
        case "Goodbye Lenin":
            return goodbyelenin;
        default:
            return braveheart;
    }
};

const movieTemplate = (movie) => `
    <div class="card" data-countdown-timestamp="${movie.end}">
        <img class="card-img-top" src="${imageFromTitle(movie.name)}" alt="${
    movie.name
}"> 
        <div class="card-layer">
        </div>
        <div class="card-body">
            <h4 class="card-text">${movie.name}</h4>
            <p class="card-text countdown"></p>
        </div>
        
    </div>
`;

const buildHome = (movielist) => `
    <div class="card-group grid-container">
        ${movielist.map(movieTemplate).join("")}
    </div>
`;

const handleMoviecountdown = () => {
    const cards = document.querySelectorAll(".card");

    if (cards.length) {
        cards.forEach((card) => {
            const endCard = card.getAttribute("data-countdown-timestamp");
            const time = new Date();
            endCard - time > 0
                ? (card.querySelector(".countdown").innerHTML = timer(
                      endCard,
                      time
                  ))
                : card.remove();
        });
    } else {
        clearInterval(intervalId);
    }
};

const movieListSuccess = (movielist) => {
    //la list è caricata

    //1 mettere i dati in pagina
    const html = buildHome(movielist);
    writeMainHTML(html);

    //gestire eventuali logiche
    intervalId = setInterval(handleMoviecountdown, 1000); //TODO gestire cambio pagina cancellare interval!
    handleMoviecountdown();
};
const movieListError = () => {
    writeMainHTML("<div>Errore nel caricare i dati!</div>");
};

//interval
let intervalId;
const cleanUp = () => {
    console.log("HOME -> cleaning controller");
    clearInterval(intervalId);
};

export const loadHome = () => {
    movieApiService
        .movieList()
        .then((response) => response.json())
        .then(movieListSuccess)
        .catch(movieListError);

    return cleanUp;
};
