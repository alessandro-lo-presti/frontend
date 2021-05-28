import { movieApiService } from "../../services/movieApiService";
import { writeMainHTML } from "../../common/common";
import "./home.scss";

const timer = (end, date) => `
    -${("" + Math.floor(((end - date) / 1000 / 3600) % 24)).padStart(
        2,
        "0"
    )}:${("" + Math.floor(((end - date) / 1000 / 60) % 60)).padStart(
    2,
    "0"
)}:${("" + (Math.floor((end - date) / 1000) % 60)).padStart(2, "0")}
`;

const movieTemplate = (movie, date) => `
    <div class="card mx-3" data-countdown-timestamp="${movie.end}">
        <img class="card-img-top" src="${movie.img}" alt="${movie.name}">
        <div class="card-body text-center">
            <h4 class="card-text">${movie.name}</h4>
            <p class="card-text countdown"></p>
        </div>

    </div>
`;

const buildHome = (movielist) => `
    <div class="row row-cols-1 row-cols-md-5 g-4 my-3 d-flex justify-content-center">
        ${movielist.map((movie) => movieTemplate(movie, new Date())).join("")}
    </div>
`;

//stoppare intervallo
let intervalId;

const handleMoviecountdown = () => {
    
    //document getselector all
    const cards = document.querySelectorAll('.card');

    //per ogni card -> leggere il data-countdown-timestamp

    //aggiornare il countdown html

    //se countdown < 0 rimuovere dal dom la card

    if(cards.length) {
        cards.forEach(card => {
            const endCard = Date.parse(card.getAttribute('data-countdown-timestamp'));
            const time = new Date();
            (endCard - time > 0) ? card.querySelector('.countdown').innerHTML = timer(endCard, time) : card.remove();
        });
    }
    else {
        clearInterval(intervalId);
    }
    
};

export const loadHome = () => {
    console.log("load home start");
    movieApiService
        .movieList()
        .then((movielist) => {
            //la list è caricata

            //1 mettere i dati in pagina
            const html = buildHome(movielist);
            writeMainHTML(html);

            //gestire eventuali logiche
            intervalId = setInterval(handleMoviecountdown, 1000); //TODO gestire cambio pagina cancellare interval!
            handleMoviecountdown();

            document.querySelectorAll('.nav-link').forEach(item => {
                item.addEventListener('click', () => clearInterval(intervalId));
            });
        })
        
};
