import { writeMainHTML } from "../common/common";
import { comperator } from "../common/comparetor";
import { movieApiService } from "../services/movieApiService";
import "./ranking.scss"

const recordTemplate = (movie, index) => `
    <div class="movie-table-record">

        <div class="movie-id">
           ${index + 1}
        </div>

        <div class="movie-name">
            ${movie.name}
        </div>

        <div class="movie-rating">
            ${movie.rating}
        </div>

        <div class="movie-views">
            ${movie.views}
        </div>
    
    </div>
`;

const buildRanking = movieList => `
    <div class="movie-table">

        <div class="movie-table-record">

            <div class="movie-id">
                <h2>Id</h2>
            </div>

            <div class="movie-name">
                <h2>Nome</h2>
                <button id="movie-name-button">
                    p
                </button>
            </div>

            <div class="movie-rating">
                <h2>Voto</h2>
                <button id="movie-rating-button">
                    p
                </button>
            </div>

            <div class="movie-views">
                <h2>Visual</h2>
                <button id="movie-views-button">
                    p
                </button>
            </div>

        </div>

        ${movieList.map((movie, index) => recordTemplate(movie, index)).join("")}
    </div>
`;

export const rankingPage = () => {
    movieApiService.movieList()
        .then(movielist => {
            writeMainHTML(buildRanking(movielist));

            //ordina nomi
            document.getElementById('movie-name-button').addEventListener('click', event => {
                writeMainHTML(buildRanking(movielist.sort(comperator.orderByName)));
            });

            //ordina rating
            document.getElementById('movie-rating-button').addEventListener('click', event => {
                writeMainHTML(buildRanking(movielist.sort(comperator.orderByRating)));
            });

            //ordina views
            document.getElementById('movie-views-button').addEventListener('click', event => {
                writeMainHTML(buildRanking(movielist.sort(comperator.orderByViews)));
            });

        })
        .catch(() => writeMainHTML("Errore ricezione dati"))

};