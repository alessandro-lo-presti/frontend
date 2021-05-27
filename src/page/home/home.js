import { movieApiService } from "../../services/movieApiService";
import { writeMainHTML } from "../../common/common";

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

const buildHome = movieList => `
    <div class="class-wrapper">
        ${movieList.map(movie => movieTemplate(movie).join(""))}
    </div>
`;

export const home = () => {
    movieApiService.movieList()
        .then(movielist => writeMainHTML(buildHome(movieList)))
        .catch()
};