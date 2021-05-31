import { writeMainHTML } from "../../common/common";
import { movieApiService } from "../../services/movieApiService";
import { orderByFieldAndDirection } from "./../../common/comparator";

const buildTbodyRow = (movie, index) => `
    <tr class="movie-table-record">
        <td class="movie-id">${index + 1}</td>
        <td class="movie-name">${movie.name}</td>
        <td class="movie-rating">${movie.rating}</td>
        <td class="movie-views">${movie.views}</td>    
    </tr>
`;

const builgBasePageHtml = () => `
<div id="movie-table-container">
    <table class="table">
        <thead class="table-dark">
            <th class="movie-id movie-table-header-column" data-field="id">
                Id
            </th>
            <th class="movie-name movie-table-header-column"  data-field="name">  
                Nome
            </th>
            <th class="movie-rating movie-table-header-column" data-field="rating">
                Voto
            </th>
            <th class="movie-views movie-table-header-column" data-field="views">
                Visual
            </th>
        </thead>
        <tbody id="tbody">
        </tbody>        
    </table>
</div>`;

const buildTBody = (movieList) => {
    movieList.sort(
        orderByFieldAndDirection(orderingData.field, orderingData.direction)
    );
    document.getElementById("tbody").innerHTML = movieList
        .map(buildTbodyRow)
        .join("");
};

const movieListSuccess = (movieList) => {
    writeMainHTML(builgBasePageHtml());
    buildTBody(movieList);

    document.querySelectorAll(".movie-table-header-column").forEach((item) => {
        item.addEventListener("click", (event) => {
            const field = event.target.getAttribute("data-field");
            if (orderingData.field === field) {
                orderingData.direction =
                    orderingData.direction === "ASC" ? "DESC" : "ASC";
            } else {
                orderingData.field = field;
            }
            buildTBody(movieList);
        });
    });
};

const movieListError = () => {
    movieList = null;
    writeMainHTML("Errore ricezione dati");
};


//controller
const orderingData = {
    field: "views",
    direction: "DESC",
};
let movieList = null;
export const loadRanking = () => {
    movieApiService
        .movieList()
        .then((response) => response.json())
        .then(movieListSuccess)
        .catch(movieListError);
};
