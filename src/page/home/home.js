import { movieApiService } from "../../services/movieApiService";
import { writeMainHTML } from "../../common/common";
import "./home.scss";

const timer = (end, date) => `
    ${Math.floor(((end - date) / 1000) / 3600 % 24)}:
    ${Math.floor(((end - date) / 1000) / 60 % 60)}:
    ${Math.floor(((end - date) / 1000)) % 60}
`

const movieTemplate = (movie, date) => `
    <div class="card">
        
        <div class="card-img">
            <img src="${movie.img}" alt="${movie.name}">
        </div>

        <div class="card-infos">
            <span class="card-info">${movie.name}</span>
            <span class="card-info countdown">
                ${timer(movie.end, date)}
            </span>
        </div>

    </div>
`;

const buildHome = movielist => `
    <div class="card-wrapper">
        ${movielist.map(movie => movieTemplate(movie, new Date())).join("")}
    </div>
`;

export const home = () => {
    movieApiService.movieList()
        .then(movielist => {
                writeMainHTML(buildHome(movielist))
            })
        .catch(() => writeMainHTML("Errore ricezione dati"))
};