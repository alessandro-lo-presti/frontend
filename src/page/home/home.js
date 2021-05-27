import { movieApiService } from "../../services/movieApiService";
import { writeMainHTML } from "../../common/common";
import "./home.scss";

const movieTemplate = (movie) => `
    <div class="card">
        
        <div class="card-img">
            <img src="${movie.img}" alt="${movie.name}">
        </div>

        <div class="card-infos">
            <span class="card-info">${movie.name}</span>
            <span class="card-info countdown">${movie.end}</span>
        </div>

    </div>
`;

const buildHome = movielist => `
    <div class="card-wrapper">
        ${movielist.map(movie => movieTemplate(movie)).join("")}
    </div>
`;

export const home = () => {
    movieApiService.movieList()
        .then(movielist => writeMainHTML(buildHome(movielist)))
        .catch(() => writeMainHTML("Errore ricezione dati"))
};