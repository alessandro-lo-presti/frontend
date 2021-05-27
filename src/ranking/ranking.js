import { writeMainHTML } from "../common/common";
import { movieApiService } from "../services/movieApiService";

const recordTemplate = movie => `
    <div class"movie-table-record">
        ${movie.name}
    </div>
`;

const buildRanking = movieList => `
    <div class="movie-table">
        ${movieList.map(movie => recordTemplate(movie)).join("")}
    </div>
`;

export const rankingPage = () => {
    movieApiService.movieList()
        .then(movielist => {
            writeMainHTML(buildRanking(movielist));
        })
        .catch(() => writeMainHTML("Errore ricezione dati"))
};