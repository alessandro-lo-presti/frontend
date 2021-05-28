import { writePageHTML } from "../../common/common";
import { ApiService } from "../../services/apiService";

const userTableGridHTML = (user) => `
<tr>
    <td>${user.id}</td>
    <td>${user.username}</td>
    <td>${user.lastname}</td>
</tr>
`;

const buildPageHtml = (userList) =>
    userList && userList.length
        ? `<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Lastname</th>
    </tr>
    ${userList.map(userTableGridHTML).join("")}
</table>`
        : `Non ci sono utenti!`;

export const loadPage = () => {
    writePageHTML("Loading...");
    ApiService.userList()
        .then((userList) => writePageHTML(buildPageHtml(userList)))
        .catch(() => writePageHTML("Errore!"));
};
