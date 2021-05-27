import { writeMainHTML } from "../../common/common";
import { comparator } from "../../common/comparator";
import { movieApiService } from "../../services/movieApiService";
import "./ranking.scss";

//table
const recordTemplate = (movie, index) => `
    <tr class="movie-table-record">
        <td class="movie-id">
           ${index + 1}
        </td>
        <td class="movie-name">
            ${movie.name}
        </td>
        <td class="movie-rating">
            ${movie.rating}
        </td>
        <td class="movie-views">
            ${movie.views}
        </td>    
    </tr>
`;

//table
const buildRanking = (movieList) => `
    <table class="movie-table">
        <thead class="movie-table-record">
            <th class="movie-id">
                Id
            </th>
            <th class="movie-name">  
                Nome
                <span id="movie-name-button">&#43;</span>
                <span id="movie-name-reverse-button">&#45;</span>
            </th>
            <th class="movie-rating">
                Voto
                <span id="movie-rating-button">&#43;</span>
                <span id="movie-rating-reverse-button">&#45;</span>
            </th>
            <th class="movie-views">
                Visual
                <span id="movie-views-button">&#43;</span>
                <span id="movie-views-reverse-button">&#45;</span>
            </th>
        </thead>

        <tbody id="tbody">
        ${movieList
            .map((movie, index) => recordTemplate(movie, index)).join("")
        }
        </tbody>

        
    </table>
`;

//controller
export const loadRanking = () => {
    movieApiService
        .movieList()
        .then((movielist) => {
            //i dati sono arrivati! -> model

            //buildo la view
            const html = `
                <div id="movie-table-container">
                    ${buildRanking(movielist)}
                </div>
            `; // --> view

            writeMainHTML(html); //il controller mette in pagina la view

            const tablebody = document.getElementById('tbody');

            //ordina nomi
            document
                .getElementById("movie-name-button")
                .addEventListener("click", (event) => {
                   tablebody.innerHTML = movielist.sort(comparator.orderByName).map((movie, index) => 
                   recordTemplate(movie, index)).join("");
                });

            document
                .getElementById("movie-name-reverse-button")
                .addEventListener("click", (event) => {
                    tablebody.innerHTML = movielist.sort(comparator.orderByName).reverse().map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                });

            //ordina rating
            document
                .getElementById("movie-rating-button")
                .addEventListener("click", (event) => {
                    tablebody.innerHTML = movielist.sort(comparator.orderByRating).map((movie, index) => 
                   recordTemplate(movie, index)).join("");
                });

            document
                .getElementById("movie-rating-reverse-button")
                .addEventListener("click", (event) => {
                    tablebody.innerHTML = movielist.sort(comparator.orderByRating).reverse().map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                });

            //ordina views
            document
                .getElementById("movie-views-button")
                .addEventListener("click", (event) => {
                    tablebody.innerHTML = movielist.sort(comparator.orderByViews).map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                });

            document
                .getElementById("movie-views-reverse-button")
                .addEventListener("click", (event) => {
                    tablebody.innerHTML = movielist.sort(comparator.orderByViews).reverse().map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                });
        })
        .catch(() => writeMainHTML("Errore ricezione dati"));
};
