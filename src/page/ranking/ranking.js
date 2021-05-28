import { writeMainHTML } from "../../common/common";
import { comparator } from "../../common/comparator";
import { movieApiService } from "../../services/movieApiService";

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

const buildRanking = (movieList) => `
    <table class="table">
        <thead class="table-dark">
            <th class="movie-id">
                Id
            </th>
            <th class="movie-name" id="movie-name">  
                Nome
            </th>
            <th class="movie-rating" id="movie-rating">
                Voto
            </th>
            <th class="movie-views" id="movie-views">
                Visual
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
                <div id="movie-table-container" class="row mt-5">
                    ${buildRanking(movielist)}
                </div>
            `; // --> view

            writeMainHTML(html); //il controller mette in pagina la view

            const tablebody = document.getElementById('tbody');

            //ordina nomi
            document
                .getElementById("movie-name")
                .addEventListener("click", (event) => {
                    const modify = movielist.sort(comparator.orderByName).map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                    const mreverse = movielist.sort(comparator.orderByName).reverse().map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                    tablebody.innerHTML == modify ? tablebody.innerHTML = mreverse : tablebody.innerHTML = modify;
                });

            //ordina rating
            document
                .getElementById("movie-rating")
                .addEventListener("click", (event) => {
                    const modify = movielist.sort(comparator.orderByRating).map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                    const mreverse = movielist.sort(comparator.orderByRating).reverse().map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                    tablebody.innerHTML == modify ? tablebody.innerHTML = mreverse : tablebody.innerHTML = modify;
                });

            //ordina views
            document
                .getElementById("movie-views")
                .addEventListener("click", (event) => {
                    const modify = movielist.sort(comparator.orderByViews).map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                    const mreverse = movielist.sort(comparator.orderByViews).reverse().map((movie, index) => 
                    recordTemplate(movie, index)).join("");
                    tablebody.innerHTML == modify ? tablebody.innerHTML = mreverse : tablebody.innerHTML = modify;
                });

        })
        .catch(() => writeMainHTML("Errore ricezione dati"));
};
